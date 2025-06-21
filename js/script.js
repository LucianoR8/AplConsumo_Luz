function calcularConta(){
    const consumo = parseFloat(document.getElementById('consumo').value);
    const bandeira = parseFloat(document.getElementById('bandeira').value);

    const tarifa = 0.636;
    const valorEnergia = consumo * tarifa;

    const valorBandeira = consumo * bandeira;

    const icms = 0.18 * valorEnergia;
    const pis = 0.0165 * valorEnergia;
    const confis = 0.076 * valorEnergia;
    const ece = 0.0035 * consumo;
    const cosip = 9.51;

    const valorTotal = valorEnergia + valorBandeira + icms + pis + confis + ece + cosip;

    document.getElementById('boleto').innerHTML = `
    <h2>Boleto<h2>
    <p>Valor da energia: ${valorEnergia.toFixed(2)}<p>
    <p>Valor acrescentado da bandeira tarifária: ${valorBandeira.toFixed(2)}<p>
    <p>ICMS: ${icms.toFixed(2)}<p>
    <p>PIS: ${pis.toFixed(2)}<p>
    <p>CONFIS: ${confis.toFixed(2)}<p>
    <p>ECE: ${ece.toFixed(2)}<p>
    <p>COSIP: ${cosip.toFixed(2)}<p>
    <p>Valor total: R$${valorTotal.toFixed(2)}<p>`
}

document.querySelector('.btn').addEventListener('click', calcularConta);




