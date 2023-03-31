const inputEmail = document.getElementById('inputEmail')
const inputSenha = document.getElementById('inputSenha')
const dadoEmail:string[] = []
const dadoSenha:string[] = []
let dadosEmail:string = ''
let dadosSenha:string = ''
const verificacaoDados = () =>{
    if(dadoSenha.includes(dadosSenha,0) && dadoEmail.includes(dadosEmail)){
        alert('Sucesso ')
    }else{
        alert('Dados não cadastrados')
    }
}
console.log(dadoEmail)