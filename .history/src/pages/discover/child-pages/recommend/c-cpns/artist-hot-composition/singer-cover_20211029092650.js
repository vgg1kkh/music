import React, { memo } from "react";
import styled from "styled-components";
import { getImageSize } from "../../../../../../utils/format-utils";

const SingerCoverWrapper = styled.a`
  
  display: flex;
  margin-top: 14px;
  width: 210px;
  height: 62px;
  background: #fafafa;
  
`;

export default memo(function SingerCover({ info }) {
  return (
    <SingerCoverWrapper href={info.picUrl} target="_blank">
      <div>
        <img src={getImageSize(info.picUrl, 62, 51)} alt=""></img>
      </div>

      <div className="detail">
        <p className="detail-name">{info.name}</p>
        <p className="detail">{info.alias[0]}</p>
      </div>
    </SingerCoverWrapper>
  );
});
