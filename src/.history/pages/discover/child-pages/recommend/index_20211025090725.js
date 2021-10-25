import React, { memo ,useDispatch} from 'react'
import { connect } from 'react-redux'

import getTopBannerAction from './store/actionCreators'

function Recommend(props) {
    const { getTopBanner } = props
    // lines to initial fetching data, replaced by hooks
    /* useEffect(() => {
        getTopBanner()
      
    }, [getTopBanner]) */

    const dispatch = useDispatch()

    return (
        <div>
            Recommend {props.topBanner.length}
            {console.log("topBanner.length=",props.topBanner.length)}
        </div>
    )
}

// lines for connecting to the store with connect,modified by using hooks
/* const mapStateToProps= (state)=>({
    topBanner: state.recommend.topBanner,
})

const mapDispatchToProps = dispatch =>(
    {
        getTopBanner: function(){
            dispatch(getTopBannerAction())
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
 */