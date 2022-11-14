import React from "react";
import ActorCard from "../actorCard"
import MovieCard from "../movieCard";
import Grid from "@mui/material/Grid";
import ActorCreditsCard from "../actorCreditsCard";

const MovieList = ( {actors, movies, action, title, credits}) => {



  let movieCards = movies?.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MovieCard key={m.id} movie={m} action={action} />
    </Grid>
    
  ))
  
 
  let actorCards = actors?.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorCard key={a.id} actor={a} />
    </Grid>
  ));

  let actoreCredits = credits?.cast.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
    <ActorCreditsCard key={m.id} movie={m}  />
  </Grid>
  ));
 
  
    return title === 'Discover Movies' || title === 'Upcoming Movies'? movieCards: title === 'Credits'? actoreCredits: actorCards


 

    

  };

export default MovieList;