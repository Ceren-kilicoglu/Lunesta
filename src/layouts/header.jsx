import { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, User, Menu, ChevronDown, X } from "lucide-react"; // Import X icon
import { data } from "../data/data";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const toggleShopDropdown = (e) => {
        e.preventDefault();
        setIsShopDropdownOpen((prev) => !prev);
    };
    const toggleSearch = () => setIsSearchOpen((prev) => !prev);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".dropdown")) setIsShopDropdownOpen(false);
            if (!e.target.closest(".menu") && !e.target.closest(".menu-btn")) setIsMenuOpen(false); // Close menu when clicking outside
        };

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen || isSearchOpen ? "hidden" : "auto";
    }, [isMenuOpen, isSearchOpen]);

    return (
        <header className="bg-white p-4 w-full h-[91px] max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
            <div className="flex flex-grow items-center justify-between">
                <h1 className="text-3xl font-bold text-pinky">{data.logo}</h1>

                <nav className="hidden md:flex justify-center space-x-4 lg:space-x-6">
                    {data.menu.map((item) => (
                        <div key={item.id} className="relative dropdown">
                            <a
                                href={item.link}
                                className="text-sm font-bold sm:text-base text-navcolor hover:text-pinky no-underline"
                                onClick={item.title === "Shop" ? toggleShopDropdown : null}
                            >
                                {item.title}
                                {item.title === "Shop" && <ChevronDown className="ml-1 inline-block w-4 h-4" />}
                            </a>
                            {isShopDropdownOpen && item.title === "Shop" && (
                                <div className="absolute left-0 mt-2 w-max-content bg-white border border-gray-300 shadow-md rounded-md z-10">
                                    {["Man", "Woman"].map((gender) => (
                                        <a
                                            key={gender}
                                            href={`/shop/${gender.toLowerCase()}`}
                                            className="block py-2 px-4 text-sm font-normal sm:text-base text-navcolor hover:text-pinky no-underline"
                                        >
                                            {gender}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    {data.actions.map(
                        (action) =>
                            action.type === "button" && (
                                <a
                                    key={action.id}
                                    href={action.link}
                                    className="hidden md:flex items-center text-sm font-semibold sm:text-base text-blue hover:text-pinky no-underline"
                                >
                                    <User className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                                    {action.title}
                                </a>
                            )
                    )}

                    <button
                        onClick={toggleSearch}
                        className="w-6 h-6 text-gray-500 hover:text-pinky md:text-blue"
                    >
                        <Search />
                    </button>

                    {data.actions.map(
                        (action) =>
                            action.type === "icon" &&
                            action.name !== "Search" && (
                                <a
                                    key={action.id}
                                    href={action.link}
                                    className="text-gray-500 hover:text-pinky md:text-blue"
                                >
                                    {action.name === "ShoppingCart" ? (
                                        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                                    ) : action.name === "Heart" ? (
                                        <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                                    ) : null}
                                </a>
                            )
                    )}

                    <button
                        onClick={toggleMenu}
                        aria-label="Open Menu"
                        className="md:hidden w-10 h-10 flex items-center justify-center menu menu-btn"
                    >
                        <Menu className=" w-6 h-6 text-gray-900" />
                    </button>
                </div>
            </div>

            {isSearchOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
                    onClick={() => setIsSearchOpen(false)}
                >
                    <div
                        className="mt-4 w-full max-w-md p-2 bg-white rounded-md shadow-lg relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            autoFocus
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>
            )}

            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-50  bg-white/100 "
                    onClick={() => setIsMenuOpen(false)} // Menüyü kapatır
                >
                    <div
                        className="md:hidden p-28 flex flex-col items-center bg-white"
                        onClick={(e) => e.stopPropagation()} // İçeriğe tıklamaları engeller
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)} // Menüden çıkmak için X butonu
                            className="absolute top-6 right-6 text-3xl text-gray-600"
                        >
                            <X /> {/* X icon */}
                        </button>
                        {data.menu.map((item) => (
                            <div key={item.id} className="relative dropdown">
                                <a
                                    href={item.link}
                                    className="block font-bold text-2xl text-gray-600 py-2 hover:text-pinky no-underline"
                                    onClick={item.title === "Shop" ? toggleShopDropdown : null}
                                >
                                    {item.title}
                                    {item.title === "Shop" && <ChevronDown className="ml-1 inline-block w-4 h-4" />}
                                </a>
                                {isShopDropdownOpen && item.title === "Shop" && (
                                    <div className="ml-4 mt-2 w-full bg-white border border-gray-300 shadow-md rounded-md">
                                        {["Man", "Woman"].map((gender) => (
                                            <a
                                                key={gender}
                                                href={`/shop/${gender.toLowerCase()}`}
                                                className="block font-semibold text-md text-gray-500 py-2 hover:text-pinky no-underline px-4"
                                            >
                                                {gender}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {data.actions.map((action) =>
                            action.type === "button" ? (
                                <a
                                    key={action.id}
                                    href={action.link}
                                    className="block font-bold text-2xl text-gray-600 py-2 hover:text-pinky no-underline"
                                >
                                    {action.title}
                                </a>
                            ) : null
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
