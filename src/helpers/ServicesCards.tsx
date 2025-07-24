import { StaticImageData } from 'next/image';
import enrollment from '../../public/Enrollment System.png'
import ecommerce from '../../public/Ecommerce.png'
import matrix from '../../public/Matrix.png'
import phoneEcommerce from '../../public/phoneEcommerce.png'
import tabletEcommerce from '../../public/tabletEcommerce.png'
import DesktopAiChatbot from '../../public/DesktopAIChatbot.png'
import phoneAiChatbot from '../../public/phoneAiChatbot.png'
import tabletAiChatbot from '../../public/tabletAiChatbot.png'

interface ServiceCard {
    id: number;
    name: string;
    desktop: StaticImageData;
    phone: StaticImageData | string;
    tablet: StaticImageData | string;
    desc: string;
}

const ServicesCards: ServiceCard[] = [
    {
        id: 0, name: 'Web Development',
        desktop: ecommerce,
        phone: phoneEcommerce,
        tablet: tabletEcommerce,
        desc: 'Websites including static and dynamic websites that meets your needs. Price starts as low as $30.00'
    },
    {
        id: 1, name: 'Mobile Applications',
        desktop: enrollment,
        phone: '',
        tablet: '',
        desc: 'Mobile applications including IOS application and Android applications. This is perfect to offer to your potential clients or customers that they can use to ease their efforts in engaging to your business.'
    },
    {
        id: 2, name: 'Technical and application support',
        desktop: DesktopAiChatbot,
        phone: phoneAiChatbot,
        tablet: tabletAiChatbot,
        desc: 'Customer support. As a computer and cellphone technician, I am equiped with different skills in troubleshooting faulty devices. I can assist you with your needs for your tech including Laptop, desktop, printers and hand held devices.'
    },
]

export default ServicesCards;
