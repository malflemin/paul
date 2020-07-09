function loader(){
}

loader.prototype.entry = function(message, command,Client){
const fs = require('fs');

if(command === 'create'){
fs.exists('./pro/' + message.author.id, (exists) => {message.channel.send(exists ? '' : '')});
fs.open('./pro/'+ message.author.id, 'wx', (err, fd) => {
  
//**ACCOUNT CREATION**

   if (err){if(err.code === 'EEXIST') message.channel.send('Your Profile exists!');}
 else{
    fs.writeFile('./pro/'+ message.author.id, message.member.user.username , function(err) {
    if(err) return message.channel.send('failed');
    message.channel.send(message.member.user.username + " I saved your file!");}
                );
 }
});//end of create command
}
//**ACCOUNT CREATION**

//**DISPLAY ACCOUNT**
else if(command === 'view'){
fs.exists('./pro/' + message.author.id, (exists) => {message.channel.send(exists ? '' : '')});
fs.open('./pro/'+ message.author.id, 'wx', (err, fd) => {
    var content;
    if (err) if(err.code === 'EEXIST'){
      var readline = require('readline');
      var myInterface = readline.createInterface({
        input: fs.createReadStream('./pro/' + message.author.id)});
      var i;
      i = 0;
      myInterface.on('line', function (line) {
      i++;
      if(i == 1) message.channel.send("Name: "+line);
      if(i == 2) message.channel.send("Title: "+line);
      if(i == 3) message.channel.send("Custom Reaction: "+line);
        
      });
    }
    else
      message.channel.send('You don\'t even have a profile!');
});
}
//**DISPLAY ACCOUNT**
  
};
//**FILE READER GAME**
loader.prototype.getFile = function(message){
var readline = require('readline');
const fs = require('fs');
fs.exists('./textfiles/tarotSet.txt', (exists) => {message.channel.send(exists ? 'SUCCESS' : 'FAILURE!!')});
fs.open('./textfiles/tarotSet.txt', 'wx', (err, fd) => {

if (err){if(err.code === 'EEXIST') message.channel.send('LOADED');
  var readline = require('readline');
  var myInterface = readline.createInterface({
    input: fs.createReadStream('./textfiles/tarotSet.txt')});
  var i;
  var arr = [];
  i = 0;
  myInterface.on('line', function (line) {
  i++;
  if(i == 1) {message.channel.send(line);
     arr[i-1]  = line;
     console.log(arr[i-1]);}
  if(i == 2) {message.channel.send("Upright: "+line);
     arr[i-1]  = line;}
  if(i == 3) {message.channel.send("Reversed: "+line);
     arr[i-1]  = line;}
  });
  return arr;
  }
 else{
   message.channel.send('FAILED');
 }
});  
};
//**FILE READER GAME**

//**FILE WRITER GAME**
loader.prototype.setFile = function(message, file, arr){
  var fs = require('fs')
for(var i = 0; i < arr.length; i++){
var writerStream = fs.createWriteStream(file,{flags: 'a'})
                         .on(arr[i], function() {
                             
                          })
                         .on('error', function(err){
                             console.log(err.stack);
                          });
    /*writerStream.write(outPutData,function() {
      // Now the data has been written.
        console.log("Data Written to " + file);
    });*/

    // Mark the end of file
    writerStream.end();
}
};
//**FILE WRITER GAME**

//**CUSTOM REACTION DISPLAY**
loader.prototype.getReact = function(idVal, message){
  var readline = require('readline');
  const fs = require('fs');

  var myInterface = readline.createInterface({
    input: fs.createReadStream('./pro/' + idVal)
  });

  var lineno = 0;
  var emoji = '';
  myInterface.on('line', function (line) { 
    lineno++;
    
    if(lineno == 3){emoji = line; message.react(line);}
  });
};

loader.prototype.showList = function(message){
  var readline = require('readline');
  const fs = require('fs');

  var myInterface = readline.createInterface({
    input: fs.createReadStream('./pro/' + '306816340457422850')
  });

  var lineno = 0;
  var emoji = '';
  myInterface.on('line', function (line) { 
    lineno++;
    message.channel.send(lineno + '.: ' + line);
  });
}

loader.prototype.exst = function(message){//Function checks for existence of user account and verifies current location
  const fs = require('fs');
  fs.exists('./pro/' + message.author.id, (exists) => {message.channel.send(exists ? '' : '')});
  fs.open('./pro/'+ message.author.id, 'wx', (err, fd) => {
  
   if (err){if(err.code === 'EEXIST') message.channel.send('Your Profile exists!');}
   else{
    fs.writeFile('./pro/'+ message.author.id, '0\n0', function(err) {
    if(err) return message.channel.send('failed');
    message.channel.send(message.member.user.username + " I saved your file!");});}//end of create command
});
};
//**CUSTOM REACTION DISPLAY**

module.exports = loader;

