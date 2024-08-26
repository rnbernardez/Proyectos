#Declaración de variables
age = 20
price = 19.95
fist_name = "Juancito"
is_online = True

first_name = "Juan"
last_name = "Perez"
age = 20
new_patient = True

#Ejemplo de programa

name = input("Cuál es tu nombre? ")
print("Hola " + name)

birth_year = input("En qué año naciste? ")
age = 2024 - int(birth_year)
print("Tienes " + str(age) + " años.")

honesty = input("Es esto cierto? S/N ")
if honesty == "S" :
    print("Gracias por ser honesto.")
elif honesty == "N" : #elif simplifica la creacion de un nuevo else:if
    print("Hay que repasar un poquito matemática me parece.")
else:print("No escriba boludeces, por favor.")