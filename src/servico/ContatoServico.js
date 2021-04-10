import Vue from "vue";
class ContatoServico {
    Obter(id) {
        return Vue.prototype.$http({
            url: "contato/obter/" + id,
            method: "GET"
        });
    }

    ObterGrid(pagina, referenciaId) {
        return Vue.prototype.$http({
            url:
                "contato/obter-grid/" +
                referenciaId +
                "/" +
                pagina,
            method: "GET"
        });
    }

    Remover(id) {
        return Vue.prototype.$http({
            url: "contato/remover/" + id,
            method: "DELETE"
        });
    }

    Novo(viewModel) {
        return Vue.prototype.$http({
            url: "contato/novo",
            data: viewModel,
            method: "POST"
        });
    }

    Editar(viewModel) {
        return Vue.prototype.$http({
            url: "contato/editar",
            data: viewModel,
            method: "PUT"
        });
    }

};

export default new ContatoServico();