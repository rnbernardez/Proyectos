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

# Imprimir el mensaje una sola vez antes de mostrar los resultados
print(f"Tu número mágico es el '{magic_number}'")
print(f"Aquí tienes todos los posibles patrones de Prechac para el siteswap '{pattern}' entre {people} personas:")

def format_number(x, is_modified):
    """Formatea el número para mostrarlo como entero o float con un decimal, con 'p' si es modificado"""
    if is_modified:
        return f"{x:.1f}p" if not x.is_integer() else f"{int(x)}p"
    else:
        return f"{int(x)}" if x.is_integer() else f"{x:.1f}"

# Generar y mostrar las versiones modificadas del pattern
for i in range(len(pattern)):
    # Convertir el pattern en una lista de enteros
    original_pattern = [int(digit) for digit in pattern]
    modified_pattern_sum = original_pattern.copy()
    modified_pattern_rest = original_pattern.copy()

    # Sumar el magic_number al dígito en la posición i
    modified_pattern_sum[i] += magic_number

    # Restar el magic_number al dígito en la posición i
    modified_pattern_rest[i] -= magic_number

    # Verificar si todos los valores en modified_pattern_rest son no negativos
    if all(value >= 0 for value in modified_pattern_rest):
        # Formatear los resultados
        formatted_sum = [format_number(x, idx == i) for idx, x in enumerate(modified_pattern_sum)]
        formatted_rest = [format_number(x, idx == i) for idx, x in enumerate(modified_pattern_rest)]

        # Imprimir los patterns modificados
        print(' '.join(formatted_sum))
        print(' '.join(formatted_rest))

print('Gracias por utilizar la calculadora de Prechac. ¡Ahora, a entrenar!')