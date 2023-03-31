"use strict";
const inputEmail = document.getElementById('inputEmail');
const inputSenha = document.getElementById('inputSenha');
const dadoEmail = [];
const dadoSenha = [];
let dadosEmail = '';
let dadosSenha = '';
const verificacaoDados = () => {
    if (dadoSenha.includes(dadosSenha, 0) && dadoEmail.includes(dadosEmail)) {
        alert('Sucesso ');
    }
    else {
        alert('Dados não cadastrados');
    }
};
console.log(dadoEmail);
