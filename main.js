/*Vue.component('anadir', {
    template: `<input>`
});



Vue.component('nota', {
    props: ['texto', 'prioridad'],
    template: `
    <div>
    Texto: {{texto}}
    Prioridad: {{prioridad}}
    </div>`
});*/

var app = new Vue({
    el: '#appNota',
    data: {

        notas:[
            { texto: "Entrenar", prioridad: "Alta" },
            { texto: "Programar", prioridad: "Baja" }
        ],

        nota: '',
        lista: []

    },

    methods:
    {
        anadir: function () {
            this.lista.push({ note: this.nota, completado: false })
            this.nota = "";
        },

        borrar: function () {
            for (let i = 0; i <= this.lista.length - 1; i++) {
                if (this.lista[i].completado) {
                    this.lista.splice(i, 1);
                }
            }
        }
    },

    computed:
    {
        pendientes: function () {
            let contador = 0;
            for (let i = 0; i <= this.lista.length - 1; i++) {
                if (this.lista[i].completado == false) {
                    contador++;
                }
            }
            return contador;
        },

        listaOrdenada: function () {
            function compare(a, b) {
                if (a.note < b.note)
                    return -1;
                if (a.note > b.note)
                    return 1;
                return 0;
            }
            return this.lista.sort(compare);
        }
    }
})

