function compras(trabalho1, trabalho2) {
    const comprarSorvet = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const compraTv32 - !!(trabalho1 ^ trabalho2) //bitwise xor
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvet //operador unário
    return {comprarSorvet, comprarTv50, compraTv32, manterSaudavel}
}


console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))