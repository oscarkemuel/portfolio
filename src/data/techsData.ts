import { AiFillAndroid } from 'react-icons/ai'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiAdonisjs } from 'react-icons/si'

export const techsData = [
    {
        cardColor: "#EA7601",
        icon: FaHtml5,
        title: "HTML5",
        attributes: ["SEO", "Tags", "Atributos"]
    },
    {
        cardColor: "#2760E5",
        icon: FaCss3,
        title: "CSS3",
        attributes: ["Flexbox", "Grid", "Seletores", "pré-processadores"]
    },
    {
        cardColor: "#EAD41C",
        icon: FaJs,
        title: "Javascript",
        attributes: ["ES6", "Manipulação da DOM", "Consumo de API REST", "Async"]
    },
    {
        cardColor: "#00aeff",
        icon: FaReact,
        title: "ReactJS",
        attributes: ["Hooks", "Context", "Compon. Funcional", "Autenticação"]
    },
    {
        cardColor: "#00aeff",
        icon: AiFillAndroid,
        title: "React native",
        attributes: ["Expo CLI", "RN CLI", "Compon. Funcional", "Autenticação"]
    },
    {
        cardColor: "var(--red)",
        icon: SiAdonisjs,
        title: "AdonisJS (básico)",
        attributes: ["Rotas", "Controllers", "Autenticação", "Lucid ORM"]
    },
]