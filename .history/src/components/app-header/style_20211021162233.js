import styled from "styled-components";

export const HeaderWrapper = styled.div`
height: 75px;
background-color: #242424;
.content {
    height: 70px;
    display: flex;

    .left {
        flex:7;
        background-color: pink;
        .logo {
            display: inline-block;
            background-color: blue;
            width: 177px;
            .title {
                width: 100%;
                padding-right:20px;
                background-color: grey;
                &::before{
                    content: "";
                    
                }
            }
            
        }
    }
    .right {
        flex:3;
        background-color: deeppink
    }
    /* background-color: green; */

}
.divider {
    height: 5px;
    background-color: #C20202;
}
`