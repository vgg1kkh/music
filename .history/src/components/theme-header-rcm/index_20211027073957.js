import { memo } from "react"
import { RcmHeaderWrapper, RcmHeaderLeft,RcmHeaderRight } from "./style"



const ThemeHeaderRmc = (props)=>{

    const {keywords,title,keywordsClick} = props

    return(
        <RcmHeaderWrapper>
            <RcmHeaderLeft>
            <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
            </RcmHeaderLeft>
            <RcmHeaderRight>
                Right
            </RcmHeaderRight>
        </RcmHeaderWrapper>
    )

}

export default memo(ThemeHeaderRmc)