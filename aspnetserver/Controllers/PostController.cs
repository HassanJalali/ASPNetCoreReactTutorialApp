using aspnetserver.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace aspnetserver.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : Controller
    {
        [HttpGet]
        [Route("GetAllPost")]
        public async Task<IEnumerable<Post>> GetAllPost()
        {
            var posts = await PostRepository.GetPostsAsync();
            return posts;
        }

        [HttpGet]
        [Route("GetPostById")]
        public async Task<Post> GetPostById(int id)
        {
            var post = await PostRepository.GetPostByIdAsync(id);
            return post;
        }
    }
}








