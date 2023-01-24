let marutiCar = ['Alto800', 'Swift', 'Wagon r'];
let tataCar = ['Punch', 'Herrier', 'Altroz'];

let userChooseColor = {
    Alto800: 'Red',
    Punch: 'Blue',
    getColor: function(){
        console.log(`User choose car color: ${this.Punch}`)
    }
}

//Add prototype to object

//targeting object.inside prtotype.property name
Object.prototype.personName = function(){
    console.log('Archit buy new car');
}

//Inherit from object
marutiCar.personName();