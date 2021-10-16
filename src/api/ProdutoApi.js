class ProdutoApi {

    produtos = [
        { "codigo": 1, "nome": "New World", "preco": 75.00, "urlImagem": "https://s2.glbimg.com/WqEfmZv6rMnm32x75ABz5d3kOYc=/0x0:3840x2160/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/5/H/jSobTRTBScuiqf472Psg/keyartmask-3840.jpg", "avaliacao": 4 },
        { "codigo": 2, "nome": "World Of Warcraft", "preco": 120.50, "urlImagem": "https://img.elo7.com.br/product/main/1D0A5EF/poster-world-of-warcraft-battle-for-azeroth-tamanho-90x-0-cm-cartaz.jpg", "avaliacao": 5 },
        { "codigo": 3, "nome": "League Of Legends", "preco": 0.0, "avaliacao": 5},
        { "codigo": 4, "nome": "Fifa 2022", "preco": 259.9, "urlImagem": "https://s2.glbimg.com/cHRkujsOyXsMmwQTTQFdBQHAQL0=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/4/z/AqfvaPQfmR39ON8WQ31g/eas-fifa22-gen4-se-crop-1080x1350.png", "avaliacao": 3 }
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