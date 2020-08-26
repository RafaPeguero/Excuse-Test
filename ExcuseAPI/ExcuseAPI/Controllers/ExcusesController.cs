using ExcuseAPI.Models;
using ExcuseAPI.Repositiry;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExcuseAPI.Controllers
{
    public class ExcusesController: ControllerBase
    {
        private readonly ExcuseDbContext Context;

        private readonly IExcuseRepository Repository;

        public ExcusesController(ExcuseDbContext context, IExcuseRepository repository)
        {
            this.Context = context;
            this.Repository = repository;
        }


        [HttpGet("/api/Excuses")]
        public async Task<IEnumerable<Excuse>> getExcuses()
        {
            return await Repository.getExcuses();
        }

        [HttpGet("/api/Excuses/{id}")]
        public async Task<Excuse> getExcuse(int id)
        {
            return await Repository.getExcuse(id);
        }


        [HttpPost("/api/PostExcuse")]
        public ActionResult PostExcuse( [FromBody]Excuse excuse)
        {
            try
            {
                Repository.PostExcuse(excuse);
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }

        }

        [HttpPut("/api/PutExcuse/{id}")]
        public ActionResult PutExcuse(int id, [FromBody] Excuse excuse)
        {
            if(excuse.Id == id)
            {
                Repository.PutExcuse(id, excuse);
                return Ok();
            } else
            {
                return BadRequest();
            }
        }
        [HttpDelete("/api/DeleteExcuse/{id}")]
        public ActionResult DeleteExcuse(int id)
        {
            Excuse excuse = Context.Excuses.FirstOrDefault(e => e.Id == id);
            if (excuse != null)
            {
                Repository.DeleteExcuse(id);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
