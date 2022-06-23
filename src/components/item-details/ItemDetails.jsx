import React from 'react'
import { Panel, Info, SaleDetails, Column, ButtonSale } from './styles'

/**
 * Item details Component
 */
export const ItemDetails = () => {
    return (
        <>
            <Panel>
                <Column>
                    <img className="mg-rg-32" src="src/assets/Logo_ML.png" alt="product image" />
                    <Info>
                        <p className="product-description-title mg-lf-32 mg-bt-32">Description</p>
                        <p className="product-description mg-lf-32 mg-bt-32">Text</p>
                    </Info>
                </Column>
                <Column>
                    <SaleDetails>
                        <p className="product-new mg-top-32">New</p>
                        <p className="product-name mg-top-16">Name</p>
                        <p className="product-price mg-top-32 mg-bt-32">Price</p>
                        <ButtonSale className="mg-rg-32"><p>Comprar</p></ButtonSale>
                    </SaleDetails>
                </Column>
            </Panel>
        </>
    )
}