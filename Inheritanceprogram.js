class Mobile{                                       //single inheritance
    constructor(brand,model,processor,price){
        this.brand=brand;
        this.model=model;
        this.processor=processor;
        this.price=price;
    }

}

class Redmi extends Mobile{
    constructor(brand,model,processor,price){
        super(brand,model,processor,price)
    }
}

const o1=new Redmi("Redmi","Redmi note 12 pro","Snapdragon 7025",21999);

console.log(o1);