//defining variables
let userName =  'NAME';
let userQuestion = "QUESTION";
let randomNumber = Math.floor(Math.random() * 8);
let answer = '';
//assigning 8ball replies to numbers
let a = 'It is certain';
let b = 'It is decidedly so';
let c = 'Reply hazy try again';
let d = 'Cannot predict now';
let e = 'Do not count on it';
let f = 'My sources say no';
let g = 'Outlook not so good';
let h = 'Signs point to yes';
//getting reply
switch (randomNumber)
{
  case(0):
    answer = a;
    break;
  case(1):
    answer = b;
    break;
  case(2):
    answer = c;
    break;
  case(3):
    answer = d;
    break;
  case(4):
    answer = e;
    break;
  case(5):
    answer = f;
    break;
  case(6):
    answer = g;
    break;
  case(7):
    answer = h;
    break;
  default:
    answer = a;
    break;
}
//prints hello to the user
userName? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);
//tells user what the question is
console.log(`${userName}, your question was: ${userQuestion}`);
//prints answer
console.log(`${answer}`);
