using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using System;
using Microsoft.AspNetCore.Http;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorsController : ControllerBase
    {
        private Models.AppContext db;
        
        public AuthorsController(Models.AppContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAuthor()
        {
            var list = await this.db.Authors.ToListAsync();
            return Ok(list);
        }

        [HttpGet("{id}", Name="GetAuthor")]
        public async Task<IActionResult> GetAuthors(int id)
        {
            var author = await db.Authors.SingleOrDefaultAsync(a=>a.Id == id);
            if(author == null)
                return NotFound($"Nie znalazlem autora o id = {id}");
            else
                return Ok(author);
        }

        [HttpPost]
        public async Task<IActionResult> InsertAuthor([FromBody] Author author)
        {
            if(!ModelState.IsValid)
                return BadRequest();
            try
            {
                db.Authors.Add(author);
                await db.SaveChangesAsync();
                return CreatedAtAction("GetAuthor", new {Id = author.Id}, author);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdateAuthor(int id, [FromBody] Author author)
        {
            if(!ModelState.IsValid)
                return BadRequest();
            try
            {
                int count = await db.Authors.CountAsync(a=>a.Id ==id);
                if(count == 0)
                    return NotFound($"Nie znalazlem autora o id = {id}");
                var entity = db.Attach(author);
                entity.State = EntityState.Modified;
                await db.SaveChangesAsync();
                return StatusCode(StatusCodes.Status202Accepted, author);
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveAuthor(int id, [FromBody] Author author)
        {
            try
            {
                int count = await db.Authors.CountAsync(a=>a.Id ==id);
                if(count == 0)
                    return NotFound($"Nie znalazlem autora o id = {id}");
                var entity = db.Attach(author);
                entity.State = EntityState.Deleted;
                await db.SaveChangesAsync();
                return StatusCode(StatusCodes.Status202Accepted, author);
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}