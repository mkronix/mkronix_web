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

export default SEO;
