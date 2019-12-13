using Microsoft.EntityFrameworkCore;

namespace WebApiTemplate.DAL
{
    public class AppDbContext:DbContext
    {
       
        public AppDbContext(DbContextOptions<AppDbContext> options) 
            :base(options)
        {
            
        }
    }
}