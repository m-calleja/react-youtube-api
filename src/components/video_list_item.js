/**
 * Created by Mei on 13/12/2017.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { /*ES6 synax for cleaning code*/
const imageUrl = video.snippet.thumbnails.default.url;
console.log({video});
    return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>

    </li>
      );
    };

export default VideoListItem;