import { storyblokEditable } from "@storyblok/react";

const NavbarComponent = ({ blok }) => {
    console.log(blok);
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


            {/* Nav Links - Collapsible */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    {blok.navLinks.map((link, index) => (
                        <li className="nav-item mx-2" key={index}>
                            <a className="nav-link" href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Buttons - Smaller on mobile */}
            <div className="d-flex align-items-center">
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

            {/* Hamburger Button for Mobile */}
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>       
        </nav>
    </div>
</section>

    
    </>
  );
};

export default NavbarComponent;
