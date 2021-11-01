import { memo } from 'react'


import { AppSongDetailWrapper,SongLeft,SongRight } from './style' 

export default memo(function AppSongDetail() {
    return (
        <AppSongDetailWrapper>
            <div className="content">
                <SongLeft>
                    Left
                </SongLeft>
                <SongRight>

                </SongRight>
            </div>
        </AppSongDetailWrapper>
    )
})

