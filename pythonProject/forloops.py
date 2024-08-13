numbers = [1,2,3,4,5]
for item in numbers: #Esto nos permite iterar por todos los elementos de la lista, pero cada elementos tendrá un valor específico cada vez. El 1ro será 1, el 2do serña 2,etc...
    print(item)
#Podría hacerse con un while loop, pero es un código mas ineficiente:
i = 0
while i < len(numbers):
    print(numbers[i])
    i = i + 1