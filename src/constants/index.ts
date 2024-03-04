import iconReact from '../assets/images/icon-react.svg'
import iconHtml from '../assets/images/icon-html.svg'
import iconCss from '../assets/images/icon-css.svg'
import iconVue from '../assets/images/icon-vue.svg'
import iconJs from '../assets/images/icon-javascript.svg'
import iconTs from '../assets/images/icon-typescript.svg'
import iconFirebse from '../assets/images/icon-firebase.svg'
import iconGithub from '../assets/images/icon-github.svg'
import iconTailwind from '../assets/images/icon-tailwind-css.svg'
import iconFigma from '../assets/images/icon-figma.svg'
import iconSamsung from '../assets/images/icon-samsung.svg'
import ECommerce from '../assets/images/e-commerce.png'
import Pokemon from '../assets/images/pokemon-game.png'


interface ExpensiveItem {
    image: string,
    link: string
}

interface WorkItem {
    logo: string,
    title: {
        vn: string,
        en: string,
    },
    description: {
        vn: string,
        en: string,

    },
    time: {
        vn: string,
        en: string,
    },
}

interface ProjectItem {
    thumbnail: string,
    name: string,
    link: string,
}

const expentsiveLists: ExpensiveItem[] = [
    {
        image: iconHtml,
        link: 'https://www.w3schools.com/html/'
    },
    {
        image: iconCss,
        link: 'https://www.w3schools.com/css/'
    },
    {
        image: iconJs,
        link: 'https://www.w3schools.com/js/'
    },
    {
        image: iconTs,
        link: 'https://www.typescriptlang.org/'
    },
    {
        image: iconReact,
        link: 'https://react.dev/'
    },
    {
        image: iconVue,
        link: 'https://vuejs.org/'
    },
    {
        image: iconTailwind,
        link: 'https://tailwindcss.com/'
    },
    {
        image: iconFirebse,
        link: 'https://firebase.google.com/'
    },
    {
        image: iconGithub,
        link: 'https://github.com/'
    },
    {
        image: iconFigma,
        link: 'https://figma.com/'
    }
]

const workLists: WorkItem[] = [
    {
        logo: iconSamsung,
        title: {
            vn: 'Thực tập sinh tại Samsung R&D Việt Nam',
            en: 'Intern at Samsung R&D Vietnam'
        },
        description: {
            vn: 'Được đào tạo về cấu trúc dữ liệu và giải thuật. Tham gia phát triển dự án nhỏ trên nền tảng Android. Tham gia bài kiểm tra năng lục lập trình Samsung Software Test Certificate.',
            en: 'Trained in data structures and algorithms. Participated in the development of mini projects on Android. Participated in the Samsung Software Test Certificate programming competition.'
        },
        time: {
            vn: 'Tháng 8/2023 - Tháng 9/2023',
            en: 'August 2023 - September 2023'
        }
    }
];

const projectLists: ProjectItem[] = [
    {
        name: 'E-Commerce Website',
        thumbnail: ECommerce,
        link: 'https://e-commerce-dcs.netlify.app/'
    },
    {
        name: 'Pokemon Memories',
        thumbnail: Pokemon,
        link: 'https://pokemon-memories-game.netlify.app/'
    }
];

export { expentsiveLists, workLists, projectLists }