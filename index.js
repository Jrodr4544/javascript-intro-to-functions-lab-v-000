function shout(string) {
  return  string.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(shout(str));
}

function logWhisper(str) {
  console.log(whisper(str));
}

function sayHiToGrandma(str) {
  if (str === whisper(str)) {
    return "I can't hear you!" + str;    
  } else if (str === shout(str)) {
    return "YES INDEED!";
  } else {
    return "I love you, too."
  }
}

