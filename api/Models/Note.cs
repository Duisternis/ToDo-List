namespace api.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Content { get; set; } = string.Empty;
        public string? UserId  { get; set; }
        public User? User { get; set; }
    }
}