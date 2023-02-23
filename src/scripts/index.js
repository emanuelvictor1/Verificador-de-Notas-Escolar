var bimestre1 = document.getElementById('bimestre-1')
var bimestre2 = document.getElementById('bimestre-2')
var bimestre3 = document.getElementById('bimestre-3')
var bimestre4 = document.getElementById('bimestre-4')
var mediaEscolar = document.getElementById("media-escolar")
var mediaFinal = document.getElementById('media-final')
var spanMedia = document.getElementById('span-media-escolar')
var statusAluno = document.getElementById('status-aluno')
var aprovar = document.getElementById('p-aprovar')

function validacao() {
    //Verificando os valores dos inputs
    var bi1 = Number(bimestre1.value)
    var bi2 = Number(bimestre2.value)
    var bi3 = Number(bimestre3.value)
    var bi4 = Number(bimestre4.value)
    var medE = Number(mediaEscolar.value)

    //Validando se os inputs estão vazios
    if (bi1 == '' | bi2 == '' | bi3 == '' || bi4 == '' || medE == '') {
        alert('Não pode haver campos vazios')
    } else {
        verificar()
    }
    
}
function verificar() {
    var bi1 = Number(bimestre1.value)
    var bi2 = Number(bimestre2.value)
    var bi3 = Number(bimestre3.value)
    var bi4 = Number(bimestre4.value)
    var medE = Number(mediaEscolar.value)
    //calculando a media 
    var calc = (bi1 + bi2 + bi3 + bi4) / 4
    //calculando quanto oserá preciso para ser aprovado
    var calc_ap_2 = calc - medE
    
    //mostrando na tela
    mediaFinal.innerHTML = `${calc.toFixed(1)}`
    //nao esta mostrando a media escolar!!!
    spanMedia.innerHTML = `${medE}`
    
    //verificando se esta aprovado ou reprovado
    if (calc >= medE) {
        statusAluno.style.color = `green`
        statusAluno.innerHTML = `Aprovado`
        aprovar.innerHTML = `indefinido`
    } else if(calc < medE){
        statusAluno.style.color = `red`
        statusAluno.innerHTML = `Reprovado`
        aprovar.innerHTML = `${calc_ap_2.toFixed(1)}` 
          
        
        
    }   
    

}