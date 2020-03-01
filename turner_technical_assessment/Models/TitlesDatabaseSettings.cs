using System;
namespace turner_technical_assessment.Models
{
    public class TitlesDatabaseSettings : ITitlesDatabaseSettings
    {
		public string TitlesCollectionName { get; set; }
		public string ConnectionString { get; set; }
		public string DatabaseName { get; set; }
	}

    public interface ITitlesDatabaseSettings
    {
        string TitlesCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
