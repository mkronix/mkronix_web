import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title = "MkRonix | Futuristic Digital Solutions",
    description = "MkRonix offers cutting-edge digital solutions, blending innovation and creativity to revolutionize web design, UI/UX experiences, and modern web applications.",
    keywords = "web design agency, futuristic digital solutions, UI/UX design, web applications, 3D elements, animations, interactive web design, MkRonix, responsive web design, creative web design, professional web development, custom website solutions, advanced web technologies, innovative UI/UX, modern user interfaces, website redesign, e-commerce solutions, scalable web applications, SEO-friendly websites, performance optimization, Webflow development, WordPress experts, Shopify stores, digital branding, mobile app development, progressive web apps, interactive user experiences, web animations, on-scroll effects, website transitions, creative agency, digital transformation, custom web apps, web design trends 2024, business websites, creative storytelling, minimal web design, high-performance web apps, accessible web design, cross-platform compatibility, futuristic design elements, real-time web interactions, JavaScript animations, CSS transitions, seamless navigation, immersive web design, aesthetic web design, cutting-edge technology, personalized web design."
}) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
);

export default SEO;
