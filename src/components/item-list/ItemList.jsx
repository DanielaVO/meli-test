import { Card, Line, Wrapper } from "./styles"

export const ItemList = () => {
    return (
        <>
            <Card>
                <Wrapper>
                    <img className="mg-16" src="src/assets/Logo_ML.png" alt="product image" />
                    <div>
                        <h3 className="mg-bt-32"><a href="/detail">Price</a></h3>
                        <p className="font-size-18">Description</p>
                    </div>
                    <p className="provider">Provider</p>
                </Wrapper>
            </Card >
            <Line />
        </>
    )
}