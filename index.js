// Code your solutions in this file

function writeCards(name, event) {
  //  so as to return in an array
  const message_array = [];

  for (let i = 0; i < name.length; i++) {
    // "Thank you, Charlie, for the wonderful birthday gift!"
    const message =
      "Thank you, " + name[i] + ", for the wonderful " + event + " gift!";
    message_array.push(message);
  }

  return message_array;
}

function countDown(num) {
  do {
    console.log(num);
    num--;
  } while (num >= 0);
}
