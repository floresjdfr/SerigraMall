using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Serigramall.API.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Roles = Serigramall.API.Models.Roles;
using User = Serigramall.API.Models.User;

namespace Serigramall.API.Helpers.Auth0
{
    public class ManagementAPI
    {
        private readonly IConfiguration _configuration;
        private string domain;
        private string clientId;
        private string clientSecret;
        private string audience;

        public string BASE_URL { private set; get; }
        public ManagementAPI(IConfiguration configuration)
        {
            _configuration = configuration;
            domain = _configuration["Auth0:Domain"];
            clientId = _configuration["Auth0:ManagementClientId"];
            clientSecret = _configuration["Auth0:ManagementClientSecret"];
            audience = _configuration["Auth0:ManagementAudience"];
            BASE_URL = $"https://{domain}";
        }

        public async Task<User> UpdateUser(string userId, User userToUpdate)
        {
            using (var client = new HttpClient())
            {
                var authenticationHeader = await GetAuthenticationHeader();

                client.BaseAddress = new Uri(BASE_URL);
                client.DefaultRequestHeaders.Add("Authorization", authenticationHeader);


                var json = JsonConvert.SerializeObject(userToUpdate, Formatting.Indented, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
                var stringContent = new StringContent(json, Encoding.UTF8, "application/json");
                var response = await client.PatchAsync($"api/v2/users/{userId}", stringContent);

                response.EnsureSuccessStatusCode();

                var content = await response.Content.ReadAsStringAsync();
                var userUpdated = JsonConvert.DeserializeObject<User>(content);

                return userUpdated;
            }
        }

        public async Task<List<User>> GetUser(string userId)
        {
            var usersList = new List<User>();
            using (var client = new HttpClient())
            {
                var authenticationHeader = await GetAuthenticationHeader();

                client.BaseAddress = new Uri(BASE_URL);
                client.DefaultRequestHeaders.Add("Authorization", authenticationHeader);

                var url = "/api/v2/users";
                if (!string.IsNullOrEmpty(userId))
                    url += ("/" + userId);

                var response = await client.GetAsync(url);

                response.EnsureSuccessStatusCode();
                var stringContenct = await response.Content.ReadAsStringAsync();

                if (!string.IsNullOrEmpty(userId))
                {
                    var user = JsonConvert.DeserializeObject<User>(stringContenct);
                    usersList.Add(user);
                }
                else
                    usersList = JsonConvert.DeserializeObject<List<User>>(stringContenct);

                return usersList;
            }
        }

        public async Task AssignRole(User user, Roles roles)
        {
            using (var client = new HttpClient())
            {
                var authenticationHeader = await GetAuthenticationHeader();

                client.BaseAddress = new Uri(BASE_URL);
                client.DefaultRequestHeaders.Add("Authorization", authenticationHeader);

                var json = JsonConvert.SerializeObject(roles);
                var stringContent = new StringContent(json, Encoding.UTF8, "application/json");
                var response = await client.PostAsync($"/api/v2/users/{user.user_id}/roles", stringContent);

                response.EnsureSuccessStatusCode();
            }
        }


        /// <summary>
        /// Returns the authentication header that needs to be in each request made to the Management API
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NoNullAllowedException"></exception>
        public async Task<string> GetAuthenticationHeader()
        {
            var token = await GetManagementAPITokenAsync();
            if (token == null) throw new NoNullAllowedException("Unable to get the access token");

            return "Bearer " + token.access_token;
        }

        public async Task<Token> GetManagementAPITokenAsync()
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri($"https://{domain}");
                var response = await client.PostAsync("oauth/token", new FormUrlEncodedContent(
                    new Dictionary<string, string>
                    {
                            { "grant_type", "client_credentials" },
                            { "client_id", clientId },
                            { "client_secret", clientSecret},
                            { "audience", audience}
                    }
                ));

                response.EnsureSuccessStatusCode();
                var content = await response.Content.ReadAsStringAsync();
                var token = JsonConvert.DeserializeObject<Token>(content);
                return token;
            }
        }

    }
}
