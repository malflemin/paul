function lyrics(){
}

lyrics.prototype.getLyrics = async function(message, lyr){
  
    var lower = message.content.toLowerCase();
    var search = lower.replace(":lyrics", " ");
    var apostrophe = search.replace("’", "");
  
    if (apostrophe.includes("-")) {
      var splitter = apostrophe.split("-");
      var lyrics = lyr.fetch(splitter[0], splitter[1], function(err, lyrics) {
        if (lyrics.length >= 2000) {
          message.channel.send(lyrics.substring(0, 1999));
          message.channel.send(lyrics.substring(2000, lyrics.length));
        } else message.channel.send(err || lyrics);
      });
    } else {
      async function getLyrics(song) {
        
      }
      message.channel.send("Please include both the artist name and song title in the following format: :lyrics artist - song")
    }
};


module.exports = lyrics;