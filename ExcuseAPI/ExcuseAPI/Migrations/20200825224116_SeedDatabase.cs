using Microsoft.EntityFrameworkCore.Migrations;

namespace ExcuseAPI.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO ExcusesType (Description) VALUES ('Salud')");
            migrationBuilder.Sql("INSERT INTO ExcusesType (Description) VALUES ('Diligencia familiar')");
            migrationBuilder.Sql("INSERT INTO ExcusesType (Description) VALUES ('Diligencia academica')");
            migrationBuilder.Sql("INSERT INTO ExcusesType (Description) VALUES ('Emergencia')");


            migrationBuilder.Sql("INSERT INTO Excuses (Employee_Name,Employee_LastName,Employee_Date, ExcuseTypeId) VALUES ('Juan Gabriel', 'Peña Gonzales', '2020-09-15', (SELECT Id from ExcusesType where description = 'Salud'))");
            migrationBuilder.Sql("INSERT INTO Excuses (Employee_Name,Employee_LastName,Employee_Date, ExcuseTypeId) VALUES ('Alexandra Maria', 'Cuevas Santana', '2020-11-23', (SELECT Id from ExcusesType where description = 'Diligencia familiar'))");
            migrationBuilder.Sql("INSERT INTO Excuses (Employee_Name,Employee_LastName,Employee_Date, ExcuseTypeId) VALUES ('Rafael Ignacio', 'Peguero Cuevas', '2020-12-20', (SELECT Id from ExcusesType where description = 'Diligencia academica'))");


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Delete From Excuses where Employee_Name In ('Juan Gabriel', 'Alexandra Maria', 'Rafael Ignacio')");

        }
    }
}
