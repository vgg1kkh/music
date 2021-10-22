import styled from "styled-components";

export const HeaderWrapper = styled.div`
height: 75px;
background-color: #242424;
.content {
    height: 70px;
    display: flex;

    .left {
        flex:7;
        background-color: pink
    }
    .right {
        flex:3
    }
    /* background-color: green; */

}
.divider {
    height: 5px;
    background-color: #C20202;
}
`