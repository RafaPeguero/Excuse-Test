using ExcuseAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExcuseAPI.Repositiry
{
    public class ExcuseRepository : IExcuseRepository
    {
        private readonly ExcuseDbContext Context;
        public ExcuseRepository(ExcuseDbContext Context)
        {
            this.Context = Context;

        }

        public async Task<IEnumerable<Excuse>> getExcuses()
        {
            return await Context.Excuses.Include(m => m.ExcuseType).ToListAsync();
        }

        public async Task<Excuse> getExcuse(int id)
        {
            return await Context.Excuses.Include(m => m.ExcuseType).FirstOrDefaultAsync(i => i.Id == id);
        }


        public void PostExcuse(Excuse excuse)
        {
            Context.Add(excuse);
            Context.SaveChanges();
        }
        public void PutExcuse(int id, Excuse excuse)
        {
            Context.Entry(excuse).State = EntityState.Modified;
            Context.SaveChanges();



        }
        public void DeleteExcuse(int id)
        {
            Excuse excuse = Context.Excuses.FirstOrDefault(e => e.Id == id);
            Context.Excuses.Remove(excuse);
            Context.SaveChanges();

        }

        public async Task<IEnumerable<ExcuseType>> getExcuseTypes()
        {
            return await Context.ExcusesType.ToListAsync();
        }
    }
}
