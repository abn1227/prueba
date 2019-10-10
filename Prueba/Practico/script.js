$(document).ready(function () {
    $("#slcCategoria").val("0");
    $("#slcProducto").val("0");
    $("#slcMarca").val("0");
    cargarChart();
});

function cargarProductos() {
    categoria = $('#slcCategoria').val();

    if (categoria == 0) {
        document.getElementById('slcProducto').innerHTML = '<option value="0">Cereal</option><option value="1">Fruta</option>';
        document.getElementById('slcMarca').innerHTML = '<option value="0">Cereal 1</option><option value="1">Cereal 2</option><option value="1">Cereal 3</option>';
    } else {
        document.getElementById('slcProducto').innerHTML = '<option value="0">Pantalon</option><option value="1">Camisa</option>';
        document.getElementById('slcMarca').innerHTML = '<option value="0">Pantalon 1</option><option value="1">Pantalon 2</option><option value="1">Pantalon 3</option>';
    }

    cargarChart();
}

function cargarMarcas() {
    categoria = $('#slcCategoria').val();
    producto = $('#slcProducto').val();

    if (categoria == 0) {
        if (producto == 0) {
            document.getElementById('slcMarca').innerHTML = '<option value="0">Cereal 1</option><option value="1">Cereal 2</option><option value="1">Cereal 3</option>';
        } else {
            document.getElementById('slcMarca').innerHTML = '<option value="0">Fruta 1</option><option value="1">Fruta 2</option><option value="1">Fruta 3</option>';
        }
    } else {
        if (producto == 0) {
            document.getElementById('slcMarca').innerHTML = '<option value="0">Pantalon 1</option><option value="1">Pantalon 2</option><option value="1">Pantalon 3</option>';
        } else {
            document.getElementById('slcMarca').innerHTML = '<option value="0">Camisa 1</option><option value="1">Camisa 2</option><option value="1">Camisa 3</option>';
        }
    }

    cargarChart();
}

function cargarChart() {
    categoria = $('#slcCategoria').val();
    producto = $('#slcProducto').val();
    marca = $('#slcMarca').val();

    $('#resultados').html('<canvas id="myChart" width="800" height="300"></canvas>');

    if (categoria == 0) {
        if (producto == 0) {
            if (marca == 0) {
                datos = [12, 19, 3, 5];
            } else if (marca == 1) {
                datos = [1, 20, 15, 9];
            } else {
                datos = [2, 9, 13, 15];
            }
        } else {
            if (marca == 0) {
                datos = [16, 8, 13, 1];
            } else if (marca == 1) {
                datos = [21, 19, 1, 15];
            } else {
                datos = [22, 9, 15, 19];
            }
        }
    } else {
        if (producto == 0) {
            if (marca == 0) {
                datos = [2, 0, 1, 5];
            } else if (marca == 1) {
                datos = [7, 8, 3, 1];
            } else {
                datos = [21, 18, 20, 12];
            }
        } else {
            if (marca == 0) {
                datos = [1, 3, 9, 15];
            } else if (marca == 1) {
                datos = [2, 3, 4, 5];
            } else {
                datos = [6, 7, 8, 10];
            }
        }
    }
    var Datos = {
        labels: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril'
        ],

        datasets: [
            {
                label: 'My First dataset',
                fillColor: 'rgba(95, 161, 161, 0.5)',
                strokeColor: 'rgba(95, 161, 161, 0.7)',
                highlightFill: 'rgba(73,206,180,0.6)',
                highlightStroke: 'rgba(66,196,157,0.7)',
                data: datos
            }
        ],

        options: {
            responsive : true,
            
            title: {
                display: true,
                text: 'Ventas por mes'
            }
        }
    }
    var contexto = document.getElementById('myChart').getContext('2d');

    chart = new Chart(contexto).Bar(Datos);
}