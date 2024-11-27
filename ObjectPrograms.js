const myBook={                  //object literal
    bookname:"GIT",
    price:232
}


console.log(myBook.bookname+" "+myBook.price);



const b2=new Object();                   //Object() 

b2.bookname="Data structures"
b2.price=543


console.log(b2.bookname+" "+b2.price)



function mobile(brand,price){                //constructor
    this.brand=brand;
    this.price=price;

}

const c1=new mobile("Redmi",12789);

console.log(c1);