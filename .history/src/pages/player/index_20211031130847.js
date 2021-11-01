import { memo } from 'react'


import { AppSongDetailWrapper,SongLeft,SongRight } from './style' 

export default memo(function AppSongDetail() {
    return (
        <AppSongDetailWrapper>
            <div className="content">
                <SongLeft>
                    useLayoutEffect(() => {
                        effect
                        return () => {
                            cleanup
                        };
                    }, [input])
                </SongLeft>
                <SongRight>

                </SongRight>
            </div>
        </AppSongDetailWrapper>
    )
})

