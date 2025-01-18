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
    copyright: "Made With Love By Figmaland All Rights Reserved"








};
