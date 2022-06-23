import React, { useState } from 'react'
import { Search } from '@/components/search-bar/Search';
import { Item } from '@/components/item/Item';
import { Container, Wrapper, Breadcrumb } from "./styles"

export const Home = () => {
    const [response, setResponse] = useState([]);
    const setItemsList = (itemsList) => {
        setResponse(itemsList)
    }

    return (
        <Container>
            <Search setItems={setItemsList} />
            <Breadcrumb className="mg-top-16 mg-bt-16">
                <p>{response.categories ? response.categories.join(" > ") : ''}</p>
            </Breadcrumb>
            <Wrapper>
                {response.items && response.items.map((item) =>
                    <Item
                        key={item.id}
                        id={item.id}
                        picture={item.picture}
                        title={item.title}
                        price={item.price}
                        location={item.location}
                    />)}
            </Wrapper>
        </Container >
    )
}

