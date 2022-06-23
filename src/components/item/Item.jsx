import React, { useState } from 'react'
import { Card, Line, Wrapper } from "./styles"
import { Link } from "react-router-dom";

export const Item = ({ id, picture, title, price, location }) => {
    const [item, setItem] = useState([]);

    const price_format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', minimumFractionDigits: price.decimals < 3 ? price.decimals : 2,
        minimumFractionDigits: 0
    }).format(price.amount);

    const getItemAPI = async () => {
        fetch(`http://localhost:9000/items/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json())
            .then(data => {
                setItem(data);
            }
            )
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            <Card>
                <Wrapper>
                    <img className="mg-16" src={picture} alt="product image" />
                    <div>
                        <h3 className="mg-bt-32">
                            <Link to={`/items/${id}`}>{price_format}</Link></h3>
                        <p className="font-size-18">{title}</p>
                    </div>
                    <p className="provider">{location.city} - {location.state}</p>
                </Wrapper>
            </Card >
            <Line />
        </>
    )
}