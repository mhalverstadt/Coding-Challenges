// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

////////////////////////////////////////////////////////

//inputs will always be an array of numbers in increasing order. from -100 to 100 range. With a length of 0 to 50. 

// list1 = [], list2=[] -> []

// list1 = [1,2,4], list2 = [1,3,4] -> [1,1,2,3,4,4]

function mergeTwoLists(list1, list2){
    //merge the lists
    //sort the result
    return [list1, list2].flat().sort((a,b)=>a-b)
}

console.log(mergeTwoLists([1,2,4], [1,3,4,10]), [1,1,2,3,4,4,10])
console.log(mergeTwoLists([],[]), [])