using api.Dtos;
using api.Models;

namespace api.Mappers
{
    public static class NoteMapper
    {
        public static Note ToNoteFromCreateDto(this CreateNoteDto noteDto) 
        {
            return new Note
            {
                Content = noteDto.Content
            };
        }

        public static NoteDto ToDtoFromNote(this Note note) 
        {
            return new NoteDto
            {
                Id = note.Id,
                Content = note.Content
            };
        }
    }
}