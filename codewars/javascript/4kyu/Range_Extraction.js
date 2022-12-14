// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


// function solution(list){
    let result = ''
    for(let i = 0; i < list.length; i++){
        if(list[i] + 1 === list[i + 1] && list[i + 1] + 1 === list[i + 2]){
            for(let j = i + 1; j <= list.length; j++){
                if(list[j] + 1 !== list[j + 1]){
                    result += `${list[i]}-${list[j]},`
                    i = j 
                    break;
                } 
            }
        }else{
            result += `${list[i]},`
        }
    }
    return result.slice(0,-1)
}

//top solution:
function solution(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}


//OR:
solution = (list)=>list.reduce((acc,curr,i) => {
    if (i==0) return curr.toString();
    if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
    if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
    return acc+","+curr;
  });


//test:
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
// "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"