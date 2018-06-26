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
  if (str === str.lowerCase()) {
    return "I can't hear you!" + str;    
  } else if (str === str.upperCase()) {
    return "YES INDEED!";
  } else {
    return "I love you, too."
  }
}

