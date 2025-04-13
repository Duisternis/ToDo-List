using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class NoteRepository : INoteRepository
    {
        private readonly ApplicationDBContext _context;
        public NoteRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Note> CreateAsync(Note note)
        {
            await _context.Notes.AddAsync(note);
            await _context.SaveChangesAsync();
            return note;
        }

        public async Task<Note?> DeleteAsync(User user, int id)
        {
            var note = await _context.Notes.FirstOrDefaultAsync(n => n.UserId == user.Id && n.Id == id);
            if (note == null) return null;
            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();
            return note;
        }

        public async Task<List<Note>> GetAllAsync(User user)
        {
            return await _context.Notes.Where(n => n.UserId == user.Id).ToListAsync();
        }

        public async Task<Note?> GetByIdAsync(User user, int id)
        {
            return await _context.Notes.FirstOrDefaultAsync(n => n.UserId == user.Id && n.Id == id);
        }
    }
}