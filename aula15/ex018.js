let valores = [5, 8, 2, 9, 3] //declarando vetor
valores.push(1)//add valor
valores.sort()//organisando os numeros em ordem
for(let pos= 0 ; pos < valores.length ; pos++){//identificando os objetos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
for(let pos in valores){//forma simplificada do for
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let pos = valores.indexOf(1)//busca de objetos dentro do vetor
console.log(pos)