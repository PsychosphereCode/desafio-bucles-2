function siempreHambriento(arr) {
    /* 
        for (int i = 0; i < arr.length; i++)
        {
            element = arr[i];
            if (element === "comida")
                console.log("delicioso");
        }
    
    */
    var contadorComida = 0;
    arr.forEach((element) => {
        if (element === "comida") {
            console.log("delicioso");
            contadorComida += 1;
        }   
    });

        if (contadorComida===0){
            console.log("Tengo Hambre");
    }
}

// // siempreHambriento ([4, 1, 5, 7, 2]);
// siempreHambriento([3.14, "comida", "pastel", true, "comida"]);

function highPass(arr, cutoff) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) 
            filteredArr.push(arr[i]);
    }

    // arr.forEach(element => {
    //     if(element > cutoff)
    //         filteredArr.push(element);

    // });

    return filteredArr;
}

// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // esperamos de vuelta [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    var promedio = 0;
    arr.forEach((element) => {
        sum += element;
    });
    promedio = sum / arr.length;
    console.log(promedio);

    arr.forEach((element) => {
        if (element > promedio)
        count+=1;
    });
    return count;
}

// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // esperamos 4 de vuelta




function reverse(arr) {
    let tempArr = [];
    for (let i = arr.length-1; i >= 0; i-- ) // i = 4; i = 3; i = 2; i = 1; i = 0
    {
        let element = arr[i];
        tempArr.push(element);
    }

    arr = tempArr;
    return arr;
}

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


function fibonacciArray(n){
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    
    while (fibArr.length < n){
        var actualPos = fibArr.length;
        var ultimo = fibArr[actualPos - 1];
        var penultimo = fibArr[actualPos - 2];

        var nuevoNumeroFibonacci = ultimo + penultimo;
        fibArr.push(nuevoNumeroFibonacci);

    }

    return fibArr;
}


var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
