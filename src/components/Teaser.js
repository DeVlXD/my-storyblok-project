import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <h2 class="text-2xl" style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
