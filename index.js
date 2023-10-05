// Code your solutions in this file

//writeCards Function
function writeCards(names, eventName) {
    const thankYouCards = [];
  
    for (let i = 0; i < names.length; i++) {
      const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouCards.push(thankYouMessage);
    }
  
    return thankYouCards;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  
  const thankYouCards = writeCards(names, eventName);
  console.log(thankYouCards);

  //countDown Function
  function countDown(positiveInteger) {
    let count = positiveInteger;
  
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  countDown(10);