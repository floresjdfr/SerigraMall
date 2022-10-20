namespace Serigramall.API.Models
{
    public class UserMetadata
    {
        public string address { get; set; }
        public string phone { get; set; }
        public string provider { get; set; }
        public bool isInformationComplete { get; set; }
        public int? auth0ProviderItentifier { get; set; }//This is used to identify which auth0 account is being used to retreive the user's information
    }

    public enum Auth0Provider
    {
        PROVIDERS = 1,
        CLIENTS = 2
    };
}
