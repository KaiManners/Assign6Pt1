var readNumbers = function(){
        var inputBox = document.getElementById('number');
        var inputStr = inputBox.value;
        var inputArr = inputStr.split(" ");
        return inputArr;
};

var makeTimesTable = function(n){
       	var table = document.createElement('table');
	var tableRow1 = document.createElement('tr');
        for(var i = 0; i <= 10; i++){
                var heading = document.createElement('th');
		var multipliedNumber = document.createTextNode(i);
		heading.appendChild(multipliedNumber);
		tableRow1.appendChild(heading);
	}
	var tableRow2 = document.createElement('tr');
	for(var i = 0; i <= 10; i++){
		var heading2 = document.createElement('th');
		var product = document.createTextNode(n*i);
		heading2.appendChild(product);
		tableRow2.appendChild(heading2);
	}
	var tableRow3 = document.createElement('tr');
	for(var i = 0; i <= 10; i++){
		var heading3 = document.createElement('td');
		var multiplier = document.createTextNode('times');
		heading3.appendChild(multiplier);
		tableRow3.appendChild(heading3);
	}
	var tableRow4 = document.createElement('tr');
	for(var i = 0; i <= 10; i++){
		var heading4 = document.createElement('th');
		var number = document.createTextNode(n);
		heading4.appendChild(number);
		tableRow4.appendChild(heading4);
	}
	var tableRow5 = document.createElement('tr');
        for(var i = 0; i <= 10; i++){
                var heading5 = document.createElement('td');
                var equalSign = document.createTextNode('equals');
                heading5.appendChild(equalSign);
                tableRow5.appendChild(heading5);
        }

	table.appendChild(tableRow1);
	table.appendChild(tableRow3);
	table.appendChild(tableRow4);
	table.appendChild(tableRow5);
	table.appendChild(tableRow2);
	return table;
};

var run = function(){
       var number = readNumbers();
       var table = makeTimesTable(number);	
       var lookup = document.getElementById('result');
       lookup = document.body.appendChild(table);
};

var button = document.getElementById('runner');
button.onclick = run;
