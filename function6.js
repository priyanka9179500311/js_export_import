export class MyClass{
	//1. property
	
	//2. constructor
	constructor(){
		alert('Hello from MyClass constuctor');
	}
	
	//3. method
	showName(name){
		//alert('Hello'+name);
		return 'Hello'+name;
	}
}
 class MyClass2{
	//1. property
	
	//2. constructor
	constructor(){
		alert('Hello from MyClass2 constuctor');
	}
	
	//3. method
	showName(name){
		//alert('Hello'+name);
		return 'Hello'+name;
	}
}
export{MyClass2};

class MyClass3{
	//1. property
	
	//2. constructor
	constructor(){
		alert('Hello from MyClass3 constuctor');
	}
	
	//3. method
	add(x,y){
		alert("the sum is"+(x+y));
		
	}
}
export{MyClass3};

export class MyClass4{
	//1. property
	
	//2. constructor
	constructor(r){
		alert("the area of circle"+3.14*r*r);
	}
	
	//3. method
	mul(x,y){
		alert("the mul is"+(x*y));
		
	}
}
