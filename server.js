/*Danny Devito Bot
Created: 04/28/2019
Proberdy of Burgatory
Unauthorized use will result in forcible circumcision*/
//const config = require("./config.json");
var express = require("express");
const Canvas = require("canvas");
const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const { Client, Attachment } = require("discord.js");
const prefix = ":"; 

// serch
const ud = require('urban-dictionary');
// serch
var Image = require("image");
var http = require("http");
var https = require("https");
var app = express();
var XMLHttpRequest = require("xmlhttp");
var deleted;
var lyr = require("lyrics-fetcher");
const GIFEncoder = require('gifencoder');
const client = new Discord.Client();
const axios = require("axios");
const fs = require("fs");
const timer = require("moment-timezone");
const meTime = require("iana-tz-data");
const countdown = require("countdown");
const filter = require("canvas-filters");
var rpgDiceRoller = require("rpg-dice-roller/lib/umd/bundle.min.js");
//mysql connection http://remotemysql.com/
var mysql = require("mysql");
//end mysql connection
var spammer = false;
var collecting = 1;
app.get("/", function(request, response) {
  response.sendStatus(200);
});
var offuser;
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
//delete after christmas

client.on("messageDelete", (messageDelete) => {
  
 deleted = messageDelete.content;
 if (messageDelete.author.id == "307339858483871744") { //bootleg's userID
   messageDelete.channel.send("Bootleg `" + messageDelete.author.tag + "` said: \n" + ">>> " + deleted);
 }
});


