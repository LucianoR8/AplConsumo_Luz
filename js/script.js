function calcularConta(){
    const consumo = parseFloat(document.getElementById('consumo').value);
    const bandeira = parseFloat(document.getElementById('bandeira').value);

    const tarifa = 0.636;
    const valorEnergia = consumo * tarifa;

    const valorBandeira = consumo * bandeira;

    let icms = "";

    if(consumo <= 50){
        icms = 0;
    }else if(consumo <= 200){
        icms = 0.12 * valorEnergia;
    }else if(consumo <= 450){
        icms = 0.18 * valorEnergia;
    }else{
        icms = 0.25 * valorEnergia;
    }

    const pis = 0.0078 * valorEnergia;
    const confis = 0.0362 * valorEnergia;
    const cosip = 7.97;

    const valorTotal = valorEnergia + valorBandeira + icms + pis + confis + cosip;

    const boleto = document.querySelector(".boleto-consumo");
    boleto.style.display = "flex";
    boleto.innerHTML = `
    <h2 class="txt-boleto">Boleto</h2>
    <p class="txt-valor">Energia: R$${valorEnergia.toFixed(2)}</p>
    <p class="txt-valor">Bandeira tarifária: R$${valorBandeira.toFixed(2)}</p>
    <p class="txt-valor">ICMS: R$${icms.toFixed(2)}</p>
    <p class="txt-valor">PIS: R$${pis.toFixed(2)}</p>
    <p class="txt-valor">CONFIS: R$${confis.toFixed(2)}</p>
    <p class="txt-valor">COSIP: R$${cosip.toFixed(2)}</p>
    <p class="txt-valor">Total: R$${valorTotal.toFixed(2)}</p>`
}

document.querySelector('.btn').addEventListener('click', calcularConta);




