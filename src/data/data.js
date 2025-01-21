export const data = {
    logo: "Lunesta",
    menu: [
        { id: 1, title: "Home", link: "/" },
        {
            id: 2,
            title: "Shop",
            link: "/shop",
            subMenu: [
                { id: 1, title: "Man", link: "/shop/man" },
                { id: 2, title: "Woman", link: "/shop/woman" }
            ]
        },
        { id: 3, title: "About", link: "/about" },
        { id: 4, title: "Blog", link: "/blog" },
        { id: 5, title: "Contact", link: "/contact" },
    ],
    actions: [
        { id: 1, type: "button", title: "Login/Register", link: "/login" },
        { id: 2, type: "icon", name: "Search", link: "#" },
        { id: 3, type: "icon", name: "ShoppingCart", link: "/cart" },
        { id: 4, type: "icon", name: "Heart", link: "/favorites" }
    ],

    footer: [
        {
            title: "Get In Touch",
            items: ["the quick fox jumps over the lazy dog"],
            footericon: [
                { id: 1, type: "icon", name: "Instagram" },
                { id: 2, type: "icon", name: "Twitter" },
                { id: 3, type: "icon", name: "Facebook" },
            ]
        },
        {
            title: "Company Info",
            items: ["About Us", "Carrier", "We are hiring", "Blog"],
        },
        {
            title: "Features",
            items: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
        },
        {
            title: "Resources",
            items: ["IOS & Android", "Customers", "API", "Watch a Demo"],
        },
    ],
    copyright: "Made With Love By Figmaland All Rights Reserved",

    slide: [
        {
            id: 1,
            img: '/images/hero.jpg',
            title: 'BLACK FRIDAY',
            description: 'We know how large objects will act, but things on a small scale just do not act that way.',
            buttonText: "Shop Now",
            buttonLink: "/shop",
        },
        {
            id: 2,
            img: '/images/hero-2.jpg',
            title: 'BLACK FRIDAY',
            description: 'We know how large objects will act, but things on a small scale just do not act that way.',
            buttonText: "Shop Now",
            buttonLink: "/shop",
        },
        {
            id: 3,
            img: '/images/hero.jpg',
            title: 'BLACK FRIDAY',
            description: 'We know how large objects will act, but things on a small scale just do not act that way.',
            buttonText: "Shop Now",
            buttonLink: "/shop",
        },


    ],


    shopcard: [
        {
            id: 0,
            title: "EDITOR’S PICK",
            text: "Problems trying to resolve the conflict between ",
        },
        {
            id: 1,
            img: '/images/woman.jpg',
            buttonText: "WOMAN",
            buttonLink: "/shop/woman",
        },
        {
            id: 2,
            img: '/images/man.jpg',
            buttonText: "MAN",
            buttonLink: "/shop/man",
        },
        {
            id: 3,
            img: '/images/woman-2.jpg',
            buttonText: "WOMAN",
            buttonLink: "/shop/woman",
        },
        {
            id: 4,
            img: '/images/man-2.jpg',
            buttonText: "MAN",
            buttonLink: "/shop/man",
        },
    ],








};
