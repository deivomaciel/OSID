import DulceCafe from '../assets/dulce_cafe.png'
import Osid from '../assets/osid.png'
import DulceNatura from '../assets/dulce_natura.png'
import DulceSabor from '../assets/dulce_sabor.png'
import Doacao  from '../assets/doacao.jpeg'
import Produto1 from '../assets/produto1.png'
import Produto2 from '../assets/product2.jpeg'
import Produto3 from '../assets/produto3.png'
import Produto4 from '../assets/produto4.png'
import Produto5 from '../assets/produto5.png'
import Produto6 from '../assets/produto6.png'
import Produto7 from '../assets/produto7.jpeg'
import Produto8 from '../assets/produto8.jpeg'

const lojas = [
    {
        name: 'Dulce Café',
        image: DulceCafe,
        products: [
            {   value: 30,
                photo: Produto1,
                product: 'Torta de chocolate',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {   value: 8,
                photo: Produto2,
                product: 'Capuccino',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    },
    {
        name: 'Loja Irmã Dulce',
        image: Osid,
        products: [
            {   value: 10,
                photo: Produto3,
                product: 'Chaveiro Dulce',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {   value: 43,
                photo: Produto4,
                product: 'Caneca Coração',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    },
    {
        name: 'Dulce Natura',
        image: DulceNatura,
        products: [
            {   value: 13,
                photo: Produto5,
                product: 'Panetone',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {   value: 8,
                photo: Produto6,
                product: 'Pão Hamburguer',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    },
    {
        name: 'Dulce Sabor',
        image: DulceSabor,
        products: [
            {   value: 12,
                photo: Produto7,
                product: 'Coockie',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {   value: 10,
                photo: Produto8,
                product: 'Broa',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    },
    {
        name: 'Doações',
        image: Doacao,
        donations: [
            {   value: 12,
                photo: Produto7,
                product: 'Coockie',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {   value: 10,
                photo: Produto8,
                product: 'Broa',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ]
    },
]

export default lojas