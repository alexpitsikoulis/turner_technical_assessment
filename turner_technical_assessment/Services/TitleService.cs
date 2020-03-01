using System;
using turner_technical_assessment.Models;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System.Collections.Generic;
using System.Linq;

namespace turner_technical_assessment.Services
{
    public class TitleService
    {
        private readonly IMongoCollection<Title> _titles;

        public TitleService(ITitlesDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _titles = database.GetCollection<Title>(settings.TitlesCollectionName);
        }

        public List<Title> Get() =>
            _titles.Find(title => true).ToList();

        public Title Get(string id)
        {
            var result = _titles.Find(t => true).ToList();
            return result.Where(t => t.Id == id).FirstOrDefault();
        }
    }
}
