using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Plexxis_Mobile_FullStack_JS_CRUD_Exercise.Models
{
    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public string code { get; set; }
        public string profession { get; set; }
        public string color { get; set; }
        public string city { get; set; }
        public string branch { get; set; }
        public bool assigned { get; set; }

        // public Employee(string Name)
        // {
        //     id = 0;
        //     name = Name;
        //     code = "000";
        //     profession = "developer";
        //     color = "red";
        //     city = "Toronto";
        //     branch = "Woodbridge";
        //     assigned = false; 
        // }

        // public Employee()
        // {
        //     new Employee("NewUser"); 
        // }
    }
}
