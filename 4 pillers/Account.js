//  two contractor in inhretance

class Account{
    constructor(){
        //super()
        console.log('account class - const')
    }
}
class SA extends Account{
    constructor(){
       super()
        console.log('service account class - const')
    }
}
new SA()