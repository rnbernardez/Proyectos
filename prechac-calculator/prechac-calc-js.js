function formatNumber(x, isModified) {
    // Formatea el número para mostrarlo como entero o float con un decimal, con 'p' si es modificado
    if (isModified) {
        return Number.isInteger(x) ? `${x}p` : `${x.toFixed(1)}p`;
    } else {
        return Number.isInteger(x) ? `${x}` : x.toFixed(1);
    }
}

function formatMagicNumber(num) {
    // Formatea el magic_number para mostrarlo como entero si no tiene parte decimal significativa
    return Number.isInteger(num) ? `${num}` : num.toFixed(1);
}

console.log('Bienvenido a la calculadora de Prechac.');
let pattern;
let sumatory;
let period;
let people;
while (true) {
    pattern = prompt('Por favor, introduce un siteswap a transformar: ');
    sumatory = Array.from(pattern).reduce((sum, digit) => sum + parseInt(digit), 0);
    period = pattern.length;

    // Verificar si la división de suma entre period produce un entero
    if (sumatory % period === 0) {
        people = parseInt(prompt('Perfecto. ¿Cuántas personas realizarán los pases? '));
        break; // Sale del bucle si el pattern es válido
    } else {
        console.log('El siteswap no es válido. Recuerda que la suma total de los números del siteswap al dividirse por la cantidad de los mismos, debe dar un número entero.');
    }
}

let magicNumber = period / people;

console.log(`Tu número mágico es el '${formatMagicNumber(magicNumber)}'`);
console.log(`Aquí tienes todos los posibles patrones de Prechac para el siteswap '${pattern}' entre ${people} personas:`);

// Generar y mostrar las versiones modificadas del pattern
for (let numElements = 1; numElements <= pattern.length; numElements++) {
    let positions = getCombinations([...Array(pattern.length).keys()], numElements);
    positions.forEach(posSet => {
        let originalPattern = Array.from(pattern).map(digit => parseInt(digit));
        let modifiedPatternSum = [...originalPattern];
        let modifiedPatternRest = [...originalPattern];

        // Aplicar el magic_number a las posiciones seleccionadas
        posSet.forEach(pos => {
            modifiedPatternSum[pos] += magicNumber;
            modifiedPatternRest[pos] -= magicNumber;
        });

        // Verificar si todos los valores en modifiedPatternRest son no negativos
        if (modifiedPatternRest.every(value => value >= 0)) {
            // Formatear los resultados
            let formattedSum = modifiedPatternSum.map((x, idx) => formatNumber(x, posSet.includes(idx)));
            let formattedRest = modifiedPatternRest.map((x, idx) => formatNumber(x, posSet.includes(idx)));

            // Imprimir los patterns modificados
            console.log(formattedSum.join(' '));
            console.log(formattedRest.join(' '));
        }
    });
}

console.log('Gracias por utilizar la calculadora de Prechac. ¡Ahora, a entrenar!');

function getCombinations(arr, numElements) {
    let result = [];
    let f = function (prefix, arr) {
        for (let i = 0; i < arr.length; i++) {
            let newPrefix = prefix.concat(arr[i]);
            if (newPrefix.length === numElements) {
                result.push(newPrefix);
            } else {
                f(newPrefix, arr.slice(i + 1));
            }
        }
    };
    f([], arr);
    return result;
}
