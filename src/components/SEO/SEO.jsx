import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title = "MkRonix | Futuristic Digital Solutions",
    description = "MkRonix offers cutting-edge digital solutions, blending innovation and creativity to revolutionize web design, UI/UX experiences, and modern web applications.",
    keywords = "web design agency, best website agency near me, best web design agency in India, best web design agency in Mumbai, best web design agency in Gujarat, best web design agency in Ahmedabad, best web design agency in Asia, best web design agency in Palanpur, futuristic digital solutions, UI/UX design, web applications, 3D elements, animations, interactive web design, MkRonix, professional website development, ecommerce solutions, Shopify development, WordPress development, Webflow experts, custom website design, responsive websites, front-end development, Next.js developers, React.js developers, mobile app development, SEO services, creative web design, affordable web design, digital marketing, graphic design, modern website design, web branding, app development, web app solutions, web designers near me, innovative web design, business website development, landing page design, fast loading websites, dynamic websites"
}) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
);

export default SEO;
