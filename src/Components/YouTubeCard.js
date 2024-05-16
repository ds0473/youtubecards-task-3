import React from 'react'

function YouTubeCard({imgLink, altText, title, para}) {
  return (
    <article style={{ borderRadius: "20px"}}>
    <img  src={imgLink} alt={altText}  />
    <h5> {title}  </h5>
    <p>{para}</p>
  </article>
  )
}

export default YouTubeCard