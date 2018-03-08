// console.log("Hello World!")
// name = "Jack"

// if (name == "Alvin") {
// 	console.log("Hello Alvin");
// } else if (name == "Steve") {
// 	console.log("Hello Steve");
// } else if (name == "John") {
// 	console.log("Hello John");
// } else {
// 	console.log("Hello " + name)
// }	



//indexOf Method

// name = "Jason"

// recognized_names = ["Alvin", "John", "Terry"]

// if (recognized_names.indexOf(name) > -1) {
// 	console.log ("Hello " + name)
// } else {
// 	console.log ("Hello")
// }

// //Includes method

// name = "Alvin"

// recognized_names = ["Alvin", "John", "Terry"]

// if (recognized_names.includes (name)) {
// 	console.log ("Hello " + name)
// } else {
// 	console.log ("Hello")
// }
recognized_names = ["Alvin", "John", "Terry"]


greet = function (name, recognized_names){

	if (recognized_names.includes (name)) {
		window.alert ("Hello " + name)
	} else {
		window.alert ("Hello")
	}

}

greet ("Jack", recognized_names);

