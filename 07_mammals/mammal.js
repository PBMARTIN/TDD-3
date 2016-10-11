function Mammal(name){
	this.name=name;
	this.offspring=[];
};
Mammal.prototype.sayHello = function(){
	return "My name is "+this.name+", I'm a Mammal"
};
Mammal.prototype.haveBaby = function(){
	var name = 'Baby '+this.name;
	this.offspring.push(new Mammal(name));
	return new Mammal(name);
};

function Cat(name,color){
	Mammal.call(this,name);
	this.color = color;
};
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.haveBaby = function(color){
	var name = 'Baby '+this.name;
	this.offspring.push(new Cat(name,color));
	return new Cat(name,color);
};


