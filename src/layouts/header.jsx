import { useState, useEffect } from "react";
import { data } from "../data/data";
import { Search, ShoppingCart, Heart, User, Menu, ChevronDown } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false); // State for Shop dropdown
    const [isMobileShopDropdownOpen, setIsMobileShopDropdownOpen] = useState(false); // State for Shop dropdown in hamburger menu

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    // Sayfa kaymasını engelleme
    useEffect(() => {
        if (isMenuOpen || isSearchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen, isSearchOpen]);

    return (
        <header className="bg-white p-4 w-full h-[91px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-grow items-center justify-between">
                <h1 className="text-2xl sm:text-3xl font-bold text-brand">{data.logo}</h1>

                <nav className="hidden md:flex justify-center space-x-4 lg:space-x-6">
                    {data.menu.map((item) => (
                        <div key={item.id} className="relative">
                            <a
                                href={item.link}
                                className="text-sm font-semibold sm:text-base text-navcolor hover:text-gray-400 no-underline"
                                onClick={(e) => {
                                    if (item.title === "Shop") {
                                        e.preventDefault(); // Prevent navigation
                                        setIsShopDropdownOpen(!isShopDropdownOpen); // Toggle dropdown visibility
                                    }
                                }}
                            >
                                {item.title}
                                {item.title === "Shop" && (
                                    <ChevronDown className="ml-1 inline-block w-4 h-4" />
                                )}
                            </a>

                            {/* Dropdown for Shop */}
                            {isShopDropdownOpen && item.title === "Shop" && (
                                <div className="absolute left-0 mt-2 w-max-content bg-white border border-gray-300 shadow-md rounded-md">
                                    <a
                                        href="/shop/man"
                                        className="block text-sm text-gray-700 py-2 px-4 hover:bg-gray-200"
                                    >
                                        Man
                                    </a>
                                    <a
                                        href="/shop/woman"
                                        className="block text-sm text-gray-700 py-2 px-4 hover:bg-gray-200"
                                    >
                                        Woman
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    {data.actions.map((action) => {
                        if (action.type === "button") {
                            return (
                                <a
                                    key={action.id}
                                    href={action.link}
                                    className="hidden md:flex items-center text-sm font-semibold sm:text-base text-blue hover:text-gray-500 no-underline"
                                >
                                    <User className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                                    {action.title}
                                </a>
                            );
                        }
                        return null;
                    })}

                    <button
                        onClick={handleSearchToggle}
                        className="w-6 h-6 text-blue hover:text-gray-500"
                    >
                        <Search />
                    </button>

                    {data.actions.map((action) => {
                        if (action.type === "icon" && action.name !== "Search") {
                            const IconComponent = action.name === "ShoppingCart" ? ShoppingCart :
                                action.name === "Heart" ? Heart : null;

                            return (
                                <a
                                    key={action.id}
                                    href={action.link}
                                    className="text-blue hover:text-gray-500"
                                >
                                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            );
                        }
                        return null;
                    })}

                    <button
                        onClick={handleMenuToggle}
                        aria-label="Open Menu"
                        className="md:hidden w-10 h-10 flex items-center justify-center"
                    >
                        <Menu className="w-6 h-6 text-gray-900" />
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
                <div className="md:hidden p-4 flex flex-col items-center">
                    {data.menu.map((item) => (
                        <div key={item.id} className="relative">
                            <a
                                href={item.link}
                                className="block text-sm sm:text-base text-gray-700 py-2 hover:text-gray-500 no-underline"
                                onClick={(e) => {
                                    if (item.title === "Shop") {
                                        e.preventDefault(); // Prevent navigation
                                        setIsMobileShopDropdownOpen(!isMobileShopDropdownOpen); // Toggle dropdown visibility
                                    }
                                }}
                            >
                                {item.title}
                                {item.title === "Shop" && (
                                    <ChevronDown className="ml-1 inline-block w-4 h-4" />
                                )}
                            </a>

                            {/* Mobile Dropdown for Shop */}
                            {isMobileShopDropdownOpen && item.title === "Shop" && (
                                <div className="ml-4 mt-2 w-full bg-white border border-gray-300 shadow-md rounded-md">
                                    <a
                                        href="/shop/man"
                                        className="block text-sm text-gray-700 py-2 px-4 hover:bg-gray-200"
                                    >
                                        Man
                                    </a>
                                    <a
                                        href="/shop/woman"
                                        className="block text-sm text-gray-700 py-2 px-4 hover:bg-gray-200"
                                    >
                                        Woman
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                    {data.actions.map((action) => {
                        if (action.type === "button") {
                            return (
                                <a
                                    key={action.id}
                                    href={action.link}
                                    className="block text-sm sm:text-base text-gray-700 py-2 hover:text-gray-500 no-underline"
                                >
                                    {action.title}
                                </a>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </header>
    );
};

export default Header;
