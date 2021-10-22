import styled from "styled-components";

export const HeaderWrapper = styled.div`
height: 75px;
background-color: #242424;
.content {
    height: 70px;
    display: flex;

    .left {
        flex:7;
        height: 70px;
        background-color: pink;
        .logo {
            display: inline-block;
            background-color: blue;
            width: 177px;
            height: 70px;
            .title {
                display:inline-block;
                width: 157px;
                height: 70px;
                padding-right:20px;
                font-size: 14px;
                background-color: grey;
                &::before{
                    content: "";
                    display:inline-block;
                    line-height: 70px;
                    width: 33px;
                    height: 33px;
                    background-color: red;
                    bg
                    
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