import { storyblokEditable, useStoryblokState } from "@storyblok/react";
import { useState, useEffect } from "react";

const NavbarComponent = ({ blok }) => {
    // Ensure state updates work inside Storyblok Visual Editor
    const updatedBlok = useStoryblokState(blok) || blok;

    // Handle mobile menu state
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Ensure window is only accessed in the browser
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setIsMobile(window.innerWidth < 992);
            handleResize(); // Run on mount
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    // Toggle Mega Menu in Mobile
    const toggleMenu = (link) => {
        setActiveMenu((prev) => (prev === link ? null : link));
    };

    
    return (
        <>
            <section className="container-fluid bg-transparent py-3" {...storyblokEditable(blok)}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-transparent d-flex align-items-center justify-content-between">

                        {/* Logo - Smaller on mobile */}
                        <a className="navbar-brand" href="/">
                            <img
                                src={blok.logo.filename}
                                alt="Logo"
                                className="rounded"
                                style={{ width: "120px" }}
                            />
                        </a>

                        {/* Buttons inside the collapsible menu for mobile */}
                        <div className="d-lg-none text-center mt-2">
                            {blok.buttons && blok.buttons.map((button, index) => (
                                <a
                                    key={button._uid}
                                    href={button.URL.cached_url}
                                    className={`btn btn-sm ${index === 0 ? 'btn-login' : 'btn-register'} my-1 mx-2`}
                                    style={{ fontSize: "14px", padding: "6px 12px" }} // Ensures they stay small
                                >
                                    {button.text}
                                </a>
                            ))}
                        </div>

                        {/* Hamburger Button for Mobile - Positioned properly */}
                        <button
                            className="navbar-toggler border-0 position-relative z-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        {/* Nav Links - Collapsible */}
                        {/* <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                {blok.navLinks.map((link, index) => (
                                    <li className="nav-item mx-2" key={index}>
                                        <a className="nav-link" href={link.url}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        {/* Navigation Links with Mega Menu */}
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                {blok.navLinks && blok.navLinks.filter(link => link.component === "navLink").map((link, index) => (
                                    <li
                                        className="nav-item mx-2 position-relative"
                                        key={index}
                                        onMouseEnter={() => setActiveMenu(link)}
                                        onMouseLeave={() => setActiveMenu(null)}
                                    >
                                        <a className="nav-link" href={link.URL?.cached_url || "#"}>{link.text}</a>
                                    </li>
                                ))}
                            </ul>

                            {/* Global Mega Menu (Positioned Absolute) */}
                            {activeMenu && activeMenu.megaMenuItem && (
                                <div
                                    className="mega-menu position-absolute bg-white shadow rounded p-3"
                                    style={{
                                        top: "100%",  // Adjust based on navbar height
                                        left: "50%",  // Center it horizontally
                                        transform: "translateX(-50%)", // Adjust position for centering
                                        width: "80vw", // Control width
                                        zIndex: 1000
                                    }}
                                    onMouseEnter={() => setActiveMenu(activeMenu)} // Prevent flicker
                                    onMouseLeave={() => setActiveMenu(null)}
                                >
                                    <div className="row">
                                        {activeMenu.megaMenuItem.map((sub, subIndex) => (
                                            <div className="col-md-4" key={subIndex}>
                                                <h6 className="text-dark fw-bold fs-5 mb-3">{sub.heading}</h6>
                                                <ul className="list-unstyled">
                                                    {sub.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            <a className="text-muted text-decoration-none" href={item.URL.cached_url}>
                                                                {item.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Buttons - Hidden on Mobile */}
                        <div className="d-none d-lg-flex align-items-center">
                            {blok.buttons && blok.buttons.map((button, index) => (
                                <a
                                    key={button._uid}
                                    href={button.URL.cached_url}
                                    className={`btn btn-sm ${index === 0 ? 'btn-login' : 'btn-register'} me-2`}
                                >
                                    {button.text}
                                </a>
                            ))}
                        </div>

                    </nav>
                </div>
            </section>


        </>
    );
};

export default NavbarComponent;
