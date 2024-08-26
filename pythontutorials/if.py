temperature = input("Cuantos grados hace hoy? ")

if int(temperature) > 30:
    print("Hace un calor bárbaro")
    print("Tomá agüita")
elif int(temperature) >25: #elif simplifica la creacion de un nuevo else:if
    print("Un día hermoso, verdad?")
elif int(temperature) >10:
    print("No te olvides de agarrar una camperita!")
else:
    print("Hace un frio de cagarse")