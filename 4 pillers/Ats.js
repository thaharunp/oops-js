//  two contractor in inhretance

class Account{
    constructor(){
        //super()
        console.log('account class - const')
    }
}
class SA extends Account{
    constructor(){
       
    }
}
new SA()

//  Must call super constructor in derived class before accessing 'this' or returning from derived constructor