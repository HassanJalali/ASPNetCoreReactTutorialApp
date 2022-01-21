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

        [HttpPut]
        [Route("CreatePost")]
        public async Task<bool> CreatePost(Post CreatePost)
        {
            return await PostRepository.CreatePostAsync(CreatePost);
        }

        [HttpPut]
        [Route("UpdatePost")]
        public async Task<bool> UpdatePost(Post updatePost)
        {
            return await PostRepository.UpdatePostAsync(updatePost);
        }

        [HttpDelete]
        [Route("DeletePost")]
        public async Task<bool> DeletePost(int postId)
        {
         return await PostRepository.DeletePostByIdAsync(postId);       
        }
    }
}







