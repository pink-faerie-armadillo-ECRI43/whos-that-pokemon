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