client.on("message", message => {
  
/*if(message.content.split(" ")[0] !== ":pet" || message.content.split(" ")[0] !== ":borg"){
  
    var id;
    var avatarURL;
    collecting = 0;
    //let guild = client.guilds.get("306258975509446656");
    id = message.author.id;
  var name, face, hat, exp, love, hunger, type;
            
            
            var jsonString = fs.readFileSync('./pets/'+ id + '.json');
            
            
            
            const pet = JSON.parse(jsonString);
            name = pet.name;
            face = parseInt(pet.face);
            hat = parseInt(pet.hat);
            exp = parseInt(pet.exp);
            love = parseInt(pet.love);
            hunger = parseFloat(pet.hunger);
            type = pet.type;
            if (hunger >= 1) {
                    hunger -= .5;
            }
            const nameFile = {"id":id, 
                  "name": name,
                  "face": face,
                  "hat": hat,
                  "exp": exp,
                  "love": love,
                  "hunger": hunger,
                  "type": type};

              fs.writeFile('./pets/'+ id + '.json', JSON.stringify(nameFile), function writeJSON(err) {
                if (err) return console.log("Error writing to file from disk:", err);
                console.log(JSON.stringify(nameFile));
              });
                            if(hunger == 75) message.channel.send(":meat_on_bone: *** your pet is a little hungry *** :meat_on_bone:");
                            if (hunger == 50) message.channel.send(":bone: :cut_of_meat: :rice_cracker: *** your pet is HUNGRY *** :bone: :cut_of_meat: :rice_cracker:");
                            if (hunger == 25) message.channel.send(":woozy_face: :skull_crossbones: :fish_cake:  *** YOUR PET IS STARVING *** :woozy_face: :skull_crossbones: :fish_cake: ");
                            if(hunger == 0 && type == "Wisp"){
                              message.channel.send("Your pet has died.");
                             }
                  
  
  
                  
}*/
  
 if (message.author.id == "307365762543255553") {
   message.content = " ";
 } 
  
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.guild != null)
   var adminRole = message.guild.roles.cache.find(role => role.name == "Fist Mate 2.0");

  var Game = require("./Game.js");
  var Messages = require("./messages.js")
  var Lyrics = require("./lyrics.js");
  var Transform = require("./transforms.js");
  var TZone = require("./tzone.js");
  var Pet = require("./pet.js");
  //fileloader was here
  var game = new Game();
  var transform = new Transform();
  var lyrics = new Lyrics();
  var messages = new Messages();
  var time = new TZone();
  var petDriver = new Pet();
  
  if(command == "help") {
    message.channel.send("https://cdn.glitch.com/760bdc78-175b-4d1a-bc49-b3eea14aae95%2Fchelp.html?v=1579104072634");
  }
  
  
  //*************************************MISC COMMANDS************************************
  //Grayscale image
  if(command == "gs"){
    transform.grayScale(message,Discord);
  }
  //Invert image colors
  if(command == "invert"){
    transform.invert(message,Discord);
  }
  //Apply Anti-Aliasing to image
  if(command == "smooth"){
    transform.smoothen(message,Discord);
  }
  //Apply Gaussian Blur to image
  if(command == "blur"){
    transform.blur(message,Discord);
  }
  //Translate command
  if (command == "t") {
    messages.translate(Discord,message,axios);
  }
  //Lyrics search command
  if (command == "lyrics") {
    lyrics.getLyrics(message, lyr);
  }
  //Pipe command
  if (command == "pipe") {
    messages.pipe(Discord, message);
  }
  //Curse command
  if (command == "curse") {
    messages.curse(Discord, message);
  }
  // NSFW COMMANDS
  if (command == "peepee") {
    messages.getPeePee(message);
  }
  if (command == "nsfw") {
    messages.nsfw(Discord, message);
  }
  // END OF NSFW
  //Kill command
  if (command == "kill") {
     messages.kill(Discord, message);
  }
  
  if (command == "exec") {
    if(message.author.id === '248283572652212225'){
    const { exec } = require("child_process");
    var mes = message.content.replace(":exec", "");

    exec(mes, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    message.channel.send(`stdout: \n${stdout}`);
  });
  }
  }
  
    //*************************************ETC COMMANDS*************************************
  //Time Zone command
  if (command == "tzone") {
    time.getTimeZone(Discord,message,timer,meTime);
  }
  
  if (command == "set") {
    messages.setStatus(Discord, client, message);
  }

  if (command == "f") {
    messages.getF(Discord, message);
  }
  
  if (command == "dog") {
    var xhr = new XMLHttpRequest();
    messages.getDog(Discord, message, xhr);
  }
  
  if (command == "countdown") {
    var countdownDate = countdown(new Date(2020, 11, 17, 20, 25)).toString();
    //console.log(countdownDate);
    message.channel.send("Time until arrival: " + countdownDate);
  }
  
  if (command == "egg") {
    var sent = message.content.replace(":egg", "");
    const canvas = Canvas.createCanvas(1270, 720);
    const ctx = canvas.getContext("2d");
    
    game.eggs(Canvas,canvas,ctx,Discord,message,sent);
    
  }
  
  if (command == "snipe") {
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription(deleted);
    message.channel.send(embed);
  }
  
  
  if (command == "hate"){
    var sent = message.content.replace(":hate", "");
    const canvas = Canvas.createCanvas(300, 300);
    const ctx = canvas.getContext("2d");
    
    game.drawHate(Canvas,canvas,ctx,Discord,message,sent);
  }
  
  if (command == "pokemon") {
   var mon = Math.floor(Math.random() * 800) + 1;
    
    const embed = new Discord.MessageEmbed()
    .setImage("https://www.serebii.net/sunmoon/pokemon/" + mon + ".png")
    
    message.channel.send(embed);
  }
  
  if (command == "scrub") {   
    var amt = message.content.replace(":scrub", "");
    async function clear() {
      message.delete();
      const fetched = await message.channel.fetchMessages({ limit: amt });
      message.channel.bulkDelete(fetched);
    }
    if(!amt) {
      message.channel.send("Enter a number of messages to scrub.")
    }
    else {
    clear();
      }
  }
  
  if (command == "mock") {
    var lower = message.content.toLowerCase();
    var mock = lower.replace(":mock", "");
    var i;
    var res = "";
    for (i = 0; i < mock.length; i++) {
      res += i % 2 == 0 ? mock.charAt(i).toUpperCase() : mock.charAt(i);
    }

    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription(res)
      .setImage(
        "https://cdn.discordapp.com/attachments/306258975509446656/576590954983849984/mock.jpg"
      );

    message.channel.send(embed);
  }
  
  //serve commands
  if (command === "servebrad") {
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription("Dinner is served for Brad!")
      .setImage(
        "https://cdn.discordapp.com/attachments/306258975509446656/654537450647060510/1576123905464.jpg"
      );
    message.channel.send(embed);
  }
  
  if (command === "servefeet") {
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription("This is your menu for feet meals, sir.")
      .setImage(
        "https://cdn.glitch.com/760bdc78-175b-4d1a-bc49-b3eea14aae95%2Fimage0.jpg?v=1578845517019"
      );
    message.channel.send(embed);
  }
  //end serve commands

