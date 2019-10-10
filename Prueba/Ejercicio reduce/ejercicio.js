function fx(parametro) {
    var arreglo = parametro.reduce(function (a, b) {
        return a + ' ' + b;
    });

    console.log(arreglo);

    return arreglo;
}