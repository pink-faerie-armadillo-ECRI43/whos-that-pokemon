# whos-that-pokemon

Git workflow:

1. Clone repo
2. Git checkout name-feature
3. do your your stuff on name-feature branch
4. git checkout dev
5. git pull origin dev (pull most recent version of dev)
6. git checkout name-feature branch
7. git merge dev
8. git push origin name-feature
9. Go to github and make pull request (base: dev compare: name-feature)
10. someone approves (hopefully...)! (can grab someone to screen share with to look over code before officially merging)

MVP:

1. ~~Render basic component (form for guess and pokemon image)~~
2. ~~Pull pokemon info from database and store locally/in cloud one time (so we don't have to make reported calls to api)~~
3. ~~Have frontend and backend communicate to pull image from server/DB and render on screen~~
4. ~~Accept user input for guess and check if correct~~

PFA stretch goals, feel free to continue with these or come up with your own
Stretch:

1. ~~Add a hardmode to make image a silhoutte~~
2. ~~Add local scoreboard~~
3. ~~Add button to start game~~
4. ~~Add sign up/login functionality~~ signup ready on server side, no front end implementation
5. Add game timer
6. Add filter to only generate pokemon by generation (e.g. pokemon 1-150) and/or type (e.g. fire type).
7. Add global scoreboard (check highscores across users)
