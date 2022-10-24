class Pizza{

     //Initialize all properties for a pizza
     private size: 'small' | 'medium' | 'large' | 'XL';
    
     private ham: number;
    
     private pepperoni: number;
    
     private piña: number;
    
     private extraCheese:boolean;
    
    
    
    constructor(size:'small' | 'medium' | 'large' | 'XL', ham:number, pepperoni:number, piña:number, extraCheese:boolean){
    
     this.size = size;
    
     this.ham = ham;
    
     this.pepperoni = pepperoni;
    
     this.piña = piña;
    
     this.extraCheese = extraCheese;
    
     }
    
    
    //Create method to calculate price for a pizza
     getSum() {
    
      let price: number = 0;
    
      if (this.size == 'small') {
    
       price = 10 + (2 * (this.ham + this.pepperoni + this.piña))
    
       if (this.extraCheese == true) {
    
        price += 2;
    
       }
    
      }
    
      if (this.size == 'medium') {
    
       price = 12 + (2 * (this.ham + this.pepperoni + this.piña))
    
       if (this.extraCheese == true) {
    
        price += 4;
    
       }
    
      }
    
      if (this.size == 'large') {
    
       price = 14 + (3 * (this.ham + this.pepperoni + this.piña))
    
       if (this.extraCheese == true) {
        
        price += 6;
    
       }
    
      }
    
      if (this.size == 'XL') {
    
       price = 18 + (4 * (this.ham + this.pepperoni + this.piña))
    
       if (this.extraCheese == true) {
    
        price += 6;
    
       }
    
      }
    
      return price;
    
     }
    
     
     //Create a method to show the properties and price of a pizza
     orderSummary(): string{
    
      let withCheese:string = '';
    
      let totalToppings: number = (this.ham+this.pepperoni+this.piña);
    
      if(this.size == 'small')
    
      this.extraCheese ? withCheese = 'Yes' : withCheese = 'No'
    
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
    
      `
    
     }
    
    }
    
    
    //Method to set the size
    class DoughSize{
    
     createPizza(size: 'small' | 'medium' | 'large' | 'XL',ham:number, pepperoni:number, piña:number,extraCheese:boolean){
    
      return new Pizza(size,ham, pepperoni, piña,extraCheese)
    
     }
    
    }
    
    
    
    class PizzaGen {
    
     pizza: DoughSize;
    
     constructor(){
    
      this.pizza = new DoughSize()
    
     }
    
    
    
     getPizza(){
    
      return this.pizza;
    
     }
    
    }
    
    
    
    
    const pizza = new PizzaGen();
    
    const order1 = pizza.getPizza().createPizza('large',3,2,3,false)
    
    const order2 = pizza.getPizza().createPizza('small',3,1,4,false)
    
    const order3 = pizza.getPizza().createPizza('XL',2,2,4,true)
    
    console.log(order1.orderSummary())
    
    console.log(order2.orderSummary())
    
    console.log(order3.orderSummary())
    
    
    