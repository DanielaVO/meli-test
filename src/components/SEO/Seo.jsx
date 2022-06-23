import React from "react"
import { Helmet } from "react-helmet"

export const SEO = () => {
    return (
        <div>
            <Helmet>
                <html lang="es" />
                <title>Mercado Libre | Mercado Libre Colombia</title>
                <meta name="description" content="Mercado libre Colombia" />
            </Helmet>
        </div>
    );
};