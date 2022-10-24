"use strict";
class Pizza {
    constructor(size, ham, pepperoni, piña, extraCheese) {
        this.size = size;
        this.ham = ham;
        this.pepperoni = pepperoni;
        this.piña = piña;
        this.extraCheese = extraCheese;
    }
    getSum() {
        let price = 0;
        if (this.size == 'small') {
            price = 10 + (2 * (this.ham + this.pepperoni + this.piña));
            if (this.extraCheese == true) {
                price = price + 2;
            }
        }
        if (this.size == 'medium') {
            price = 12 + (2 * (this.ham + this.pepperoni + this.piña));
            if (this.extraCheese == true) {
                price = price + 4;
            }
        }
        if (this.size == 'large') {
            price = 14 + (3 * (this.ham + this.pepperoni + this.piña));
            if (this.extraCheese == true) {
                price = price + 6;
            }
        }
        if (this.size == 'XL') {
            price = 18 + (4 * (this.ham + this.pepperoni + this.piña));
            if (this.extraCheese == true) {
                price = price + 6;
            }
        }
        return price;
    }
    orderSummary() {
        let withCheese = '';
        let totalToppings = (this.ham + this.pepperoni + this.piña);
        if (this.size == 'small')
            this.extraCheese
                ? withCheese = 'Yes'
                : withCheese = 'No';
        return `
    
      ------- PIZZA ORDER ------- 
    
       Size: ${this.size}
    
       Toppings: ${totalToppings}
    
       Ham: ${this.ham}
    
       Pepperoni: ${this.pepperoni}
    
       Pineapple: ${this.piña}
    
       Extra Cheese: ${withCheese} 
    
       Price: $${this.getSum()}
    
      ---------------------------- 
    
      `;
    }
}
class DoughSize {
    createPizza(size, ham, pepperoni, piña, extraCheese) {
        return new Pizza(size, ham, pepperoni, piña, extraCheese);
    }
}
class PizzaGen {
    constructor() {
        this.pizza = new DoughSize();
    }
    getPizza() {
        return this.pizza;
    }
}
const pizza = new PizzaGen();
const order1 = pizza.getPizza().createPizza('small', 1, 1, 1, true);
const order2 = pizza.getPizza().createPizza('medium', 1, 2, 3, false);
const order3 = pizza.getPizza().createPizza('XL', 0, 0, 0, false);
console.log(order1.orderSummary());
console.log(order2.orderSummary());
console.log(order3.orderSummary());
