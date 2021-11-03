import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import {getHotRecommendAction} from "../../../../../../"
import { HotRecommendWrapper } from './style'

export default memo(function HotRecommend(props) {

    //state
    const {history} = props

    //redux hooks
    const dispatch = useDispatch()

    //other hooks

    useEffect(()=>{

    },[])

    // other function
    const handleKeyWordClick = (item) => {
    history.push(`/discover/songs?albumName=${item}`)
  }

    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm
            title="Recommend"
            showIcon={true}
            keywords={['Asian', 'Hots', 'Rock', 'Country', 'Eletric']}
            right="more"
            keywordsClick={(item) => handleKeyWordClick(item)}
            />

        </HotRecommendWrapper>
            
            
    )
})
