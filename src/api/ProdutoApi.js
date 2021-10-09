class ProdutoApi {

    produtos = [
        { "codigo": 1, "nome": "New World" },
        { "codigo": 2, "nome": "World Of Warcraft" },
        { "codigo": 3, "nome": "League Of Legends" },
        { "codigo": 4, "nome": "Fifa 2022" },
    ]

    getAll() {
        let promise = new Promise((resolve) => {
            // código de buscar na API 
            resolve(this.produtos);
        });

        return promise;
    }
}

export default ProdutoApi;