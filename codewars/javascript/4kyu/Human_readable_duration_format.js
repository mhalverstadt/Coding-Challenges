// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


//seconds in a year = 31536000
//seconds in a day = 86400
//seconds in a hour = 3600
//seconds in a minute = 60

//mine:
function formatDuration (seconds) {
    
    let years = 0
    let days = 0
    let hours = 0
    let minutes = 0
    let second = 0
    let remainingSeconds
    let result = ''
    if(seconds >= 31536000) {
        years = Math.floor(seconds / 31536000)
        remainingSeconds = seconds % 31536000
        if(remainingSeconds === 0){
            return `${years} year${years > 1 ? 's' : ''}`
        }else result = 
    }
    if(years){
        days = Math.floor(remainingSeconds / 86400)
        remainingSeconds = remainingSeconds % 86400
    }else if(seconds >= 86400){
        days = Math.floor(seconds / 86400)
        remainingSeconds = seconds % 86400
    }
    if(days){
        hours = Math.floor(remainingSeconds / 3600)
        remainingSeconds = remainingSeconds % 3600
    }else if(seconds >= 3600){
        hours = Math.floor(seconds / 3600)
        remainingSeconds = seconds % 3600
    }
    if(hours){
        minutes = Math.floor(remainingSeconds / 60)
        remainingSeconds = remainingSeconds % 60
    }else if(seconds >= 60){
        minutes = Math.floor(seconds / 60)
        remainingSeconds = seconds % 60
    }
    if(seconds >= 60){
        second = remainingSeconds
    }

}
  




//test:
console.log(formatDuration(63072000))