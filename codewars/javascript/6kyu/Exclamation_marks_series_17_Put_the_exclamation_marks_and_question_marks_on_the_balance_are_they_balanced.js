// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

// Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left,right){
    let leftWeight =  getWeight(left)
    let rightWeight = getWeight(right)

    if(leftWeight === rightWeight) return "Balance"
    return leftWeight > rightWeight ? "Left" : "Right"
}

function getWeight(str){
    weightScore = 0
    for(const char of str){
        char === "!" ? weightScore += 2 : weightScore += 3
    }
    return weightScore
}


//top soluion:
function balance(left,right){
    l=[...left].reduce((s,a)=>s+(a=='?'?3:2),0);
    r=[...right].reduce((s,a)=>s+(a=='?'?3:2),0);
    return l==r?"Balance":l>r?"Left":"Right"
 }

//test:
console.log(balance("!!", "??"))
console.log(balance("!!???!????", "??!!?!!!!!!!"))
console.log(balance("!?!!", "?!?"))