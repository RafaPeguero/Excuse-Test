using System.Collections.Generic;
using System.Threading.Tasks;
using ExcuseAPI.Models;

namespace ExcuseAPI.Repositiry
{
    public interface IExcuseRepository
    {
        void DeleteExcuse(int id);
        Task<Excuse> getExcuse(int id);
        Task<IEnumerable<Excuse>> getExcuses();
        void PostExcuse(Excuse excuse);
        void PutExcuse(int id, Excuse excuse);
        Task<IEnumerable<ExcuseType>> getExcuseTypes();
    }
}