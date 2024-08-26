function formatNumber(x, isModified) {
    return isModified ? (Number.isInteger(x) ? `${x}p` : `${x.toFixed(1)}p`) : (Number.isInteger(x) ? `${x}` : x.toFixed(1));
}

function formatMagicNumber(num) {
    return Number.isInteger(num) ? `${num}` : num.toFixed(1);
}

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

function calculatePatterns() {
    const pattern = document.getElementById('patternInput').value;
    const people = parseInt(document.getElementById('peopleInput').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    let sumatory = Array.from(pattern).reduce((sum, digit) => sum + parseInt(digit), 0);
    let period = pattern.length;

    // Validar si el siteswap es válido
    if (sumatory % period !== 0) {
        alert('El siteswap no es válido. Recuerda que la suma total de los números del siteswap al dividirse por la cantidad de los mismos, debe dar un número entero.');
        return;
    }

    // Validar si 'people' tiene un valor válido
    if (isNaN(people) || people <= 0) {
        alert('Introduzca la cantidad de personas que participarán de los pases');
        return;
    }

    let magicNumber = period / people;

    let results = []; // Array to store results before displaying
    let output = `Tu número mágico es el '${formatMagicNumber(magicNumber)}'\n`;
    output += `Aquí tienes posibles patrones de Prechac para el siteswap '${pattern}' entre ${people} personas:\n`;

    for (let numElements = 1; numElements <= pattern.length; numElements++) {
        let positions = getCombinations([...Array(pattern.length).keys()], numElements);
        positions.forEach(posSet => {
            let originalPattern = Array.from(pattern).map(digit => parseInt(digit));
            let modifiedPatternSum = [...originalPattern];
            let modifiedPatternRest = [...originalPattern];

            posSet.forEach(pos => {
                modifiedPatternSum[pos] += magicNumber;
                modifiedPatternRest[pos] -= magicNumber;
            });

            let showResult = false; // Flag to determine if we should show the result

            if (modifiedPatternRest.every(value => value >= 0)) {
                let formattedSum = modifiedPatternSum.map((x, idx) => formatNumber(x, posSet.includes(idx))).join(' ');

                // Calcular la cantidad de objetos para la suma
                let totalSum = modifiedPatternSum.reduce((acc, val) => acc + val, 0);
                let quantityOfObjectsSum = (totalSum * people) / period;

                // Mostrar solo si la cantidad de objetos es un número entero
                if (Number.isInteger(quantityOfObjectsSum)) {
                    results.push({ pattern: formattedSum, objects: quantityOfObjectsSum });
                    showResult = true;
                }
            }

            if (showResult) {
                let formattedRest = modifiedPatternRest.map((x, idx) => formatNumber(x, posSet.includes(idx))).join(' ');

                // Calcular la cantidad de objetos para la resta
                let totalRest = modifiedPatternRest.reduce((acc, val) => acc + val, 0);
                let quantityOfObjectsRest = (totalRest * people) / period;

                // Mostrar solo si la cantidad de objetos es un número entero
                if (Number.isInteger(quantityOfObjectsRest)) {
                    results.push({ pattern: formattedRest, objects: quantityOfObjectsRest });
                }
            }
        });
    }

    // Ordenar resultados por cantidad de objetos (menor a mayor)
    results.sort((a, b) => a.objects - b.objects);

    // Construir la salida final
    results.forEach(result => {
        output += `${result.pattern} (Objetos: ${result.objects})\n`;
    });

    resultsDiv.innerText = output + 'Gracias por utilizar la calculadora de Prechac. ¡Ahora, a entrenar!';
}
