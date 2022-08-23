
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

Download repository of latest release here

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

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][d1]

![][d2]

>Shows detailed information on a specific movie

![][detail]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png