import React from "react";

export const YoutubeEmbed = ({ embedId }) => (

    <iframe
        width="1000"
        height="600"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    ></iframe>

);
