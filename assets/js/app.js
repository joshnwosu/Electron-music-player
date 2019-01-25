const os = require('os');
const fs = require('fs');
const path = require('path');
const homdir = os.homedir();
const mm = require('music-metadata');
const util = require('util');
const $ = require('jquery');

let $file_name = [];
let audio = new Audio();


function getMp3Files(startPath, filter, callback) {
  if(!startPath) return;
  let files = fs.readdirSync(startPath);
  files.forEach((elem, index)=> {
    let filename = path.join(startPath, elem);
    let stat = fs.lstatSync(filename);

    if(elem.startsWith('.') == true) {
      files.splice(index, 1)
    }else {
      if (stat.isDirectory()) {
        getMp3Files(filename, filter, callback);
      }else if (filename.substr(-4) === filter) callback(filename)
    }
  });
}

getMp3Files(homdir, '.mp3', function(filename) {
  $file_name.push(filename);
});

console.log($file_name);
audio.src = $file_name[350];
audio.play();