import React from 'react'
import './_movie.scss'

const Movie = props => (
  <section className="mov">
    <h2 className="mov__title">{props.title}</h2>
    <p className="mov__release">
      <strong>Release Date</strong> &#128336; {props.date}
    </p>
    <div className="mov__date">
      <span>Tomatometer</span>
      <button className="mov__button">{props.critic}</button>
    </div>
    <div className="mov__date">
      <span>Audience Score</span>
      <button className="mov__button">{props.audience}</button>
    </div>
  </section>
)

export default Movie
