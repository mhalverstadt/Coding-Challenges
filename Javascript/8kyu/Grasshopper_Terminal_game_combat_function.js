// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//Mine:
let combat = (health, damage) => health - damage <= 0 ? 0 : health - damage

//Top Solution:
function combat(health, damage) {
  return health < damage ? 0 : health - damage
}


//OR:



//Test:
// order("is2 Thi1s T4est 3a")
