# Netflix GPT
- Create React App
- Configured TailwindCSS
- Header
- Routing of app
- Login Form
- Sign up form
- Form Validation
- useRef Hook
- Firebase Setup (for authentication)
- Deploying our app to production (Firebase Hosting)
- Create Sign up user account
- Implement Sign in user API
- Created Redux store with userSlice 
- Implemented Sign out
- Implemented on Auth State Change 
- Updated our profile (bug occured here so we used dispatch inside update API to fix the bug)
- BugFix: Sign up user diaplayName and profile picture update
- BugFix: if user is not logged in redirect /browse to login page (this fix dint work in mine , check again)
- Unsubscribed to the onAuthStateChanged callback
- Add the hardcoded values to the constants files
- Fetch movies from TMDB Public API 
- Register to TMDB and create App to get Access token and API Key 
- Get data from TMDB now playing movies list API 
- Custom Hook for Now Playing Movies
- Create MovieSlice
- update store with movies data
- Planning for MainCotainer and SecondaryContainer
- Fetch data for trailer video
- Update the store with trailer video data
- Embeded the trailer youtube video and made it autoplay and mute
- Added Tailwind classes to make the VideoBackground, VideoTitle i.e. MainContainer and all to look good
- Build Secondary Component
- Build Movie List
- Build Movie Card
- Got TMDB Image CDN URL
- Made the Browser page look good with Tailwind CSS
- usePopularMovies, useTopRatedMovies, useUpComingMovies custom Hooks



# Features
- Login/Sign Up
   - Sign In / Sign Up Form
   -redirect to browse page
- Browse (after authentication)
  - Header
  - Main Movie
      - Trailer in background
      - Title & Description
      - MovieSuggestions
        - MovieLists *N 
  - NetflixGPT
    - Search Bar
    - Movie Suggestions

