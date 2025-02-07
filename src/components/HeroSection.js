import { storyblokEditable } from "@storyblok/react";
import { Button } from "bootstrap";

const HeroSection = ({ blok }) => {
  return (
    <>
    <div className="w-screen h-screen text-white" {...storyblokEditable(blok)} style= {{background: "linear-gradient(45deg, #ff7f50, #6a5acd, #32cd32);"}}>
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-auto">
            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={blok.image.filename}/>
            <div class="text-center lg:w-5/12 w-full">
                <h1 className="my-4 text-5xl font-bold leading-tight">
                    {blok.title}
                </h1>
                <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  example button
                </button>
            </div>
        </div>
    </div>
    </>
  );
};

export default HeroSection;
