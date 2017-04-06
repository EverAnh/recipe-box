## Live version here: http://anhhn1.github.io/recipe-box/

## Description and Features

This is my implementation of the FreeCodeCamp project named "[Build A Recipe Box](https://www.freecodecamp.com/challenges/build-a-recipe-box)". This project is the 3rd one listed under the "React Projects" section, which lists 5 projects in total. My implementation fulfills all of the requirements listed in the FCC description:

* Users can create recipes that have names and ingredients.
* Users can see an index view where the names of all the recipes are visible.
* Users can click into any of those recipes to view it.
* Users can edit these recipes.
* Users can delete these recipes.
* All new recipes are saved in the user's browser's local storage. If the user refreshes the page, these recipes will still be there.

## Instructions To Run It On Your Local Environment

  1. You should already have [NodeJS and NPM](https://nodejs.org/en/) installed and have the PATH variables configured for your operating system.
  2. git clone https://github.com/anhhn1/recipe-box.git
  3. cd recipe-box
  3. npm install
  4. npm start

## Project Structure

This project was built using [create-react-app](https://github.com/facebookincubator/create-react-app) and [react-bootstrap](http://react-bootstrap.github.io/). State is managed with raw React only, due to the small scope of this project.

  * **/public/**:
    * **index.html**: the single page onto which the front-end rendering is done.
  * **/src/**:
    * **index.js**: entry point of the program. It just renders the `App` component onto the `root` div in `index.html`.
    * **/views/**: React components. The bulk of the web app.
      * **App.jsx**: the root component. Stores state for the recipes, including management of local storage. Container for a list of `Recipe` components and manages the `FormModal`.
      * **Recipe.jsx**: an individual recipe in the list. Contains a list of ingredients and buttons to control individual recipe actions. Can be expanded or collapsed.
      * **FormModal.jsx**: the miniature window that pops up for adding and editing recipes. Takes user input via a form.
    * **/css/App.css**: a small amount of custom styling I wrote on top of what react-bootstrap provides. Linked from `App.jsx`.

## Time Logging

Out of curiosity, I tracked my hours spent building this project from start to finish. I also included time spent searching information about things I didn't know. The following table outlines time spent specific tasks:

Feature or Task | Hours
---|---
Unspecified (includes mocking up static version, among other things) | 4.5
research and setup github pages, research accordions and setup Foundation framework again | 1.5
Recipes are collapsed by default | .5
Expand recipe on click | .5
Switching to react-bootstrap, including re-writing previous functionality | 1.5
Researching react forms + implementing the form modal | 2
Add new recipe | 1
Local storage | .5
Delete recipe | .5
Edit recipe | 1.5
Minor fixes and improvements (see git commit) | .5
Clean up unused files, review all reqs, and final deployment | .5
**Total** | **15** hours

[See also: my git commit log](https://github.com/anhhn1/recipe-box/commits/master).

For comparison, FreeCodeCamp estimates that all 5 of their React projects take 200 hours combined. This number implies that each project was estimated to take 40 hours each, on average.
