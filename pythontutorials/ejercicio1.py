weight = input("Cual es tu peso? ")
unit = input("(L)ibras o (K)ilos?")

if unit.upper() == "L":  #Usamos el method .upper para que, si la escriban en minuscula, nos llegue igualmente en mayuscula
    converted = float(weight) / 2.20
    print("Tu peso en kilos es " + str(converted) + " kg.")
elif unit.upper() == "K":
    converted = float(weight) * 2.20
    print("Tu peso en libras es " + str(converted) + " lbs.")
else:
    print("Unidad de medida incorrecta. Inténtelo nuevamente.")