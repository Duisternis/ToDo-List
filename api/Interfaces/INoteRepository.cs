using api.Models;

namespace api.Interfaces
{
    public interface INoteRepository
    {
        Task<List<Note>> GetAllAsync(User userId);
        Task<Note?> GetByIdAsync(User userId, int id);
        Task<Note> CreateAsync(Note note);
        Task<Note?> DeleteAsync(User userId, int id);
    }
}