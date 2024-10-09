import { Product } from "../../modals/product/product";

export class MockProducts {

    public products = [
         Object.assign(new Product(), {
            id : 0,
            name: "Brigadeiro Tradicional",
            image: "https://static.itdg.com.br/images/360-240/a373f494abb2c3360b9966f5abe130e2/brigadeiro-.jpg",
            description: "Descrição do Brigadeiro Tradicional",
            price: 1.50, 
            discount: 0
        }),
        Object.assign(new Product(), {
            id : 1,
            name: "Beijinho",
            image: "https://www.receiteria.com.br/wp-content/uploads/beijinho-de-leite-ninho.jpg",
            description: "Descrição do Beijinho",
            price: 1.50, 
            discount: 0
        }),  
        Object.assign(new Product(), {
            id : 2,
            name: "Bicho de pé",
            image: "https://www.receiteria.com.br/wp-content/uploads/bicho-de-pe-doce-7.jpg",
            description: "Descrição do Bicho de pé",
            price: 2.50, 
            discount: 0
        }),  
        Object.assign(new Product(), {
            id : 3,
            name: "Doce de amendoim",
            image: "https://www.receiteria.com.br/wp-content/uploads/docinho-de-amendoim-07.jpeg",
            description: "Descrição do Doce de amendoim",
            price: 2.5, 
            discount: 0
        }),  
        Object.assign(new Product(), {
            id : 4,
            name: "Cajuzinho",
            image: "https://www.receiteria.com.br/wp-content/uploads/doce-cajuzinho.jpg",
            description: "Descrição do Cajuzinho",
            price: 2.5, 
            discount: 0
        }),  
        Object.assign(new Product(), {
            id : 5,
            name: "Brigadeiro Trufado de Leite ninho",
            image: "https://www.receiteria.com.br/wp-content/uploads/brigadeiro-trufado-de-leite-ninho-rotated.jpeg",
            description: "Descrição do Brigadeiro Trufado de Leite ninho",
            price: 2.5, 
            discount: 0
        }),  
        Object.assign(new Product(), {
            id : 6,
            name: "Casadinho",
            image: "https://www.receiteria.com.br/wp-content/uploads/casadinho.jpeg",
            description: "Descrição do Casadinho",
            price: 2.5, 
            discount: 0
        }),  
    ];

}
