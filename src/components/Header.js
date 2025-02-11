import { storyblokEditable } from "@storyblok/react";
import { Button } from "bootstrap";

const Header = ({ blok }) => {
  return (
    <>
    <div class="container d-flex flex-column bg-danger text-center py-3 align-items-center" {...storyblokEditable(blok)}>
    {/* Logo */}
    <div class="w-100 d-flex justify-content-center">
        <img src={blok.icon.filename} alt="Site Logo" class="img-fluid mb-3" style="max-width: 150px;" />
    </div>

    {/* Navbar (Fully Centered) */}
    <nav class="navbar navbar-expand-lg bg-transparent mt-3 shadow-sm rounded w-100">
        <div class="container d-flex flex-column align-items-center">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    {/* Buttons (Fully Centered) */}
    <div class="mt-3 d-flex justify-content-center gap-3 w-100">
        <button class="btn btn-warning" type="button">
            Login
        </button>
        <button class="btn btn-primary" type="button">
            Register
        </button>
    </div>
</div>
    </>
  );
};

export default Header;
