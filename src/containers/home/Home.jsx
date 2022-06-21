import React from 'react'
import { Search } from '@/components/search-bar/Search';
import { ItemList } from '@/components/item-list/ItemList';
import { Container, Wrapper, Breadcrumb } from "./styles"
import { ItemDetails } from '@/components/item-details/ItemDetails';

export const Home = () => {

    return (
        <Container>
            <Search />
            <Breadcrumb className="mg-top-16 mg-bt-16">
                <p>Category</p>
            </Breadcrumb>
            <Wrapper>
                <ItemList />
            </Wrapper>
        </Container >
    )
}

