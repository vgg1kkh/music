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
    .tit {
      width: 116px;
      margin: 6px 0 0 10px;

      div > h3 {
        font-weight: bold !important;
      }

      .btn {
        display: flex;
        margin-top: 8px;
        .play,
        .favourite {
          width: 22px;
          height: 22px;
        }

        .play {
          background-position: -267px -205px;
          margin-right: 8px;

          &:hover {
            background-position: -267px -235px;
            background-color: ;
          }
        }

        .favourite {
          background-position: -300px -205px;

          &:hover {
            background-position: -300px -235px;
          }
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
