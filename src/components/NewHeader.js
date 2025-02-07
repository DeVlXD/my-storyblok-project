import { storyblokEditable } from "@storyblok/react";
import { Button } from "bootstrap";

const NewHeader = ({ blok }) => {
  return (
    <>
    <div className="w-screen h-screen text-white" {...storyblokEditable(blok)} style= {{background: "linear-gradient(45deg, #ff7f50, #6a5acd, #32cd32);"}}>
        <img alt="headerimg" src={blok.logo.filename} class="img-fluid rounded w-50"/>
    </div>
    </>
  );
};

export default NewHeader;
