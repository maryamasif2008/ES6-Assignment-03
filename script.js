                                             // Inheritance
class category{
    dryfruit(){
        return "Kaju is dry fuit";
    }
    pomfruit(){
        return "Apple is pomfruit";
    }
}                                             
class fruits extends category{
    constructor(){
        super()
        console.warn("constructor")
    }
    getfruit(){
        return "you got apple";
    }
}                              
let f1 =new fruits;
let c1 = new category;
console.warn(c1.dryfruit)
console.warn(f1.pomfruit)        

                                           //Lexical Scope For This
let data={
    list:'friends',
    names:['john','petter','jack'],
    getfriends:function(){
            this.names.map(function(item){
                console.warn("friend",item)
            })
        }
}  
data.getfriends();     

                                           //Reset Operator
 function fruit(a,...z){
    console.warn("fruit",z)
 }
 function test(){

 }
 fruit("apple","mango","orange","grapes");                                          

                                          //Promisses
 let a= undefined;    
 
 let promiseData=new Promise((resolved,reject)=>{
    setTimeout(() => {
        a="hello ECMA";
    }, 3000);       
    resolved("done")   
 })

 promiseData.then(()=>{
    alert(a);
 })
                        
                                        //New Global Function
console.log(isFinite(10));    
console.log(isFinite("a"));
console.log(isFinite(10/0));
console.log(isFinite(0));
console.log(isFinite(null));

console.log(isNaN("a"));  
console.log(isNaN(40)); 
console.log(isNaN("20a"));     