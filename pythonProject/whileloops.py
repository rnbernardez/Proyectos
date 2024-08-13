#While loops: repite un segmento de codigo
i = 1
while i <= 5: #Mientras esta funcion devuelva True, se repite el código
    print(i)
    i = i + 1

#Tenemos esta variante tambien:
x = 1
while x <= 10:
    print(x * '*') #Podemos concatenar con * un int y una str: repitirá la str tantas veces como el value del int
    x = x + 1