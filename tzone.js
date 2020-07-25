function tzone(){
}

tzone.prototype.getTimeZone = async function(Discord, message, timer, meTime){
  var getTime = message.content.replace(":tzone ", "");
  var time = timer();
    //var userTime = meTime();
    //var getCity = getTime.split("/");

    if (getTime == "All" || getTime == "all" || getTime == ":tzone" || getTime == "") {
      message.channel.send(
        "**Denver:** " +
          timer.tz("America/Denver").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**Texas:** " +
          timer.tz("America/Chicago").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**New York:** " +
          timer.tz("America/New_York").format("DD-MM-YYYY h:mma z") + ":poop: \n" +
          "**Ireland:** " +
          timer.tz("Europe/Dublin").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**Jakarta:** " +
          timer.tz("Asia/Jakarta").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**Sydney:** " +
          timer.tz("Australia/Sydney").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**New Zealand:** " +
          timer.tz("Pacific/Auckland").format("DD-MM-YYYY h:mma z")
      );
    } else if (getTime == "help") {
      message.channel.send(
        "Find more timezones here because we're lazy af: https://github.com/moment/moment-timezone/blob/92417fb266545c564b3522e29f7ebd5188d56179/data/meta/2014a.json"
      );
    } else {
      var count = 0;
      var searchTime = getTime.charAt(0).toUpperCase() + getTime.slice(1).toLowerCase();
      var getCity;
      //if user has a backslash in the command, split it into two to get place and timezone
      if (getTime.includes("/")) {
        getCity = getTime.split("/");
        getCity[0] = getCity[0].charAt(0).toUpperCase() + getCity[0].slice(1).toLowerCase();
        getCity[1] = getCity[1].charAt(0).toUpperCase() + getCity[1].slice(1).toLowerCase();
      }
      //if user has entered a place and timezone
      if (getCity != null) {
        console.log(getCity.join("/"));
        if (getCity[1] in meTime.zoneData[getCity[0]]) {
          message.channel.send("**",getCity.join("/"),"** " + timer.tz(getCity.join("/")).format("DD-MM-YYYY h:mma z"));
        }
      }
      //if user has only entered a place, show them all available timezones
      else if (searchTime in meTime.zoneData) {
        var searchLength = Object.keys(meTime.zoneData[searchTime]).length;
        if (searchLength > 4) {
          var timezoneArray = [];
          for (const key in meTime.zoneData[searchTime]) { 
            timezoneArray.push(key)
          }
          const embed = new Discord.MessageEmbed()
            .setColor(0x00ae86)
            .setDescription(timezoneArray.join(', '));
          message.channel.send("Please choose from one of the following timezones, and then re-enter the command as 'tzone: Place/Timezone'");
          message.channel.send(embed);
        } else {
          message.channel.send("**",searchTime,"** " + timer.tz(searchTime).format("DD-MM-YYYY h:mma z"));
        }
      }
    }

};


module.exports = tzone;