let i: number;
let j: number;
let k: number;
let listastring: string;
let lista: number[];
let temp: number;
//  Imports go at the top
//  Code in a 'while True:' loop repeats forever
let vEnd = true
while (vEnd) {
    i = 0
    j = 0
    k = 0
    listastring = ""
    lista = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    console.log("--->Processamento<---")
    while (i < lista.length - 1) {
        console.log("-")
        console.log(lista)
        basic.pause(200)
        j = 0
        while (j < lista.length - 1 - i) {
            if (lista[j] > lista[j + 1]) {
                temp = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = temp
            }
            
            j = j + 1
            console.log("--")
            console.log(lista)
            basic.pause(200)
        }
        i = i + 1
    }
    // Cria e Imprime String no display
    while (k < lista.length) {
        listastring = listastring + ("" + lista[k]) + "-"
        k += 1
    }
    console.log(listastring)
    basic.showString(listastring)
    vEnd = false
}
