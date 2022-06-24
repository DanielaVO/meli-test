import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Wrapper, Input, IconButton } from "./styles"

/**
 * Search Component
 */
export const Search = ({ setItems, setCategories }) => {
    const [input, setInput] = useState(null);
    let navigate = useNavigate();

    const getItemsAPI = async () => {
        navigate("/items?search=" + input);
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
                setCategories(data.categories);
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