using Microsoft.EntityFrameworkCore.Migrations;

namespace Plexxis_Mobile_FullStack_JS_CRUD_Exercise.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(nullable: true),
                    code = table.Column<string>(nullable: true),
                    profession = table.Column<string>(nullable: true),
                    color = table.Column<string>(nullable: true),
                    city = table.Column<string>(nullable: true),
                    branch = table.Column<string>(nullable: true),
                    assigned = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
