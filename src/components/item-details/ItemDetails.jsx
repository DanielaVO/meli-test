import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Panel, Info, SaleDetails, Column, ButtonSale } from './styles'

/**
 * Item details Component
 */
export const ItemDetails = () => {
    const [product, setProduct] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        getItemAPI();
    }, []);

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
                setProduct(data);
            }
            )
            .catch(error => {
                console.error(error);
            });
    }

    const price_format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', minimumFractionDigits: product.item.price.decimals < 3 ? product.item.price.decimals : 2
    }).format(product.item.price.amount);

    return (
        <>
            <Panel>
                <Column>
                    <img className="mg-rg-32" src={product.item.picture} alt="product image" />
                    <Info>
                        <p className="product-description-title mg-lf-32 mg-bt-32">Descripción del producto</p>
                        <p className="product-description mg-lf-32 mg-bt-32">{product.item.description}</p>
                    </Info>
                </Column>
                <Column>
                    <SaleDetails>
                        <p className="product-new mg-top-32">{product.item.condition} - {product.item.sold_quantity}</p>
                        <p className="product-name mg-top-16">{product.item.name}</p>
                        <p className="product-price mg-top-32 mg-bt-32">{price_format}</p>
                        <ButtonSale className="mg-rg-32"><p>Comprar</p></ButtonSale>
                    </SaleDetails>
                </Column>
            </Panel>
        </>
    )
}