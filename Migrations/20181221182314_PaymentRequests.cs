using Microsoft.EntityFrameworkCore.Migrations;

namespace banksite.Migrations
{
    public partial class PaymentRequests : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Inn = table.Column<string>(nullable: true),
                    Bik = table.Column<string>(nullable: true),
                    AccountNumber = table.Column<string>(nullable: true),
                    Purpose = table.Column<string>(nullable: true),
                    Amount = table.Column<decimal>(nullable: false),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Requests");
        }
    }
}
