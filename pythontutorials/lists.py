#Tenemos tres tipos de datas  simples: Numeros (interger y floats), texto (strings) y booleans (true o false)
#Hay tambien tipos complejos de data. Uno son las listas. Se declaran con []

names = ["Juan", "Pedro", "Lucas", "Jesus", "Judas"]
print(names)
print(names[0]) #Asi buscará el elemento indexado con el value que demos. El 1r obj de una lista se indexa como 0
print(names[-1]) #-1 refiere al último elemento de la lista, -2 al anteúltimo, etc...
names[0] = "Pablo" #Podemos tratar como una variante a un elemento de la lista
print(names[0:3]) #Imprime desde un elemento hasta otro

#Methods para listas:

numbers = [1,2,3,4,5]
numbers.append(6) #Añade algo al final de la lista
numbers.insert(0,0) #Añade algo en algun lugar especifico de la lista
numbers.remove(4) #Remueve un value escrito si aparece en la lista. Para borrar toda la lista, se usa el method .clear()
print(1 in numbers) #Busca el value esccrito dentro de la lista. Devuelve un true/flase booleano
print(len(numbers)) #La funcion len nos devuelve la cantidad de elementos que haya dentro de una lista