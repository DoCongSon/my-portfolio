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
import iconFreelancer from '../assets/images/freelancer.png'
import iconOceanTech from '../assets/images/ocean-tech.jpg'
import Comic from '../assets/images/super-comic.png'


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
        logo: iconFreelancer,
        title: {
            vn: 'Freelancer',
            en: 'Freelancer'
        },
        description: {
            vn: 'Tôi đã tối ưu hóa các truy vấn cơ sở dữ liệu để giảm thời gian phản hồi của backend, mang lại trải nghiệm người dùng mượt mà hơn. Việc tham gia vào quá trình đánh giá mã nguồn đã giúp cung cấp phản hồi có giá trị, giảm thiểu lỗi và nâng cao chất lượng mã. Tôi cũng đóng góp vào việc phát triển hệ thống tài liệu toàn diện cho mã nguồn, cải thiện quá trình giới thiệu cho các thành viên mới. Ngoài ra, tôi đã hợp tác với nhóm UX/UI để tối ưu hóa giao diện người dùng, dẫn đến việc tăng sự hài lòng của người dùng. Hơn nữa, tôi đã phát triển và triển khai các tính năng mới, nâng cao chức năng tổng thể của sản phẩm.',
            en: 'I optimized database queries to reduce backend response times, resulting in a smoother user experience. My participation in code reviews provided valuable feedback, leading to a reduction in bugs and enhanced code quality. I also contributed to developing a comprehensive documentation system for the codebase, improving onboarding for new team members. Additionally, I collaborated with the UX/UI team to optimize the user interface, leading to increased user satisfaction. Furthermore, I developed and implemented new features, enhancing the overall functionality of the product.'
        },
        time: {
            vn: 'Tháng 1/2024 - Hiện tại',
            en: 'January 2024 - Present'
        }
    },
    {
        logo: iconOceanTech,
        title: {
            vn: 'Thực tập sinh tại Ocean Tech',
            en: 'Intern at Ocean Tech'
        },
        description: {
            vn: 'Hỗ trợ di chuyển mã nguồn cũ sang các framework mới, cải thiện khả năng bảo trì và tính ổn định của mã nguồn đồng thời giảm thiểu lỗi kỹ thuật. Triển khai kiến trúc CSS theo phương pháp BEM, giúp giảm kích thước tệp CSS và đơn giản hóa việc bảo trì cho các nhà phát triển tương lai. Ngoài ra, đã nghiên cứu và phát triển các tính năng mới, dẫn đến việc tăng cường sự tương tác của người dùng.',
            en: 'Assisted in migrating legacy code to newer frameworks, improving maintainability and codebase stability while reducing technical debt. Implemented a modular and scalable CSS architecture using the BEM methodology, which minimized CSS file size and simplified maintenance for future developers. Additionally, developed and launched new frontend features, leading to increased user engagement.'
        },
        time: {
            vn: 'Tháng 10/2023 - Tháng 12/2023',
            en: 'October 2023 - December 2023'
        }
    },
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
        name: 'Comics Website',
        thumbnail: Comic,
        link: 'https://supercomic.vercel.app/'
    },
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