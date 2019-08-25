using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Plexxis_Mobile_FullStack_JS_CRUD_Exercise
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
