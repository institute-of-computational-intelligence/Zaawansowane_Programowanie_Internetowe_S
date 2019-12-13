using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Author
    {
        public int Id {get; set;}
        [Required]
        public string FirstName {get; set;}
        [Required]
        public string LastName {get; set;}
        [DataType(DataType.EmailAddress)]
        public string Email {get; set;}
    }
}