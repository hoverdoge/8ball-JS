//defining variables
let userName =  'NAME';
let userQuestion = "QUESTION";
let randomNumber = Math.floor(Math.random() * 8);
//assigning 8ball replies to numbers
let responses = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes'];
//getting reply
let answer = responses[randomNumber];
//prints hello to the user
userName? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);
//tells user what the question is
console.log(`${userName}, your question was: ${userQuestion}`);
//prints answer
console.log(`${answer}`);
