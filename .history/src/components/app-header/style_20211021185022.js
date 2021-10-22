import styled from "styled-components";

export const HeaderWrapper = styled.div`
height: 75px;
background-color: #242424;
.content {
    height: 70px;
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: grey;
    /* background-color: green; */

}
.divider {
    height: 5px;
    background-color: #C20202;
}
`

export const HeaderLeft= styled.div`
    .logo {
        display:inline-block;
        width: 176px;
        height: 69px;
        
    }

`
export const HeaderRight= styled.div`

`

// .left {
//     flex:7;
//     height: 70px;
//     background-color: pink;
//     .logo {
//         display: inline-block;
//         background-color: blue;
//         width: 177px;
//         height: 70px;
//         .title {
//             display:inline-block;
//             width: 157px;
//             height: 70px;
//             padding-right:20px;
//             font-size: 14px;
//             background-color: grey;
//             &::before{
//                 content: "";
//                 display:inline-block;
//                 line-height: 70px;
//                 width: 33px;
//                 height: 33px;
//                 /* background-color: red; */
//                 background: url("@/assets/img/sprite_01.png");
//                 background-position: 0 19px
                
//             }
//         }
        
//     }
// }
// .right {
//     flex:3;
//     background-color: deeppink
// }