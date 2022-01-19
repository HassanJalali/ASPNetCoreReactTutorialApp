using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace aspnetserver.Data
{
    public sealed class AppDBContext: DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlite("Data source = ./Data/AppData.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Post[] PostsToSeed = new Post[6];

            for (int i = 1; i <= 6 ; i++)
            {
                PostsToSeed[i - 1] = new Post
                {
                    PostId = i,
                    Title = $"Post {1}",
                    Content = $"this a post {i} and i realy Love it"
                };
            }
            modelBuilder.Entity<Post>().HasData(PostsToSeed);
           
        }

    }
}
