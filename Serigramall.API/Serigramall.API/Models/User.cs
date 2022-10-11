namespace Serigramall.API.Models
{
    public class User
    {
        public string user_id { get; set; }
        public string email { get; set; }
        public string email_verified { get; set; }
        public string username { get; set; }
        public string phone_number { get; set; }
        public string phone_verified { get; set; }
        public string created_at { get; set; }
        public string updated_at { get; set; }
        public Identity[] identities { get; set; }
        public string app_metadata { get; set; }
        public UserMetadata user_metadata { get; set; }
        public string picture { get; set; }
        public string name { get; set; }
        public string nickname { get; set; }
        public string[] multifactor { get; set; }
        public string last_ip { get; set; }
        public string last_login { get; set; }
        public string logins_count { get; set; }
        public string blocked { get; set; }
        public string given_name { get; set; }
        public string family_name { get; set; }
    }
}
