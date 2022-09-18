namespace Serigramall.API.Settings
{
    public interface IDatabaseSettings
    {
        //public string ConnectionString { get => $"mongodb+srv://{User}:{Password}@{Host}"; }
        public string ConnectionString { get; }
        public string Host { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string DatabaseName { get; set; }
        public string CollectionName { get; set; }
    }
}
