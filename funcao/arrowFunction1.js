let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2* a // return esta implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'ola' // possui um param
console.log(ola())