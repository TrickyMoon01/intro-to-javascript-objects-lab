// const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
    partyCount: function() {
    return this.party.length;
  }
};

// console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[58]);

// console.log(game)

// const pokemon = [];
// const game.gyms[];
// const game.items[];

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = 'Easy';

// if return function

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

let starterpokemon = pokemon[3];
game.party.push(starterpokemon)

console.log(game)

// // 2nd Solution 
// for (let mon of pokemon) {
//     if (mon.name === "Charmander" && mon.starter === true) {
//         game.party.push(mon);
//     }
// }

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:

*/
// I will be using the push() method
let pokemon1 = pokemon[144];
let pokemon2 = pokemon[148];
let pokemon3 = pokemon[149];
game.party.push(pokemon1, pokemon2, pokemon3);

console.log(game)
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (let idx = 0; idx < game.gyms.length; idx++) {
    if (game.gyms[idx].difficulty < 3) {
        game.gyms[idx].completed = true
    }
}

console.log(game.gyms)
/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
for (let i = 3; i <game.party.length; i++) {
  if (game.party[i].starter === true) {
    game.party.splice(0, 3, (pokemon[(i + 1)]));
  }
}
console.log(game.party)
/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach((mem) => {
  console.log(mem.name)
})
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

let starterPokemon = '';
for (let i = 1; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    // starterPokemon.push(pokemon[i].name)
  }
}
console.log(starterPokemon);
/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
function catchPokemon(pokemon) {
  
}

game.party.push(catchPokemon);
/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

function catchPokemon(pokemon) {
  const pokeball = game.items.find(item => item.name === "pokeball");

  if (pokeball.quantity > 0) {
    // Using a pokeball
    pokeball.quantity--;

    // Adding a Pokemon to party
    game.party.push(pokemon);

    console.log(`${pokemon.name} was caught! Pokéballs left: ${pokeball.quantity}`);
  } else {
    console.log("You have no Pokéballs left!");
  }
}
const pokeballItem = game.items.find(item => item.name === "pokeball");

if (pokeballItem && pokeballItem.quantity > 0) {
  pokeballItem.quantity--; // using 1 pokeball
}
/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/
for (let idx = 0; idx < game.gyms.length; idx++) {
    if (game.gyms[idx].difficulty < 6) {
        game.gyms[idx].completed = true
    }
}

console.log(game.gyms)
/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
  function gymStatus(game) {
    let completed = 0;
    let incomplete = 0;

    gyms.forEach(gym => {
      if (gym.completed) {
        completed++;
      } else {
        incomplete++;
      }
    });

    return {
      completed,
      incomplete
    };
  };

let completedCount = 0;
let incompleteCount = 0;

game.gyms.forEach(gym => {
  if (gym.completed) {
    completedCount++;
  } else {
    incompleteCount++;
  }
});

console.log(`Completed gyms: ${completedCount}`);
console.log(`Incomplete gyms: ${incompleteCount}`);
/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
console.log("Number of Pokémon in party:", game.partyCount());

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
for (let idx = 0; idx < game.gyms.length; idx++) {
    if (game.gyms[idx].difficulty < 8) {
        game.gyms[idx].completed = true
    }
}

console.log(game.gyms)
/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
console.log(game);