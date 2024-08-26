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

    if (sumatory % period !== 0) {
        alert('El siteswap no es válido. Recuerda que la suma total de los números del siteswap al dividirse por la cantidad de los mismos, debe dar un número entero.');
        return;
    }

    let magicNumber = period / people;

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

            if (modifiedPatternRest.every(value => value >= 0)) {
                let formattedSum = modifiedPatternSum.map((x, idx) => formatNumber(x, posSet.includes(idx))).join(' ');
                let formattedRest = modifiedPatternRest.map((x, idx) => formatNumber(x, posSet.includes(idx))).join(' ');
                output += `${formattedSum}\n${formattedRest}\n`;
            }
        });
    }

    resultsDiv.innerText = output + 'Gracias por utilizar la calculadora de Prechac. ¡Ahora, a entrenar!';
}