if (command == "urban") {
  
  var definition = message.content.replace(":urban", "");
  
  ud.term(definition).then((result) => {
  const entries = result.entries
  message.channel.send(entries[0].word)
  message.channel.send(entries[0].definition)
  message.channel.send(entries[0].example)
}).catch((error) => {
  message.channel.send(error.message)
})
}
  
    //Manipulate an image and create a custom gif
  if (command == "pic"){
    const encoder = new GIFEncoder(200, 200);
    encoder.createReadStream().pipe(fs.createWriteStream('248283572652212225.gif'));
    encoder.start();
    encoder.setRepeat(0);   // 0 for repeat, -1 for no-repeat
    encoder.setDelay(150);  // frame delay in ms
    encoder.setQuality(1); // image quality. 10 is default.
    const canvas = Canvas.createCanvas(200, 200);
    const ctx = canvas.getContext("2d");
    var Attachment = (message.attachments).array();
    //var png = new Image('png').encodeSync(Attachment[0].url, canvas.width, canvas.height);
    console.log(Attachment[0].url); //undefined
    //message.channel.send(Attachment[0].url);
    var dest = 'name.png';
    var file = fs.createWriteStream(dest);
    var request = https.get(Attachment[0].url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
    file.close();  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
  });
    message.channel.send("File made.");
    game.drawURL(Canvas, canvas, ctx, Attachment[0].url, encoder, message, Discord);
  }
  
 if (command == "dice") {
    var getDice = message.content.replace(":dice ", "");
    var dice;
    var modifier;
    var diceTotal;
    if (getDice.includes('+') || getDice.includes('-')) {
      var hasModifier;
      if (getDice.includes('+')) { 
        hasModifier = getDice.split('+')
        } else if (getDice.includes('-')) { 
        hasModifier = getDice.split('-')
        } 
      dice = hasModifier[0].replace(/\s+/g, "");
      modifier = parseInt(hasModifier[1].replace(/\s+/g, ""));
    } else {
      dice = getDice;
    }
    
    try {
      const roller = new rpgDiceRoller.DiceRoller();
      let roll = roller.roll(dice);
      var diceRoll = (`${roll}`);
      var rollSplit = diceRoll.split(" ");
      if (modifier === undefined) {
        diceTotal = parseInt(rollSplit[rollSplit.length-1]);
        message.channel.send(rollSplit[0] + " " + rollSplit[1] + " = " + diceTotal);
      } else if (getDice.includes('+')) { 
          diceTotal = parseInt(rollSplit[rollSplit.length-1]) + modifier; 
          message.channel.send(rollSplit[0] + " " + rollSplit[1] + " + " + modifier + " = " + diceTotal);
        } else if (getDice.includes('-')) { 
          diceTotal = parseInt(rollSplit[rollSplit.length-1]) - modifier; 
          message.channel.send(rollSplit[0] + " " + rollSplit[1] + " - " + modifier + " = " + diceTotal);
        }
    } catch {
      message.channel.send("You need this format for dice! `:dice d20` or `:dice d20+5`");
    }
  }
  
 //BASE FUNCTIONALITY COMMANDS
  


  /////////////////////////////////////////////////////////////////////////////////////////\
  /////////////////PET///////////////COMMAND////////////////////////////////////////////////\\
  ////////////////////////////////////////////////////////////////////////////////////////////\
  if (command == "pet") {
    var query;
    var id;
    var avatarURL;
    var pet;
    collecting = 0;
    //let guild = client.guilds.get("306258975509446656");
    id = message.author.id;
    
    var name, face, hat, exp, love, hunger, type;
    
     fs.readFile('./pets/'+ id + '.json', 'utf8', (err, jsonString) =>{
       if(err || jsonString ){
        const newPet = {"id":id, 
          "name":"uwu",
          "face": 0,
          "hat": 0,
          "exp": 0,
          "love": 100,
          "hunger": 100,
          "type": "Wisp"};
        fs.writeFile('./pets/'+ id + '.json', JSON.stringify(newPet), function writeJSON(err) {
                if (err) return console.log("Error writing to file from disk:", err);
                message.channel.send("You did not have a pet, so one has been made for you!");
              });
       }else{
        const pet = JSON.parse(jsonString)
        name = pet.name;
        face = parseInt(pet.face);
        hat = parseInt(pet.hat);
        exp = parseInt(pet.exp);
        love = parseInt(pet.love);
        hunger = parseFloat(pet.hunger);
        type = pet.type;
      console.log(pet);
      const canvas = Canvas.createCanvas(300, 300);
      const ctx = canvas.getContext("2d");
      game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
          
          
        if(type != 'Ghast'){
          const collector = new Discord.MessageCollector(
            message.channel,
            m => m.author.id === message.author.id,
            { time: 40000 }
          );
          collector.on("collect", message => {
            //*************LUB******************************
            if (message.content == ":lub") {
              if (love < 100) {
                love += 5;
              }
              
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
              collector.stop();
            }
            //***********NAME CHANGE*******************
            if (message.content.split(" ")[0] == ":rename") {
              var newName = message.content.replace(":rename ", "");
              
              const nameFile = {"id":id, 
              "name": newName,
              "face": face,
              "hat": hat,
              "exp": exp,
              "love": love,
              "hunger": hunger,
              "type": type};
              
              fs.writeFile('./pets/'+ id + '.json', JSON.stringify(nameFile), function writeJSON(err) {
                if (err) return console.log("Error writing to file from disk:", err);
                console.log(JSON.stringify(nameFile));
              });
              
              game.drawPet(Canvas,canvas,ctx,Discord,message,newName,exp,love,hunger,type,face,hat);
              collector.stop();
              collector.on("end", collected => {
              message.channel.send("Exiting pet menu...");
              });
            }
            //************FEED*************************
            if(message.content.split(" ")[0] == ":borg"){
              hunger = parseInt(hunger);
              if (hunger < 100) {
                hunger += 25;
              }
              if(hunger > 100){
                hunger = 100;
              }
              
              const nameFile = {"id":id, 
              "name": name,
              "face": face,
              "hat": hat,
              "exp": exp,
              "love": love,
              "hunger": hunger,
              "type": type};

              fs.writeFile('./pets/'+ id + '.json', JSON.stringify(nameFile), function writeJSON(err) {
                if (err) return console.log("Error writing to file from disk:", err);
                console.log(JSON.stringify(nameFile));
              });
              
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
              collector.stop();
              collector.on("end", collected => {
              message.channel.send("Exiting pet menu...");
              });
            }
            //**************FACES**********************
            if (message.content.split(" ")[0] == ":face") {
              var newFace = message.content.replace(":face ", "");
              console.log(face);
              if(face < 5 && face > -1){
                
              const nameFile = {"id":id, 
              "name": name,
              "face": newFace,
              "hat": hat,
              "exp": exp,
              "love": love,
              "hunger": hunger,
              "type": type};
              
              fs.writeFile('./pets/'+ id + '.json', JSON.stringify(nameFile), function writeJSON(err) {
                if (err) return console.log("Error writing to file from disk:", err);
                console.log(JSON.stringify(nameFile));
              });
                
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,newFace,hat);
              collector.stop();
              collector.on("end", collected => {
              message.channel.send("Exiting pet menu...");
              });
              }
            }
            //****************HAT**********************
            if (message.content.split(" ")[0] == ":hat") {
              var newHat = message.content.replace(":hat ", "");
              console.log(hat);
              if(hat < 7 && hat > -1){
                
              const nameFile = {"id":id, 
              "name": name,
              "face": face,
              "hat": newHat,
              "exp": exp,
              "love": love,
              "hunger": hunger,
              "type": type};
              
              fs.writeFile('./pets/'+ id + '.json', JSON.stringify(nameFile), function writeJSON(err) {
                if (err) return console.log("Error writing to file from disk:", err);
                console.log(JSON.stringify(nameFile));
              });
                
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,newHat);
              collector.stop();
              collector.on("end", collected => {
              message.channel.send("Exiting pet menu...");
              });
              }
            }
            //**************ADVENTURE******************
            if(message.content.split(" ")[0] == ":advnt") {
              const cnv = Canvas.createCanvas(500, 300);
              const cvx = cnv.getContext("2d");
              var attack = null;
              var enemy = 100;
              //Load experience as int
              exp = parseInt(exp);
              //Load hunger as int
              hunger = parseInt(hunger);
              //Draw initial field
              game.drawAdv(Canvas, cnv, cvx, message, Discord, type,face,hat,attack)
              
              
              const adCollector = new Discord.MessageCollector(
              message.channel,
              m => m.author.id === message.author.id,
              { time: 100000 }
              );
              adCollector.on("collect", message => {
                var num = Math.round(Math.random() * 100);
                if(message.content == 'A'){//Attack
                  if(num < 40 && num > 5){
                    const fgCollector = new Discord.MessageCollector(
                    message.channel,
                    m => m.author.id === message.author.id,
                    { time: 30000 }
                    );
                    
                    message.channel.send("You attack the city!!! >:€");
                    fgCollector.on("collect", message => {
                      if(message.content == "blast"){
                        message.channel.send(name + " shoots a blast causing 20 damage!");
                        attack = 'blast';
                        game.drawAdv(Canvas, cnv, cvx, message, Discord, type, face, hat, num, attack)
                        exp += 50;
                        var amount = 0;
                        hunger -= 10
                      }
                    });
                  }
                  else if(num < 80 && num > 40){
                    
                  }
                  else{
                    message.channel.send("you attack nothing umu!");
                  }
                }
                  
                if(message.content == 'N')//Next
                  { num = Math.round(Math.random() * 100);
                   game.drawAdv(Canvas, cnv, cvx, message, Discord, type,face,hat,num,attack)}
                if(message.content == 'E')//Return
                  adCollector.stop();
              });
              collector.stop();
            }
            //****************INFO*********************
            if (message.content.split(" ")[0] == ":info") {
              message.channel.send("```**PET INFO**\nCommands: {:lub, :name}\n*:lub* - Keeps up the pets love bar\n*:name* - Renames pet\nAbout: ```");
            }
          });
          collector.on("end", collected => {
              collecting = 1;
              });
        }
        else{
          
        }
       }
    });
    
}
  //////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////PET///////////////COMMAND//////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
if (command == ":13") {
    let guild = client.guilds.get("306258975509446656");
    var role = message.guild.roles.find(role => role.name === "Fist Mate 2.0");
    var remover = message.mentions.members.first();
   remover.removeRole(role);
  }

 
  //END OF BASE FUNCTIONALITY
  //*************************************ETC C*************************************
});

client.login(process.env.BOT_TOKEN);
