# Habitualize

*A full-stack web app for tracking and building good habits.*

## Simple Habit Tracking

Habit tracking provides you with an outlet to *teach* yourself good habits. Habitualize makes it easy to keep track of the habits you find useful. Simply log in, create an account, and get tracking.

## Screenshots 

### Landing Page
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-hero-area.png" width="800" height="500">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-about-section.png" width="800" height="500">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-sign-up.png" width="800" height="500">

### User Dashboard
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-user-dashboard.png" width="800" height="500">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-create-habit-form.png" width="800" height="500">

### User Dashboard
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-user-dashboard.png" width="800" height="500">

### Statistics
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-statistics-page.png" width="800" height="500">
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-statistics-area-chart.png" width="800" height="500">

### User Feedback
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/habitualize-new-best-streak.png" width="800" height="500">

## Technology

#### Front End
- React/Redux
- JavaScript
- HTML5
- CSS3
- Enzyme (testing)

#### Back End [Habitualize API](https://github.com/jrvscm/habitualize-api)
- Node.js (server)
- Express (server)  
- MongoDB/Mongoose/Mlab (database) 
- Mocha Chai (Testing)
- Continuous integration and deployment with Travis CI and Netlify

#### Responsive
- Habitualize is completely reponsive and supports all mobile, tablet, and desktop devices.

#### Security
 - Passwords are encrypted with bcrypt.js.
 - Passport.js is used to control protected endpoints.

## Personalized Charts and Feedback  

#### Habit Streak

Habitualize makes it easy to see your progress through personalized statistics and data visualization. Each habit is tracked by the number of daily submits you make (or don't make). This is visualized through Habitualize's streak representation. User's can easily see what day's they've missed and how many times they submitted on a specific day.  

#### Percent Success Indicator

The percent success indicator shows users the all time success rate for each habit the user creates. This allows the users to easily see which habits they have been tracking consistantly and also which ones they need to work on.

#### Average Submits

The average submits donut chart lets the users see at a glace how many times they have been submitting on successful days, excluding zero days. This is fun and useful for users to see on average how many times they've tracked.

#### Area Chart

Habitualize provides the user with a customised area chart. Making it very easy to see, over time, if the user has been successfully tracking since creation of the habit. The graph information is displayed by number of submissions per date.


