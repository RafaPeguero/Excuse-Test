using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExcuseAPI.Models
{
    public class ExcuseDbContext: DbContext
    {

        public ExcuseDbContext(DbContextOptions<ExcuseDbContext> options) : base(options)
        {

        }
        public DbSet<Excuse> Excuses { get; set; }
        public DbSet<ExcuseType> ExcusesType { get; set; }
    }
}
