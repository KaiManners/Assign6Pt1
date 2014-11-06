var transformFib = function(f, list){
	var newList = []; 
	for(i in list){
		newList[i] = f(list[i]); 
	}
	return newList; 
}

var transformTri = function(f, list){
        var newList = []; 
        for(i in list){
                newList[i] = f(list[i]);
        }
        return newList;
}

var readFibNumbers = function(){
	var inputBox = document.getElementById('scores'); 
	var inputStr = inputBox.value; 
	var inputArr = inputStr.split(" "); 
	return transformFib(parseInt, inputArr);
}

var readTriNumbers = function(){
	var inputBox = document.getElementById('triscores');
        var inputStr = inputBox.value;
        var inputArr = inputStr.split(" ");
        return transformTri(parseInt, inputArr);
}	

var fibonacci = function(n){
        var fib1=0;
        var fib2=1;
        var fib3;   
        for(var i = 0; i < n; i++){
                fib3 = fib1 + fib2;
                fib1 = fib2;
                fib2 = fib3; 
        }   
        return fib1;
};

var triangular = function(n){
        result = 0; 
        for (var i = 0; i <= n; i++){
                result = result + i;
        }
        return result;
}

var runTri = function(){
	var scores = readTriNumbers();
	var tri = triangular(scores);
	var lookup = document.getElementById('triresult');
	lookup.innerHTML = 'Your triangular number is ' + tri;

}

var runFib = function(){
	var scores = readFibNumbers();
	var fib = fibonacci(scores);
	var lookup = document.getElementById('result');
	lookup.innerHTML = 'Your fibonacci number is ' + fib;
}

var button = document.getElementById('runner');
var button2 = document.getElementById('runtri');
button.onclick = runFib;
button2.onclick = runTri;
