class Smoothie{
    constructor(name, size, main, fruit){
        this.name = name;
        this.size = size;
        this.main = main;
        this.fruit = fruit;
    }

    

}
class smoothieOrder extends Smoothie {
    constructor(name, size, main, fruit, sizePrice, mainPrice, fruitPrice, Total){
        super(name, size, main, fruit);
        this.sizePrice = sizePrice.toFixed(2);
        this.mainPrice = mainPrice.toFixed(2);
        this.fruitPrice = fruitPrice.toFixed(2);
        this.Total = Total;
        this.formattedTotal = this.Total.toFixed(2);
    }
    description(){
        return `${this.name} ordered a ${this.size} ${this.fruit} smoothie with ${this.main}, for a total of ${this.formattedTotal}`;
    };
    bill(){
        return `size: ${this.size} (${this.sizePrice})\nSmoothie Base: ${this.main} (${this.mainPrice})\nFruit: ${this.fruit} (${this.fruitPrice})`;
    };
}

document.getElementById("smoothieForm").addEventListener('submit', e => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let size = document.getElementById("size").value;
    let main = document.getElementById("main").value;
    let fruit = document.getElementById("fruit").value;
    let sizePrice = 0;
    let mainPrice = 0;
    let fruitPrice = 0;

    
    
    if (size == "Small"){
        sizePrice = 2;
    }
    else if (size == "Medium"){
        sizePrice = 2.5;
    }
    else if (size == "Large"){
        sizePrice = 3;
    };
    if (main == "Almond Milk"){
        mainPrice = 1.25;
    }
    else if (main == "Yogurt"){
        mainPrice = 1;
    }
    else if (main == "Coconut Water"){
        mainPrice = 1.5;
    }
    else if (main == "Orange Juice"){
        mainPrice = 1;
    };
    if (fruit == "Banana"){
        fruitPrice = 0.75;
    }
    else if (fruit == "Strawberry"){
        fruitPrice = 1.25;
    }
    else if (fruit == "Blueberry"){
        fruitPrice = 1.5;
    }
    else if (fruit == "Mango"){
        fruitPrice = 1.25;
    };
    let Total = sizePrice + mainPrice + fruitPrice;

    const order = new smoothieOrder(name, size, main, fruit, sizePrice, mainPrice, fruitPrice, Total);
    document.getElementById("result").textContent = order.description();
    document.getElementById("bill").textContent = order.bill();
});
