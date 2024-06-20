class Account2{
    acc_Bal = 10;
    min_Bal =2000;
    deposite_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    get_Bal(){
        return
    }
}
let a1=new Account()
a1 = deposite_Amount(5000)
a1 = deposite_Amount(15)
console.log(a1)

let a2 = new Account()
a2 = deposite_Amount(15000)
a2 = deposite_Amount(50)
console.log(a2)
console.log(a2.get_Balance)