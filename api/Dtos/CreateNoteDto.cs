using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public class CreateNoteDto
    {
        [Required]
        [MaxLength(200, ErrorMessage = "Content cannot be longer than 200 characters.")]
        public string Content { get; set; } = string.Empty;
    }
}