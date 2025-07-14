// Base smoothie class to store basic smoothie info
class Smoothie{
    constructor(name, size, main, fruit){
        this.name = name; // customer's name
        this.size = size; // Smoothie size (Small, Medium, Large)
        this.main = main; // Base liquid ingredient
        this.fruit = fruit; // Selected fruit
    }

    
//Smoothie order contains all of the information from Smoothie and includes pricing and display logic
}
class smoothieOrder extends Smoothie {
    constructor(name, size, main, fruit, sizePrice, mainPrice, fruitPrice, Total){
        super(name, size, main, fruit);
        this.sizePrice = sizePrice.toFixed(2); // formatting to 2 decimal points
        this.mainPrice = mainPrice.toFixed(2);
        this.fruitPrice = fruitPrice.toFixed(2);
        this.Total = Total;
        this.formattedTotal = this.Total.toFixed(2); // formatted total cost
    }
    // Summarizes the order
    description(){
        return `${this.name} ordered a ${this.size} ${this.fruit} smoothie with ${this.main}, for a total of $${this.formattedTotal}`;
    };
    // Returns detailed bill, breaking down the individual costs
    bill(){
        return `size: ${this.size} (${this.sizePrice})\nSmoothie Base: ${this.main} (${this.mainPrice})\nFruit: ${this.fruit} (${this.fruitPrice})`;
    };
    // Displays smoothie image based on fruit and size
    serveIt(){

    let smoothieCup = document.createElement("img"); // Create image element
    // Set image height based on smoothie size
    if (this.size == "Small"){
        smoothieCup.setAttribute("height", "100");
    }
    else if (this.size == "Medium"){
        smoothieCup.setAttribute("height", "150");
    }
    else if (this.size == "Large"){
        smoothieCup.setAttribute("height", "200");
    };
    // Sets the image source based on fruit
    if (this.fruit == "Banana"){
        smoothieCup.setAttribute("src", "./images/banana.png");
        document.getElementById("imageAttr").innerHTML="<a href='https://pngtree.com/freepng/banana-smoothie-drink-composition-watercolor_14631298.html'>png image from pngtree.com/</a>"
    }
    else if (this.fruit == "Strawberry"){
        smoothieCup.setAttribute("src", "./images/strawberry.png");
        document.getElementById("imageAttr").innerHTML="<a href='https://https://www.freepik.com/free-vector/hand-painted-watercolor-smoothies-blender-glass-illustration_13839324.htm#fromView=keyword&page=1&position=0&uuid=dae3cd3d-028c-4455-831d-1a5f32e33a49&query=Strawberry+Smoothie'>png image from freepik.com</a>"
    }
    else if (this.fruit == "Blueberry"){
        smoothieCup.setAttribute("src", "./images/blueberry.png");
        document.getElementById("imageAttr").innerHTML="<a href='https://www.freepik.com/free-vector/illustration-fruit-smoothie-drink-watercolor-style_2782931.htm#fromView=search&page=1&position=0&uuid=410ec575-b181-44fc-82cf-cffd9eff117b&query=blueberry+smoothie+clipart'>png image from freepik.com</a>"
    }
    else if (this.fruit == "Mango"){
        smoothieCup.setAttribute("src", "./images/mango.png");
        document.getElementById("imageAttr").innerHTML="<a href='https://www.freepik.com/free-vector/hand-painted-watercolor-smoothies-blender-glass-illustration_13839324.htm#fromView=keyword&page=1&position=0&uuid=dae3cd3d-028c-4455-831d-1a5f32e33a49&query=Strawberry+Smoothie'>png image from freepik.com</a>"
    };
    //Adding the image to the page
    document.getElementById("image").appendChild(smoothieCup);
    
    }
}

// event listener
document.getElementById("smoothieForm").addEventListener('submit', e => {
    e.preventDefault(); //Prevent default form submission
    //get values from form
    let name = document.getElementById("name").value;
    let size = document.getElementById("size").value;
    let main = document.getElementById("main").value;
    let fruit = document.getElementById("fruit").value;
    // initialize prices
    let sizePrice = 0;
    let mainPrice = 0;
    let fruitPrice = 0;

    
    //determine size price
    if (size == "Small"){
        sizePrice = 2;
    }
    else if (size == "Medium"){
        sizePrice = 2.5;
    }
    else if (size == "Large"){
        sizePrice = 3;
    };
    //determine main liquid base price
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
    //determine fruit price
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
    //calculate total cost
    let Total = sizePrice + mainPrice + fruitPrice;
    //create new smoothieOrder object
    const order = new smoothieOrder(name, size, main, fruit, sizePrice, mainPrice, fruitPrice, Total);
    //display the order and bill
    document.getElementById("result").textContent = order.description();
    document.getElementById("bill").textContent = order.bill();
    //display the smoothie image
    order.serveIt();
});
