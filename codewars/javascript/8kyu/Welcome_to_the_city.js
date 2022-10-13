// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//Mine:
function sayHello( name, city, state ) {
  if (name.length < 3){
    return `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}`
  }else if(name.length < 4){
    return `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}`
  }else {
    return `Hello, ${name[0]} ${name[1]} ${name[2]} ${name[3]}! Welcome to ${city}, ${state}`
  }
}

//Top Solution: I am dumb
function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

//Test:
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois')
sayHello(['Former', 'Presedent', 'doodie', 'face', 'Mcgee'], 'Seattle', 'WA')