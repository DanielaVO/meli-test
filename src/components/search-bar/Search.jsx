import { Container, Wrapper, Input, IconButton } from "./styles"

export const Search = () => {
    return (
        <Container>
            <Wrapper>
                <img src="src/assets/Logo_ML.png" alt="logo" />
                <div>
                    <Input type="text" placeholder="Nunca dejes de buscar" />
                    <IconButton>
                        <img src="src/assets/ic_search.png" alt="search" />
                    </IconButton>
                </div>
            </Wrapper>
        </Container>
    )
}