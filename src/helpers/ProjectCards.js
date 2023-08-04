import enrollment from '../../public/Enrollment System.png'
import ecommerce from '../../public/Ecommerce.png'
import matrix from '../../public/Matrix.png'
import phoneEcommerce from '../../public/phoneEcommerce.png'
import tabletEcommerce from '../../public/tabletEcommerce.png'
import DesktopAiChatbot from '../../public/DesktopAIChatbot.png'
import phoneAiChatbot from '../../public/phoneAiChatbot.png'
import tabletAiChatbot from '../../public/tabletAiChatbot.png'

const ProjectCards = [
    {
        id: 0, name: 'Ecommerce',
        url: 'https://moon-delivery.vercel.app',
        desktop: ecommerce,
        phone: phoneEcommerce,
        tablet: tabletEcommerce,
        desc: 'E-commerce website developed using MERN stack with different features including Rider and Seller web Application. This web Application also offers booking and other services like specifying the items the customer want the rider to buy in specific merchandise or store. I developed this for the students of Bachelor of Science in Business Administration in IFSU Lagawe for their business proposal.'
    },
    {
        id: 1, name: 'Enrollment',
        url: 'https://aaron-projects-enrollment-system-docs.vercel.app',
        desktop: enrollment,
        phone: '',
        tablet: '',
        desc: 'Enrollment system developed using C# with different features including SMS integration and and support to printing hard copies of grades and other school credentials. This is my capstone project. The Application only supports Desktop.'
    },
    // {
    //     id: 2, name: 'Matrix',
    //     url: 'https://moon-delivery.vercel.app',
    //     desktop: matrix,
    //     phone: '',
    //     tablet: '',
    //     desc: 'Grantee Information Matrix System. Developed using C# with different features including easy access of student files and support to printing hard copies of credentials. I developed this furing my OJT. The Application only supports Desktop.'
    // },
    {
        id: 3, name: 'Ai Chatbot',
        url: 'https://aaron-projects-ai-chatbot.vercel.app',
        desktop: DesktopAiChatbot,
        phone: phoneAiChatbot,
        tablet: tabletAiChatbot,
        desc: 'This is developed using Next Js and OpenAi Api version 3.5. The website provides example of correct prompts and response to get the correct or desired output. Feel free to experiment ai chatbot prompts here.'
    },
]

export default ProjectCards;
