function encriptar1(texto) {
    let str = texto;
    let arr1 = [];

    // A Hexadecimal
	for (let n = 0, l = str.length; n < l; n ++) {
		let hex = Number(str.charCodeAt(n)).toString(16);
	    arr1.push(hex);
    }
    
    // Swap
    arr1 = arr1.toString();
    let splitString = arr1.split(""); 
    let reverseArray = splitString.reverse();
    arr1 = reverseArray.join(""); 

    return arr1;

}

console.log(encriptar1("Hola, soy siri, y estoy aqui para ayudarte"));