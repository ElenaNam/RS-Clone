# RS-Clone
Front End application

Technologies used
* React single page application
* Routing done using React Router
* State management via Redux
* Typescript
* Eslint
* hooks

---

**Setup**
Clone the repository and install the dependencies
*npm install*

Start the frontend application locally
*npm start*
... [add other steps here]

---

**Available commands**
npm start: Start the app locally in your development environment, by default it will be in http://localhost:3000.
npm test: Run tests using watch mode.
npm lint: Run linter.
... [add other commands here]

---

**Development flow**
Here are the steps of the process you need to follow in order to integrate new code or a new feature into the project:

Transition the status of the card that describes the feature you will be working on in your issue tracker.
Create a local branch to get started using git: git checkout -b <feature|bug|enhancement|doc>/<issue-tracker-number>-<short-description>. For instance, this could be a branch name: feature/96-add-navigation-sidebar.
The first part indicates whether it is new feature, bug or documentation, while the second part it is just the issue tracker card number followed by some short description.
Develop the new feature while doing atomic commits to your local branch using git commit.
After you are done, you might want to do a git rebase develop in case new changes were integrated, so your new commits are applied on top of that and you make sure everything still works.
Before creating the Pull Request, you need to make sure the tests pass (npm test).
Now you are ready to create a new Pull Request with your changes, but before, push your changes to origin using git push -u origin <your-branch-name>.
Your code should be reviewed, you can update the branch with new changes after you get some feedback.
After the Pull Request is approved, merge it using the UI on Github (you can also remove the branch directly from the same page, which is also convenient). Your code will land to the develop branch (and eventually deployed into the staging environment).
Finally, remember to transition your issue tracker card to Done.

**Linter**
In order to lint the code, the project uses ESLint, which is provided by Create React App.

If you want to run the linter just type:

*npm lint*
It's also convenient to integrate the linter warnings into your code editor, there are many plugins available for ESLint depending on your text editor used.


**Routes**
This project is using react-router-dom v5, have a look at Routes.jsx which is the file that defines the routes that are available.

**State management**
Redux, React Context 


Deployment

https://elenanam.github.io/RS-Clone/cloneWars/
