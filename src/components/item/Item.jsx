import React from 'react'
import { Card, Line, Wrapper } from "./styles"
import { Link } from "react-router-dom";

/**
 * Item Component
 */
export const Item = ({ id, picture, title, price, location }) => {
    const price_format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: price.decimals < 3 ? price.decimals : 2
    }).format(price.amount);

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