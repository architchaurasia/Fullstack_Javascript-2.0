//In the following shopping cart add, remove, edit items
    //=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    // - add 'Meat' in the beginning of your shopping cart if it has not been already added
    // - add Sugar at the end of your shopping cart if it has not been already added
    // - remove 'Honey'
    // - modify Tea to 'Green Tea'

// Variable Declared

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.splice(0,0, "Meat")
//Add 'Meat' in the beginning of your shopping cart if it has not been already added
//Output
//[ 'Milk', 'Coffee', 'Tea', 'Honey', 'Meat' ]

shoppingCart.splice(5,0, "Sugar")
//Add Sugar at the end of your shopping cart if it has not been already added
//Output
//[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

shoppingCart.splice(4,1)
//remove 'Honey'
//Output
//[ 'Meat', 'Milk', 'Coffee', 'Tea', 'Green', 'Sugar' ]

shoppingCart.splice(3,1, "Green Tea")
//remove 'Honey'
//Output




console.log(addMeat);

