function convertToCelsius(fahrenheight){
    return (fahrenheight - 32) * 5/9;
}

function createMessage(fahrenheight, celsius){
    let message = '';
    const numFahrenheight = fahrenheight * 1;

    if(numFahrenheight === 212) {
        message = 'Thats boiling!'
      } else if(numFahrenheight === 72) {
        message = 'Thats room temp!';
      } else if(numFahrenheight === 32) {
        message = 'Thats freezing!';
      } else if(numFahrenheight === 0) {
        message = 'Thats a day off school!';
      }
    
      return `${fahrenheight} fahrenheight is ${celsius} celsius. ${message}`;
}

function rand(limit){
    return Math.ceil(Math.random(limit))
}

let inputFahrenheight = prompt('enter a number, we will convert that number from fahrenheight to celsius');
let convertedCelsius = convertToCelsius(inputFahrenheight);
let output = createMessage(inputFahrenheight, convertedCelsius);
console.log(output);

inputFahrenheight = prompt('Lets try again! enter a number, we will convert that number from fahrenheight to celsius');
convertedCelsius = convertToCelsius(inputFahrenheight);
output = createMessage(inputFahrenheight, convertedCelsius);
console.log(output);

let randomFahrenheight = rand(212); 
convertedCelsius = convertToCelsius(randomFahrenheight);
output = createMessage(randomFahrenheight, convertedCelsius);
console.log(output);

randomFahrenheight = rand(212); 
convertedCelsius = convertToCelsius(randomFahrenheight);
output = createMessage(randomFahrenheight, convertedCelsius);
console.log(output);