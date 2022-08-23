
# ICT Skills 2 Assignment.

Name: Bernard Cattigan

## Overview.

My React app is a continuation of the [Movies app](https://github.com/Berncat/ict2-moviesApp) we completed for the first assignment for ICT skills 2 module.

Features added:
 
+ Updated Movie Card Layout - Must watch avatar 
+ Updated Movie Card Layout - Reviewed avatar
+ Updated Nav Bar Design - Hover
+ Updated Movie Posters - Carousel image display
+ My Reviews Page and related functionality
+ Actors in the movie
+ Actors Details page
+ Actors movie roles
+ Similar movies
+ Filter by Rating
+ Sorting by Date
+ Sorting by Rating

## Setup requirements.

Node.js installed
React installed
Download repository

### Building
```
npm install
```

### Add .ENV file
```
REACT_APP_TMDB_KEY= .....YOUR API KEY.....
FAST_REFRESH=false
```

### Running
```
npm start
```

## App Design.

### Routing/Navigation.

Below is a list of new routes which were added:

+ /movies/mustwatch - lists movies marked as must watch
+ /movies/myreviews - lists movies you have reviewed
+ /movies/:id/similar - lists similar movies based on a specific movie
+ /movies/myreview/ - detailed information on a specific review.
+ /actors/:id - detailed information on a specific actor.

### Views/Pages.

Views below:

![][h1]

![][h2]

>Home page showing new card format and new filtering

![][m1]

>Must watch page

![][r1]

![][r2]

>There is now also my review pages

![][c1]

>Cast listing

![][s1]

>Similar Movies listing

### Component catalogue.

See storybook components list below:

![][stories]

## Caching.

Below is a list of all items that are cached

+ Genres
+ Actor Images
+ Actor Details
+ Actors Credits
+ Movie Details
+ Movie Images
+ Discover Movies
+ Upcoming Movies
+ Movie Cast
+ Similar Movies

![][caching]

[h1]: ./public/home.PNG
[h2]: ./public/homeFiltered.PNG
[m1]: ./public/mustWatch.PNG
[r1]: ./public/myReviews.PNG
[r2]: ./public/myReview.PNG
[c1]: ./public/castInfo.PNG
[s1]: ./public/similarMovies.PNG
[caching]: ./public/caching.png
[stories]: ./public/stories.png