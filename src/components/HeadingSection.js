import { storyblokEditable } from "@storyblok/react";

const HeadingSection = ({ blok }) => {
    console.log(blok);
  return (
    <>
    <section className="container-fluid bg-light d-flex py-3 justify-content-center align-items-center py-5" {...storyblokEditable(blok)}>
        
        
        <div className="container text-center custom-container">
            <h1 className="purple-text fs-1 fw-bold my-2 large-text fade-anim">
                {blok.heading}
            </h1>
            <p className="my-2 py-4"> 
                {blok.paragraph}
            </p>
        </div>
    </section>
    </>
  );
};

export default HeadingSection;
