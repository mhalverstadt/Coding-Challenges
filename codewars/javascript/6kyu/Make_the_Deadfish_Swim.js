// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.


function parse( data ){
    let result = []
    let value = 0
    let steps = data.split('')
    for(step of steps){
        switch(step){
            case 'i' : value++
                break;
            case 'd' : value--
                break;
            case 's' : value = value ** 2
                break;
            case 'o' : result.push(value)
        }
    }
    return result
}

//OR:
const parse = data => {
    const Commands = {
        INCREMENT:  'i',
        DECREMENT:  'd',
        SQUARE:     's',
        OUTPUT:     'o'
    }
  
    var outputs = [],
        value = 0;
    
    data.split('').forEach(command => {
      switch(command) {
        case Commands.INCREMENT:  value++;                   break;
        case Commands.DECREMENT:  value--;                   break;
        case Commands.SQUARE:     value = Math.pow(value, 2);break;
        case Commands.OUTPUT:     outputs.push(value);       break;
      }
    });
    
    return outputs;
  }


//test:
console.log(parse("iiisdoso"))