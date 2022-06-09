// Code your solutions in this file

function writeCards(name, event) {

    const message_array = [] 

    //  so as to return in an array
    for (let i = 0; i < name.length; i++) {
        // "Thank you, Charlie, for the wonderful birthday gift!"
        const message = "Thank you, " + name[i] +", for the wonderful "+event+ " gift!";
        message_array.push(message);
    }

    return message_array
}

function countDown(num){
   do{
        console.log(num);
        num--;
    }while(num >= 0)
}