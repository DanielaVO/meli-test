import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
    --background: #EEEEEE;
    --yelllow: #FFE600;
    --gray: #999999;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    min-height: 100%;
    background-color: var(--background);
}

.mg-top-32{
    margin-top: 32px;
}
.mg-bt-32{
    margin-bottom: 32px;
}
.mg-rg-32{
    margin-right: 32px;
}
.mg-lf-32{
    margin-left: 32px;
}
.mg-top-16{
    margin-top: 16px;
}
.mg-bt-16{
    margin-bottom: 16px;
}
.mg-16{
    margin: 16px;
}
.font-size-18{
    font-size: 18px;
}
`