import { Instagram, Twitter, Facebook, Copyright } from 'lucide-react';
import { data } from '../data/data';

const Footer = () => {
    return (
        <footer className="footer  ">
            <div className="w-full  max-w-7xl  mx-auto px-20 p-12 sm:px-8 lg:px-6 bg-white flex flex-grow flex-col gap-16 sm:flex-row   lg:space-x-8 ">
                {data.footer.map((section, index) => (
                    <div key={index} className="footer-section  ">
                        <h3 className="footer-title font-bold text-brand text-xl  ">{section.title}</h3>
                        <div className=" mt-8">
                            {section.items.map((item, idx) => (
                                <h6 key={idx} className="footer-item ">
                                    <button className="footer-button text-stext text-base text-left font-bold hover:text-pinky ">
                                        {item}
                                    </button>
                                </h6>
                            ))}
                        </div>

                        {/* "Get In Touch" bölümünde ikonları render et */}
                        {section.title === "Get In Touch" && section.footericon && (
                            <div className="footer-icons mt-4 ">
                                {section.footericon.map((icon) => {
                                    if (icon.name === 'Instagram') {
                                        return (
                                            <button
                                                key={icon.id}
                                                className="footer-icon-button mr-6  text-blue "
                                                aria-label={icon.name}
                                            >
                                                <Instagram size={27} />
                                            </button>
                                        );
                                    }
                                    if (icon.name === 'Twitter') {
                                        return (
                                            <button
                                                key={icon.id}
                                                className="footer-icon-button mr-4 text-blue "
                                                aria-label={icon.name}
                                            >
                                                <Twitter size={27} />
                                            </button>
                                        );
                                    }
                                    if (icon.name === 'Facebook') {
                                        return (
                                            <button
                                                key={icon.id}
                                                className="footer-icon-button  text-blue "
                                                aria-label={icon.name}
                                            >
                                                <Facebook size={27} />
                                            </button>
                                        );
                                    }
                                    return null; // Herhangi bir eşleşme yoksa render etme
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Copyright section */}
            <div className="bg-gwhit h-[50px] w-full flex flex-grow justify-center   ">
                <Copyright size={14} className="text-stext  mt-3 " />
                <p className="text-stext text-sm sm:text-md mt-3  ">{data.copyright}</p>
            </div>
        </footer>


    );
};

export default Footer;


