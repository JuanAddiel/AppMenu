export const convertirNumeros = (numero:number)=>{
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (numero === 0) return 'cero';

    let resultado = '';

    if (numero >= 100) {
        const centena = Math.floor(numero / 100);
        resultado += centenas[centena] + ' ';
        numero %= 100;
    }

    if (numero >= 20) {
        const decena = Math.floor(numero / 10);
        resultado += decenas[decena] + ' ';
        numero %= 10;
    } else if (numero >= 10) {
        resultado += especiales[numero - 10] + ' ';
        numero = 0;
    }

    if (numero > 0) {
        resultado += unidades[numero] + ' ';
    }

    return resultado.trim();
}