import { memo } from 'react'


import { AppSongDetailWrapper,SongLeft,SongRight } from './style' 

export default memo(function AppSongDetail() {
    return (
        <AppSongDetailWrapper>
            <div className="content w980">
                <SongLeft>
                    Left
                </SongLeft>
                <SongRight>
                    Right
                </SongRight>
            </div>
        </AppSongDetailWrapper>
    )
})

