

let basket = {
    vegetable: 'Tomato',
    fruit: "apple",
    //we used methods below i.e (object inside object)
    refrigerator: function() {
        return this.fruit;  //this refer object which we target inside basket
    }
}

console.log(basket.refrigerator()); 

console.log(this) //target global object like empty node