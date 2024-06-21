// with extends  in inheritance   output : Child { asset: '100cr', qualities: 'good' }

class Parent{
    asset ='100cr';
}
class Child extends Parent{

    qualities = 'good'

}
let a = new Child()
console.log(a)