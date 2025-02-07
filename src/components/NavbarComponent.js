import { storyblokEditable } from "@storyblok/react";

const NavbarComponent = ({ blok }) => {
    console.log(blok);
  return (
    <>
    <section className="container-fluid bg-light py-3" {...storyblokEditable(blok)}>
        
        
        <div className="container justify-content-center align-items-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={blok.logo.filename} alt="Logo" className="rounded mx-3" style={{ width: 120 }} />
                </a>

                <div className="justify-content-center align-items-center" id="navbarNav">
                    <ul className="navbar-nav">
                    {blok.navLinks.map((link, index) => (
                        <li className="nav-item mx-2" key={index}>
                        <a className="nav-link" href={link.url}>{link.text}</a>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-center mx-3">
                    {blok.buttons && blok.buttons.map((button, index) => (
                    <a
                        key={button._uid} // Unique key for each button (helps React with rendering)
                        href={button.URL.cached_url} // Use the URL field from the Storyblok data
                        className={`btn ${index === 0 ? 'btn-login' : 'btn-register'} me-2`}
                        style={{ marginLeft: index !== 0 ? '10px' : '0' }} // Apply margin conditionally
                    >
                        {button.text} {/* Text for the button */}
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
