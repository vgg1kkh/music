import { memo } from "react";
import { RcmHeaderWrapper, RcmHeaderLeft, RcmHeaderRight } from "./style";

const ThemeHeaderRmc = (props) => {
  const { keywords, title,right,showIcon, keywordsClick } = props;

  return (
    <RcmHeaderWrapper>
      <RcmHeaderLeft>
        <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
        <ul className="keywords">
          {keywords.map(item => {
            return (
              <li className="item" key={item}>
                <a href="/" onClick={(e) => {e.preventDefault();keywordsClick(item)}}>{item}</a>
                <span className="line">|</span>
              </li>
            )
          })}
        </ul>
      </RcmHeaderLeft>
      <RcmHeaderRight>
          <a>{</a>
          <div className="icon">
                {right}
          </div>

      </RcmHeaderRight>
    </RcmHeaderWrapper>
  );
};

export default memo(ThemeHeaderRmc);
