import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  width: 100%;
  .ranking-header {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;
    .image {
      position: relative;
      height: 80px;
    }
    .title {
      width: 116px;
      margin: 6px 0 0 10px;

      .btn {
        margin-top: 8px;
        display: flex;
        .play,
        .favourite {
          width: 22px;
          height: 22px;
        }
        .play {
          background-position: -267px -205px;
          margin-right: 8px;
          background-color: pink;
         

          }
        }
        
      }
    }
  }
  .ranking-list {
  }
  .ranking-footer {
    height: 33px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`
