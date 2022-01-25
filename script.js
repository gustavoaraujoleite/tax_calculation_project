let results = {
    name:'',
    grossValue: 0,
    imposto: 0,
    esll: 0,
    pis: 0,
    cofins: 0,
}

let calculate = document.querySelector('.calculate');
let areaInput = document.querySelector('.area_input');
let areaInfo = document.querySelector('.area_info');
let informations = document.querySelector('.informations');
let name = document.querySelector('name_input');
let reset = document.querySelector('.reset');


calculate.addEventListener('click',()=> {
   
    areaInput.classList.add('area--click');
    areaInfo.classList.add('reveal-results');


    let nameInput = document.querySelector('.name_input').value;
    let valueInput = document.querySelector('.value_input').value;
    
    results.name = nameInput;
    results.grossValue = Number(valueInput)
    results.imposto = Number(results.grossValue * 0.015);
    results.esll = Number(results.grossValue * 0.01);
    results.pis = Number(results.grossValue * 0.0065);
    results.cofins = Number(results.grossValue * 0.03);
    


    for(let i=0;i <= 7; i++){
        let span = informations.appendChild(document.createElement('div'));
        span.classList.add(`span_${i}`)
    }
    
    let span_name = document.querySelector('.span_0');
    span_name.innerHTML = `Nome <span>Name</span>= ${nameInput} `;

    let imposto = document.querySelector('.span_1');
    imposto.innerHTML = `IR = ${results.imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

    let esll = document.querySelector('.span_2');
    esll.innerHTML = `ELSS = ${results.esll.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

    let pis = document.querySelector('.span_3');
    pis.innerHTML = `Pis = ${results.pis.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

    let cofins = document.querySelector('.span_4');
    cofins.innerHTML = `Cofins = ${results.cofins.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

    let grossValue = document.querySelector('.span_5');
    grossValue.innerHTML = `Valor Bruto <span>Gross Value</span> = ${results.grossValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

    let sum = results.imposto + results.esll + results.pis + results.cofins;

    let taxTotal = document.querySelector('.span_6');
    taxTotal.innerHTML = `Impostos Total <span>Tax Amount</span> = ${sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

    let netValue = document.querySelector('.span_7');
    netValue.innerHTML = `Valor Líquido <span>Net value</span> = ${(results.grossValue - sum).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

    calculate.style.display = 'none';
    clear()
}) 

reset.addEventListener('click', ()=> {
    areaInput.classList.remove('area--click');
    areaInfo.classList.remove('reveal-results');

    informations.innerHTML = '';
    calculate.style.display = '';
    clear()

})

function clear() {
    document.querySelector('.name_input').value = '';
    document.querySelector('.value_input').value = '';
}