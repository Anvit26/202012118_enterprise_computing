# 202012118_enterprise_computing

* Lab0 *

- The state of election is stored in three objects candidates, votes and casted. They get updated when any respective event occurs on them. As it is not connected with databse, data does not persist when server starts.
- The code is divided into two main group view and controller.

0)Execution
- npm i (to install dependencies).
- node index.js (to run backend code).
- Open home.html to view list of service.

1)Controller
- Controller contains all the busineess logic of code using which front-end is communicating with backend,in index.js business logic of all funcanality is written in seprate function, using which they are all independent from each other.

- /getcandidates (GET) route is used to get all the candidate for whom user can cast vote.
- /castVote (POST) route is used to cast vote it takes two parameters candidate and name to cast vote.
- /addcandidates (POST) route is used to add candidate in election.
- /getResult (GET) route is used to return result of winner and intermediat winner.
- /getReport (GET) route is used to get report of the election it will return all the participants result.

2)View
- In the view diractory each page is representin the functions.
- From home.html user can list of all the path where user can redirect.
- From addCandidate.html user can add new candidate, where he has to add new user in text box.
- From vote.html user can cast his vote, for voting user has to enter his/her name and select his/her choice, if he/she had alredy done it his/her vote is not counted. 
- From result.html user can see the final result of the election.
- From summaray.html user can see result of all the candidate.  