import { memo } from "react"
import { RcmHeaderWrapper, RcmHeaderLeft,RcmHeaderRight } from "./style"



const ThemeHeaderRmc = (props)=>{


    return(
        <RcmHeaderWrapper>
            <RcmHeaderLeft>
                Left
            </RcmHeaderLeft>
            <RcmHeaderRight>

            </RcmHeaderRight>
        </RcmHeaderWrapper>
    )

}

export default memo(ThemeHeaderRmc)