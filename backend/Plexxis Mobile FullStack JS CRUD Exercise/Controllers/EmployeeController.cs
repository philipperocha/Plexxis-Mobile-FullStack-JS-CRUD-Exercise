using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Plexxis_Mobile_FullStack_JS_CRUD_Exercise.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Plexxis_Mobile_FullStack_JS_CRUD_Exercise.Controllers
{
    [EnableCors("AllowMyOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public EmployeeController(EmployeeContext context)
        {
            _context = context;

            if (_context.Employees.Count() == 0)
            {
                // Load Employees from employees.json if collection is empty
                
                string path = Path.GetFullPath(@"App_Data/employees.json");
                using (StreamReader r = new StreamReader(path))
                {
                    string json = r.ReadToEnd();
                    List<Employee> items = JsonConvert.DeserializeObject<List<Employee>>(json);
                    foreach (Employee item in items)
                    {
                        _context.Employees.Add(item);
                    }
                    _context.SaveChanges();
                }
            }
        }

        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var todoItem = await _context.Employees.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }
    }
}
