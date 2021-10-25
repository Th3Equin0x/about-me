import React from 'react';
import PropTypes from 'prop-types';

/* matchData
{
    player1: {
        player: {
            name: "...",
            aliases: [
                "..."
            ],
            region
        },
        characters: [
            "..."
        ],
        isWinner: boolean
    },
    player2: {
        player: {
            name: "...",
            aliases: [
                "..."
            ],
            region
        },
        characters: [
            "..."
        ],
        isWinner: boolean
    },
    event: "...",
    isLAN: boolean,
    vidPlatform: "..." (YouTube, Twitch, etc.)
}
*/

/* vidData: YouTube
{
    "publishedAt": "2012-10-01T15:27:35Z",
    "channelId": "UCAuUUnT6oDeKwE6v1NGQxug",
    "title": "...",
    "description": "...",
    "thumbnails": {
        "default": {
        "url": "https://i.ytimg.com/vi/Ks-_Mh1QhMc/default.jpg",
        "width": 120,
        "height": 90
        },
        "medium": {},
        "high": { },
        "standard": {},
        "maxres": {}
    },
    "channelTitle": "TED",
    "tags": [
        "Amy Cuddy",
        "TED"
    ],
    "categoryId": "22",
    "liveBroadcastContent": "none",
    "defaultLanguage": "en",
    "localized": {
        "title": "...",
        "description": "..."
    },
    "defaultAudioLanguage": "en"
}
*/

export default function VodListElement(props){
    return(
        <div>
            <h1>{props.matchData.player1.name} vs. {props.matchData.player2.name} </h1>
            <h2> {props.vidData.title}</h2>
        </div>
    )
}

VodListElement.propTypes = {
    matchData: PropTypes.object.isRequired,
    vidData: PropTypes.object.isRequired
}
