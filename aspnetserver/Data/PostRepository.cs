using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace aspnetserver.Data
{
    public static class PostRepository
    {
        public async static Task<List<Post>> GetPostsAsync()
        {
            using (var db = new AppDBContext())
            {
                return await db.Posts.ToListAsync();

            }
        }

        public async static Task<Post> GetPostByIdAsync(int postId)
        {
            using (var db = new AppDBContext())
            {
                return await db.Posts.FirstOrDefaultAsync(post => post.PostId == postId);
            }
        }

        public async static Task<bool> CreatePostAsync(Post createPost)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    await db.Posts.AddAsync(createPost);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public async static Task<bool> UpdatePostAsync(Post postToUpdate)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    db.Posts.Update(postToUpdate);
                    return await db.SaveChangesAsync() >= 1;

                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        public async static Task<bool> DeletePostByIdAsync(int postId)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    var Post = await GetPostByIdAsync(postId);

                    db.Posts.Remove(Post);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
