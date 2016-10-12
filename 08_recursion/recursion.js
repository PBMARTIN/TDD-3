function factorialIterative(n){
	var sum = 1;
	while (n>1){
		sum *= n;
		n --
	};
	return sum
};

function factorial(n){
	if (n==0){
		return 1
	};
	return n*factorial(n-1)
}

function fib(n){
	if (n==0 || n==1){
		return 1
	};
	return fib(n-1)+fib(n-2)
};

function type(item){
	var type = toString.call(item);
	return type.slice(8,-1)
};

function stringify(item){
	if (type(item) == 'Undefined'){
		return 'undefined'
	};
	if (type(item) == 'Null'){
		return 'null'
	};
	if (type(item) == 'Boolean'){
		return item.toString()
	};
	if (type(item) == 'String'){
		return '"'+item+'"'
	};
	if (type(item) == 'Number'){
		return ''+item
	};
	if (type(item) == 'Function'){
		return ''+item
	};
	if (type(item) == 'Array'){
		var str = "[";
		for (i in item){
			str += stringify(item[i]);
			str += ","
		};
		return str.slice(0,-1) + "]"
	};
	if (type(item) == 'Object'){
		var str = '{';
		for (i in item){
			str += '"'
			str += i;
			str += '"'
			str += ": ";
			str += stringify(item[i]);
			str += ","
		};
		return str.slice(0,-1) + "}"
	}
}