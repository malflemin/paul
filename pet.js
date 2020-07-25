function pet(){
}

pet.prototype.create =  function(message, id, fs){
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
};

pet.prototype.setFace = async function(message, id, fs, face, hat, exp, love, hunger, type){
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
              
              await fs.writeFile('./pets/'+ id + '.json', JSON.stringify(nameFile), function writeJSON(err) {
                if (err) return console.log("Error writing to file from disk:", err);
                console.log(JSON.stringify(nameFile));
              });}
};


module.exports = pet;