from itertools import combinations

print('Bienvenido a la calculadora de Prechac.')
while True:
    pattern = input('Por favor, introduce un siteswap a transformar: ')
    sumatory = sum(int(digit) for digit in pattern)
    period = len(pattern)

    # Verificar si la división de suma entre period produce un entero
    if sumatory % period == 0:
        people = int(input('Perfecto. ¿Cuántas personas realizarán los pases? '))
        break  # Sale del bucle si el pattern es válido
    else:
        print('El siteswap no es válido. Recuerda que la suma total de los números del siteswap al dividirse por la cantidad de los mismos, debe dar un número entero.')

magic_number = float(period / people)

def format_number(x, is_modified):
    """Formatea el número para mostrarlo como entero o float con un decimal, con 'p' si es modificado"""
    if is_modified:
        return f"{x:.1f}p" if not x.is_integer() else f"{int(x)}p"
    else:
        return f"{int(x)}" if x.is_integer() else f"{x:.1f}"

def format_magic_number(num):
    """Formatea el magic_number para mostrarlo como entero si no tiene parte decimal significativa"""
    return f"{int(num)}" if num.is_integer() else f"{num:.1f}"

# Imprimir el mensaje una sola vez antes de mostrar los resultados
print(f"Tu número mágico es el '{format_magic_number(magic_number)}'")
print(f"Aquí tienes todos los posibles patrones de Prechac para el siteswap '{pattern}' entre {people} personas:")

# Generar y mostrar las versiones modificadas del pattern
for num_elements in range(1, len(pattern) + 1):
    for positions in combinations(range(len(pattern)), num_elements):
        # Convertir el pattern en una lista de enteros
        original_pattern = [int(digit) for digit in pattern]
        modified_pattern_sum = original_pattern.copy()
        modified_pattern_rest = original_pattern.copy()

        # Aplicar el magic_number a las posiciones seleccionadas
        for pos in positions:
            modified_pattern_sum[pos] += magic_number
            modified_pattern_rest[pos] -= magic_number

        # Verificar si todos los valores en modified_pattern_rest son no negativos
        if all(value >= 0 for value in modified_pattern_rest):
            # Formatear los resultados
            formatted_sum = [format_number(x, idx in positions) for idx, x in enumerate(modified_pattern_sum)]
            formatted_rest = [format_number(x, idx in positions) for idx, x in enumerate(modified_pattern_rest)]

            # Imprimir los patterns modificados
            print(' '.join(formatted_sum))
            print(' '.join(formatted_rest))

print('Gracias por utilizar la calculadora de Prechac. ¡Ahora, a entrenar!')