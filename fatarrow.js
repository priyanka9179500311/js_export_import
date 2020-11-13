export var myObject = {
	name:"jayshree",
	"surname":'sharma'
};
export let n1=10;
export let n2=20;

function showName(name){
	alert('Hello'+name);
}
let showName2 = (name)=>{
alert(`Hello ${name}`);
}

export { showName,showName2 };