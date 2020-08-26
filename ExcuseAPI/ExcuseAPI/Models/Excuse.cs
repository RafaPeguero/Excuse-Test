using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ExcuseAPI.Models
{
    public class Excuse
    {

        public int Id { get; set; }
        [Required]
        [StringLength(200)]
        public string Employee_Name { get; set; }
        [Required]
        [StringLength(200)]
        public string Employee_LastName { get; set; }
        [Required]
        public DateTime Employee_Date { get; set; }
        public int ExcuseTypeId { get; set; }
        public ExcuseType ExcuseType { get; set; }
    }
}
