import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
);

SEO.defaultProps = {
    title: "MkRonix | Futuristic Digital Solutions",
    description: "MkRonix offers cutting-edge digital solutions, blending innovation and creativity to revolutionize web design, UI/UX experiences, and modern web applications.",
    keywords: "web design agency, futuristic digital solutions, UI/UX design, web applications, 3D elements, animations, interactive web design, MkRonix",
};


export default SEO;
