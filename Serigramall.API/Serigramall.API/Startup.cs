using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Serigramall.API.Controllers;
using Serigramall.API.Repositories;
using Serigramall.API.Settings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Serigramall.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string AllowSpecifications = "_AllowSpecifications";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            var domain = $"https://{Configuration["Auth0:Domain"]}/";
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.Authority = domain;
                options.Audience = Configuration["Auth0:Audience"];
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    NameClaimType = ClaimTypes.NameIdentifier
                };
            });

            services.AddCors(options =>
            {
                options.AddPolicy(name: AllowSpecifications, policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                });
            });

            services.Configure<SeriMallDBSettings>(Configuration.GetSection(nameof(SeriMallDBSettings)));
            services.AddSingleton<IDatabaseSettings>(item => item.GetRequiredService<IOptions<SeriMallDBSettings>>().Value);
            services.AddSingleton<ProductRepository>();
            services.AddAuthorization();

            services.AddSwaggerGen();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint("v1/swagger.json", "API V1");
                });
                
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(AllowSpecifications);

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
