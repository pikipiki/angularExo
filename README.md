#AngularJS test

- Install packages                   : "npm install yarn; yarn install"
- To compile and launch server       : "npm start"
- Build Dev                          : "npm run dev"
- Build Prod                         : "npm run build"
- My work is on the branch 'develop' : git checkout develop

- To configure the hang game, take a look at './src/app/app.constant.js',
you can change the length of the word to guess, and set the number of trials you want

- To display the right answer in the console, see the file:
'./src/app/components/container/container.components.js'
and uncomment the line 100 :

console.log(this.countrySplittedByLetter)
