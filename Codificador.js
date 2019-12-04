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

//Pasar a Base64
function coderB64(txt) {
    let coded = Buffer.from(text).toString('base64')
    return coded;
}

//Añadir número random después de cada carácter.
function randomAdder(txt) {
    let codedTextV2 = "";
    for (let i = 0; i < txt.length; i++) {
        codedTextV2 += txt.substr(i, 1) + Math.trunc(Math.random() * 9);
    }
    return codedTextV2;
}

//Darle la vuelta al string.
function reverse(txt) {
    let vector = txt.split("");
    vector.reverse();
    return vector.join("");
}

//Pasar a Hexadecimal.
function hex(txt) {
    hex = "";
    for (let i = 0; i < txt.length; i++){
        hex += txt.substr(i, 1).charCodeAt().toString(16);
    }
    return hex;
}

//////////////////////////////DECODIFICAR
/* function decodeB64(txt) {
    let decoded = Buffer.from(txt, 'base64').toString();
    return decoded;
}

function decodeRandomAdder(txt) {
    let decoded = "";
    for (let i = 0; i < txt.length; i++) {
        if (i % 2 == 0)
            decoded += txt.substr(i, 1);
    }
    return decoded;
}

function decodeReverse(txt) {
    let vector = txt.split("");
    vector.reverse();
    return vector.join("");
} */

/* function decodeHex(txt) {
    texto = "";
    c16 = txt.match(/[\da-fA-F]{2}/g);
    for (index in c16){
        texto += String.fromCharCode(parseInt(c16[index], 16));
    }
    return texto;
} */



let text = "Decode";
//let codedText = coderB64(text);
//console.log(codedText)
let codedText = hex(reverse(randomAdder(coderB64(encriptar1(text)))));

console.log(codedText);
//console.log(coderB64(text));

//let decodedText = decodeB64(decodeRandomAdder(decodeReverse(decodeHex(codedText))));
//console.log(decodedText);

//356c355233323362336a385637473852