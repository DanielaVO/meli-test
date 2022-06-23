import React, { useState } from "react";
import { Container, Wrapper, Input, IconButton } from "./styles"

export const Search = ({ setItems }) => {
    const [input, setInput] = useState(null);

    const getItemsAPI = async () => {
        fetch(`http://localhost:9000/items?q=${input}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(data => {
                setItems(data);
            }
            )
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <Container>
            <Wrapper>
                <img src="src/assets/Logo_ML.png" alt="logo" />
                <div>
                    <Input type="text" placeholder="Nunca dejes de buscar" onKeyUp={(e) => setInput(e.target.value)} />
                    <IconButton onClick={getItemsAPI}>
                        <img src="src/assets/ic_search.png" alt="search" />
                    </IconButton>
                </div>
            </Wrapper>
        </Container>
    )
}