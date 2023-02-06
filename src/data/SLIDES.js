import image from '../assets/banner.png';

const SLIDES = [
    {
        id: 1,
        background: "#F4EFE9",
        url: image,
        text: "New Shoes",
        button: {
            url: "/",
            text: "Приобрести"
        }
    },
    {
        id: 2,
        background: "#FFF",
        url: "https://nike-off.ru/wp-content/uploads/2021/09/nike-air-force-1-low-07-what-the-NY-CT3610_100-3-scaled.jpg",
        text: "Nike Air Force 1",
        button: {
            url: "/",
            text: "Купить"
        }
    },
    {
        id: 3,
        background: "#FFF",
        url: "https://adidas-store.ru/wp-content/uploads/2020/05/adidas-yeezy-boost-350-v2-cloud-white-FW3043-scaled.jpg",
        text: "Nike Air Force 2",
        button: {
            url: "/",
            text: "Заказать"
        }
    }
];

export default SLIDES;