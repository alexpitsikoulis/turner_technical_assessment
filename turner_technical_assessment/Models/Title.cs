using System;
using MongoDB;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace turner_technical_assessment.Models
{
    public class Title
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public object[] Awards { get; set; }
        public string[] Genres { get; set; }
        public object[] OtherNames { get; set; }
        public object[] Participants { get; set; }
        public int ReleaseYear { get; set; }
        public object[] Storylines { get; set; }
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public string TitleNameSortable { get; set; }
        public object[] Keywords { get; set; }
        public object[] KeyGenres { get; set; }
    }
}
