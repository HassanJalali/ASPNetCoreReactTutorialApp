using Microsoft.EntityFrameworkCore.Migrations;

namespace aspnetserver.Migrations
{
    public partial class FirstInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    PostId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Content = table.Column<string>(type: "TEXT", maxLength: 1000000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.PostId);
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Content", "Title" },
                values: new object[] { 1, "this a post 1 and i realy Love it", "Post 1" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Content", "Title" },
                values: new object[] { 2, "this a post 2 and i realy Love it", "Post 1" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Content", "Title" },
                values: new object[] { 3, "this a post 3 and i realy Love it", "Post 1" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Content", "Title" },
                values: new object[] { 4, "this a post 4 and i realy Love it", "Post 1" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Content", "Title" },
                values: new object[] { 5, "this a post 5 and i realy Love it", "Post 1" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "Content", "Title" },
                values: new object[] { 6, "this a post 6 and i realy Love it", "Post 1" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Posts");
        }
    }
}
