class Bank{
    acc_Id;
    acc_name;
    acc_bal=0;
    min_bal=500;

    constructor(id, names,amount,bal){
        this.acc_Id=id;
        this.acc_name=names;
        this.acc_bal=amount;
        this.min_bal=bal;
    }
}
let a1 = new Bank(100, 'githa', 54000,90)
let a2 = new Bank(101,'ravi', 63000,70000)
console.log(a1)

