import React, { memo } from 'react'

import S

export default memo(function PlayerBar() {
    return (
        <SongDetailWrapper>
          <div className="content w980">
            <SongLeft>
              <SongInfo />
              <SongComment />
            </SongLeft>
            <SongRight>
              {/* <h2>SongInclude 包含音乐</h2>
              <h2>SongRelevant 相关音乐</h2>
              <h2>客户端下载</h2> */}
              {songlist &&
                songlist.map((item, index) => {
                  return (
                    <SongItem
                      key={item.id}
                      currentRanking={index + 1}
                      className="song_item"
                      // coverPic={index < 3?item.al.picUrl:''}
                    //   duration={formatMinuteSecond(item.dt)}
                      songName={item.name}
                      singer={item.artists[0].name}
                      songId={item.id}
                    />
                  )
                })}
            </SongRight>
          </div>
        </SongDetailWrapper>
      )
})
