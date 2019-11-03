var conteudo = document.querySelector('#listaFatos')


function trazer() {
    desabilitarBotao ()
    selecaoFatosVisivel()
    var valor = Number(selecaoFatos())
    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${valor}`)
    .then(res => res.json())
    .then(dados => {
        cabTabVisivel()
        tabela(dados).sort()
         
      
    }) 
}
function desabilitarBotao () {
    var obj = document.querySelector('#botao')
    obj.setAttribute("disabled", "disabled");
}
function habilitarBotao () {
    var obj = document.querySelector('#botao')
    obj.removeAttribute("disabled");
}
function cabTabVisivel () {
    var obj=document.getElementById('cabecalhoFatos');
    obj.removeAttribute("style");
}
function selecaoFatosVisivel () {
    var obj=document.getElementById('selecaoFatos');
    obj.removeAttribute("style");
}
function tabela(dados) {
    conteudo.innerHTML = ''
    for(let valor of dados) {
        conteudo.innerHTML += `
            <tr id ="tr">
                <td id = "_id"scope="row">${valor._id}</td>
                <td id = "text">${valor.text}</td>
                <td id = "valor">${valor.type}</td>
                <td><button id="atualizar" type="button" class="btn btn-link" onclick="atualizar()")>Excluir</button></td>
            </tr>
        `
    }
    habilitarBotao()
}
function selecaoFatos(valor) {
    var valor = Number(document.getElementById('nunFatos').value)
    return valor
     
}
// Função não usada, apresenta problema de CORS que não consegui resolver, impossibilitando a conclusão do botão atualizar, para não ficar sem implementei até faze de exclusão do elemento.
function trazerNovoFato() {
    var fact_ID = document.getElementById('_id').textContent
    console.log(fact_ID)
    fetch(`https://cat-fact.herokuapp.com/facts/${fact_ID}`, {mode: "no-cors"})
    .then(res => res.text())
    .then(dados => {
        console.log(dados)
        
    }) 
    
}
// Objetivo dessa função era implementação do Bonus Master, porém tive problema com CORB e CORS, não consegui sana-los, então implementei uma rotina para exclusão
function atualizar () {
    var obj=document.getElementById('tr');
    obj.nextElementSibling.remove()
    var _id = document.getElementById('_id').textContent;
    //console.log(obj);
    console.log(_id)
    //console.log(trazerNovoFato())
}