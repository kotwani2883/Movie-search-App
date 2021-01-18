import React from 'react'
import {Card,Typography,CardContent} from '@material-ui/core'

const DEFAULT_PLACEHOLDER_IMAGE=
"https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.redd.it%2F1z2b4pjh1m8y.png&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FAstroneer%2Fcomments%2F5mvi4p%2Fan_astroneer_version_of_the_gravity_movie_poster%2F&tbnid=9M47IRuErVZ4PM&vet=12ahUKEwi10vmMj6XuAhVYHysKHeeoB0gQMygGegUIARC8AQ..i&docid=Pqyig3LCPRTS-M&w=1250&h=1875&q=gravity%20movie%20poster&ved=2ahUKEwi10vmMj6XuAhVYHysKHeeoB0gQMygGegUIARC8AQ";


  
//Movie is passed as an object
const Movie=({movie})=>{
const poster=movie.Poster==='N/A'?DEFAULT_PLACEHOLDER_IMAGE:movie.Poster;
return(
    <Card  className="movie">
        <CardContent>
        <Typography color="textPrimary" variant="h4" gutterBottom>
          {movie.Title}
        </Typography>
        <div>
            <img width="200" alt={`The movie is Titles:${movie.Title}`}
            src={poster}
            />
        </div>
        <Typography color="textSecondary" variant="p" gutterBottom>
          {movie.Year}
        </Typography>
        </CardContent>
    </Card>
);
};

export default Movie;

