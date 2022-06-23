import React from 'react'
import { Search } from '@/components/search-bar/Search';
import { Container, Wrapper, Breadcrumb } from "./styles"
import { SEO } from '@/components/SEO/Seo';
import { Outlet } from "react-router-dom";

/**
 * Home Container
 */
export const Home = ({ setItemsList, response }) => {

    return (
        <Container>
            <SEO />
            <Search setItems={setItemsList} />
            <Breadcrumb className="mg-top-16 mg-bt-16">
                <p>{response.categories ? response.categories.join(" > ") : ''}</p>
            </Breadcrumb>
            <Wrapper><Outlet /></Wrapper>
        </Container >
    )
}

