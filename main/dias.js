//Vetor de string puramente para exibição do eixo x
// dias[length - 1] = dia atual
let dias = []

//Preenchimento inicial
let diaAtual = new Date()
dias.push(diaAtual.getDate() + '/' + (diaAtual.getMonth()+1) + '/' + diaAtual.getFullYear())


//Loop para verificação constante do dia atual. Deve ser modificado a condição na hora de implementar para transformar isso
//numa função que é chamada caso ocorra algum determinado evento (por exemplo chamar a função verificarDia cada vez que a página recarregar)
while(true) {
        let diaDeControle = new Date()
        if(diaDeControle.getDate() != diaAtual.getDate() || diaDeControle.getMonth() != diaAtual.getMonth() || diaDeControle.getFullYear() != diaAtual.getFullYear()) {
            dias.push(diaDeControle.getDate() + '/' + (diaDeControle.getMonth()+1) + '/' + diaDeControle.getFullYear())
            diaAtual = diaDeControle
        }
}

//Valores recebidos do input da página. Devem ter 2, 2, 4 dígitos respectivamente, e precisam ser string
let diaSelecionado
let mesSelecionado
let anoSelecionado

//Vetor que terá apenas 5 posições, cada uma sendo um dia. O dia selecionado ficará em labelX[2] (meio do vetor)
//Assim, quando um dia for selecionado para mudar a visualização do gráfico, serão exibidos 2 dias antes do dia selecionado,
//o dia selecionado, e dois dias depois do dia selecionado
let labelX = []

//Achando o dia selecionado no vetor dias
index = dias.indexOf(diaSelecionado + '/' + mesSelecionado + '/' + anoSelecionado)

//Preenchendo labelX
labelX[0] = dias[index - 2]
labelX[1] = dias[index - 1]
labelX[2] = dias[index]
labelX[3] = dias[index + 1]
labelX[4] = dias[index + 2]