## Project: Workout Tracker
## Author: Pranitha Maganty
### Description: Allows user to track workouts
### Github Repo Link: https://github.com/pmaganty/workout_tracker

#### Preliminary to-do:
+ Enter "npm i" to grab all dependency libraries

#### How to run and play on your local machine:
+ Run the server.js file using "node server.js" inside the same directory hierarchy that it exists
+ Go to localhost 3000

#### File Contents:
+ server.js: contains info to connect to server and all routes
+ package.json: contains all dependencies required for application to run
+ models/
    - workoutModel.js: contains code to create table in mongodb
+ public/ : contains all front end code
+ seeders/ : contains seeds, if you want to run these use "npm run seed"