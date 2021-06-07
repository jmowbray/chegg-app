# Jim Mowbray's Chegg Challenge

A live version is being hosted via GitHub Pages at https://jmowbray.github.io/chegg-app, if you don't want to build or run locally. The easiest way to see it in action is to just type in an organization like 'reactjs' and click 'Load Repositories'

As with any take-home challenge, it's difficult to know where to draw the line and stop working on something, so I would be happy do discuss anything that seems unfinished or unpolished. I'll also ask forgiveness on things that may seem inconsistent. I may have changed how I was doing something and didn't touch every single instance of it. My main goal was to complete the assignment and have it completely working without spending too much time on it, which is the case. Secondary was the look-and-feel of it all, which could be refined later.

I know the assignment mentioned that a list of repositories should be presented and _then_ upon selecting one, it would change to a split-view, but I thought it was simpler to just keep it as a split-view the entire time. I didn't see a lot of value in having the repositories listed alone if they'd also be listed with the issues once loaded. Just my opinion, of course.


## Implementing custom sort order of issues
Re-ordering of issues is done by simply dragging-and-dropping issues in the displayed list. I didn't create a confirmation of the re-ordering, but it happens once you stop dragging and the order is set. Refreshing the browser should maintain the desired order.

This was handled by just creating a map of "desired indices" of issues for a repository and saving it to local storage whenever an issue was re-ordered. Upon loading a repository again, local storage is checked for such an entry and the sorting priority is given to any issue that has a "desired index" - anything that doesn't have a desired index is sorted by created_at date descending.

If I were to implement this on the backend, the logic shouldn't change much, but there'd be some additional considerations. For example, you may not want to keep "stale" issueIds around in the persistent store (or maybe you would?) Obv

  

## Available Scripts

  

In the project directory, you can run:

  

### `yarn start`

  

Runs the app in the development mode.\

Open [http://localhost:3000/chegg-app](http://localhost:3000/chegg-app) to view it in the browser.

  

The page will reload if you make edits.\

You will also see any lint errors in the console.

  

### `yarn test`

  

Runs the Jest unit tests