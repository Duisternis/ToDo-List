using api.Dtos;
using api.Mappers;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using api.Extensions;
using Microsoft.AspNetCore.Identity;
using api.Models;

namespace api.Controllers
{
    [Route("api/note")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly INoteRepository _noteRepo;
        private readonly UserManager<User> _userManager;
        public NoteController(INoteRepository noteRepo, UserManager<User> userManager)
        {
            _noteRepo = noteRepo;
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll()
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var userName = User.GetUserName();
            var user = await _userManager.FindByNameAsync(userName);

            var notes = await _noteRepo.GetAllAsync(user);
            var result = notes.Select(note => note.ToDtoFromNote());
            return Ok(result);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var userName = User.GetUserName();
            var user = await _userManager.FindByNameAsync(userName);

            var note = await _noteRepo.GetByIdAsync(user, id);
            if (note == null) return NotFound();
            return Ok(note.ToDtoFromNote());
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create([FromBody] CreateNoteDto noteDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var note = noteDto.ToNoteFromCreateDto();

            var userName = User.GetUserName();
            var user = await _userManager.FindByNameAsync(userName);

            note.UserId = user.Id;

            var createdNote = await _noteRepo.CreateAsync(note);
            return CreatedAtAction(nameof(GetById), new { id = createdNote.Id }, createdNote.ToDtoFromNote());
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var userName = User.GetUserName();
            var user = await _userManager.FindByNameAsync(userName);

            var deletedNote = await _noteRepo.DeleteAsync(user, id);
            if (deletedNote == null) return NotFound();
            return NoContent();
        }
    }
}