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

function toGrandma(str) {
  return "I can't hear you!" + str;
}