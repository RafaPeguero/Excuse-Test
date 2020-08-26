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
    public class ExcuseTypeController: Controller
    {
        private readonly ExcuseDbContext Context;
        private readonly IExcuseRepository repository;

        public ExcuseTypeController(ExcuseDbContext context, IExcuseRepository repository)
        {
            this.Context = context;
            this.repository = repository;
        }

        [HttpGet("/api/ExcuseTypes")]
        public async Task<IEnumerable<ExcuseType>> getExcuseTypes()
        {
            return await repository.getExcuseTypes();
        }

    }
}
