class Bank{
    open_acc(){
        console.log("open bank account")
    }

    with_draw(){
        console.log("withdraw money")
    }

    diposit(){
        console.log("diposit money in bank")
    }

    close_acc(){
        console.log("close the account")
    }
}
let a1=new Bank();
console.log(a1.with_draw)
