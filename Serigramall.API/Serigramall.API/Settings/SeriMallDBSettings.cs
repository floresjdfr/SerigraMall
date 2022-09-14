namespace Serigramall.API.Settings
{
    public class SeriMallDBSettings : IDatabaseSettings
    {
        public string DatabaseName { get; set; }
        public string CollectionName { get; set; }
        public string Host { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string ConnectionString { get => $"mongodb+srv://{User}:{Password}@{Host}"; }
    }
}