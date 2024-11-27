class Employee{                      //Encapsulation using getter and setter , private variables
    #Emp_id=645365;
    #Emp_dnc=88844;
    Emp_name="Ashok";

    getEmp_id(){
        return this.#Emp_id;
    }

    setEmp_id(id){
        this.#Emp_id=id;
    }
}

const c1=new Employee();
console.log(c1.getEmp_id());   //getting the private access Emp_id


c1.setEmp_id(3423535)
console.log(c1.getEmp_id());