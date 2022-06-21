import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    border-radius: 5px;
    margin: 16px;
    hr{
        margin: 0px 40px 0px 40px;
        background-color: #999;
    }
`

export const Line = styled.hr`
    background-color: #EEEEEE;
    margin: 0px 40px 0px 40px;
    height: 1px;
    border: 0;
`

export const Wrapper = styled.div`
    display: flex;
    div{
        margin: 15px;
    }
    .provider{
        color: #999999;
        font-size: 12px;
        margin: 15px;
        position: absolute;
        margin-left: 759px;
    }
    }
    img{
        border-radius: 4px;
        width: 180px;
        height: 180px;
    }
    a{
        text-decoration: none;
        font-size: 24px;
    }
`
