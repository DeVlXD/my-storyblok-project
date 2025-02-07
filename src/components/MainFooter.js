import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { renderRichText } from "@storyblok/react";

const MainFooter = ({ blok }) => {
    console.log(blok);
  return (
    <footer className="bg-gray-900 text-white px-6 footer-container justify-content-center" {...storyblokEditable(blok)}>
        <div className="container mx-auto my-10">
        <div className="row pt-5">
            {/* Logo Column */}
            <div className="col-md-3 col-12 mb-4" {...storyblokEditable(blok.footer_section_1?.[0])}>
            {blok.footer_section_1?.[0].logo_col?.map((logoItem) => (
                <div key={logoItem._uid}>
                <img src={logoItem.logo_image.filename} alt="Logo" className="w-32 mb-5" />
                <p className="text-white mb-3">{logoItem.paragraph}</p>
                <div className="d-flex gap-2">
                    {logoItem.links.map((link) => (
                    <a key={link._uid} href={link.url.url} target="_blank" rel="noopener noreferrer">
                        <img src={link.icon.filename} alt="Social Icon" className="w-5 h-5" style={{ width: "20px", height: "20px" }} />
                    </a>
                    ))}
                </div>
                </div>
            ))}
            </div>
    
            {/* Other 4 Columns */}
            {["col1", "col2", "col3", "col4"].map((colKey) => (
            <div key={colKey} className="col-md-2 col-12 mb-4">
                {blok.footer_section_1?.[0][colKey]?.map((col) => (
                <div key={col._uid}>
                    <h4 className="text-lg font-semibold text-white mb-3">{col.heading}</h4>
                    <div className="text-sm text-white my-1 fs-7">
                    {col.text.content.map((para, index) => (
                        <p key={index}>{para.content?.map((text) => text.text)}</p>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            ))}
        </div>
        </div>

         {/* Footer Section 2 */}
         <div className="bg-gray-800 text-white text-center py-4 mt-4 footer-strip" {...storyblokEditable(blok.footer_section_2?.[0])}>
          <div className="container">
            <div className="row justify-content-center">
              {/* Footer Links */}
              <div className="col-auto d-flex gap-3">
                {["link1", "link2", "link3", "link4"].map((linkKey) => (
                  blok.footer_section_2?.[0][linkKey]?.[0] ? (
                    <a
                      key={blok.footer_section_2[0][linkKey][0]._uid}
                      href={blok.footer_section_2[0][linkKey][0].URL.url || "#"}
                      className="text-white text-decoration-none small"
                    >
                      {blok.footer_section_2[0][linkKey][0].text}
                    </a>
                  ) : null
                ))}
              </div>
            </div>

            {/* Copyright Text */}
            <div className="mt-2 small">{blok.footer_section_2?.[0].copyright_text}</div>
          </div>
        </div>
  </footer>

  );
};

export default MainFooter;