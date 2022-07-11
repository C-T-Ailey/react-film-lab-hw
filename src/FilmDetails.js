import React from 'react'

export default function FilmDetails(props) {
  
  const backdropUrl = `https://image.tmdb.org/t/p/original${props.film.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`;
  let details;
  let isFave;
  let showReview = "No reviews at the moment! Why not be the first?"

  function handleReviewSubmitClick(e) {
    e.preventDefault();
    let review = document.getElementById('review-text')
    // props.film.review = review.value
    for (const film in props.films) {
        let movie = props.films[film]
        if (movie.id === props.film.id && review.value !== "") {
            movie.review = review.value;
            review.value = ""
            console.log(movie)
        }
    }
  }

  const fave = (
    <div>
      <i className="material-icons">check</i>
    </div>
  )


  const notFave = (
    <div>
      <i className="material-icons">close</i>
    </div>
  )

  props.faves.forEach(film => {
    if (film.id === props.film.id) {
        props.film.isFav = true;
    }
  });

  for (const film in props.films) {
    let movie = props.films[film]
    if (movie.id === props.film.id && movie.review) {
        showReview = (
            <p>{movie.review}</p>
        )
    }
}

    if (props.film.id) {
        
      if (props.film.isFav) {
        isFave = fave
      } else {
        isFave = notFave
      }

    details = (
    <div className="film-detail is-hydrated">
      <figure className="film-backdrop">
        <img src={backdropUrl} alt="" />
        <h1 className="film-title">{props.film.title}</h1>
      </figure>
  
      <div className="film-meta">
        <h2 className="film-tagline">{props.film.tagline}</h2>
        <p className="film-detail-overview">
          <img
            src={posterUrl}
            className="film-detail-poster"
            alt={props.film.title}
          />
          {props.film.overview}
        </p>
        <span>Fave: </span>{isFave}
      </div>

      <div className="reviews">
        <h2>Reviews</h2>
        {showReview}
      </div>
      

      <div className="review-field">
        <h3>Leave a review:</h3>
        <textarea id="review-text" rows="10"></textarea>
        <br></br>
        <button className="submit-review" onClick={(e) => handleReviewSubmitClick(e)}>Submit</button>
      </div>

      
    </div>
    )
  } else {
    details = (
    <div className="film-detail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  )
  }

  return (
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {details}
      </div>
  )
}
