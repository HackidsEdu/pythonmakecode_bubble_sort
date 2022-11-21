# Imports go at the top
from microbit import *

# Code in a 'while True:' loop repeats forever
vEnd = True
while vEnd:
    i = 0
    j = 0
    k = 0
    listastring = ""
    lista = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print("--->Processamento<---")
    while i < len(lista) - 1:
        print("-")
        print(lista)
        basic.pause(200)
        j = 0
        while j < len(lista) - 1 - i:
            if lista[j] > lista[j + 1]:
                temp = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = temp
            j = j + 1
            print("--")
            print(lista)
            basic.pause(200)
        i = i + 1

    #Cria e Imprime String no display
    while k < len(lista):
        listastring = listastring + str(lista[k])+"-"
        k += 1
    print(listastring)
    basic.show_string(listastring)
    vEnd = False
    