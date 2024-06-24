class Test{
    Acc_Id;
    Acc_Name;
    Acc_Addr;
    constructor(id, names,addr){
        this.Acc_Id=id;
        this.Acc_Name=names;
        this.Acc_Addr=addr;
    }
}
class SA extends Test{
    Acc_Email;
    Acc_Bal=0;
    Min_Bal=500;
    constructor(id,name,addr,amount,email){
        super()
     this.Acc_Email=email;
     this.Acc_Bal=amount;
    }
    deposit_Amount(){

    }
    get_Bal(){
        return this.Acc_Bal_this.Min_Bal
    }
}
let sa1 = new SA(101, 'thahrun', 'baglore',45000, 'taharunps@gmail.com' );

    

    

