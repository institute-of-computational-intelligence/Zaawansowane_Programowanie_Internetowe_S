using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class AppContext : DbContext
    {
        public DbSet<Author> Authors {get; set;}

        public AppContext(DbContextOptions<AppContext> options) : base(options)
        {}
    }
}