import styled from "styled-components";

export const Column = styled.div`
img{
    width: 680px;
}
`

export const Panel = styled.div`
    display: grid;
    grid-template-columns: 67fr 33fr;
    background-color: green;
`

export const Info = styled.div`
.product-description-title{
    font-size: 28px;
}
.product-description{
    font-size: 16px;
}
`

export const SaleDetails = styled.div`
.product-name{
    font-size: 24px;
}
.product-price{
    font-size: 46px;
}
.product-new{
    font-size: 14px;
}
`
export const ButtonSale = styled.div`
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #3483FA;
    height: 35px;
    color: white;
    justify-content: center;
`

