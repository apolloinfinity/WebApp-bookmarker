# WepApp-bookmarker built with Node/Express backend

The original project is based on Brad Traversy's [Bookmarker project](https://youtu.be/DIVfDZZeGxM) on YouTube.
As always, Brad encourages his viewers to make the project their own and I have done that by implimenting this app with a Node/Express Backend. The original project with updated ES6 syntax is in the vanilla-js branch.

## The API Endpoints

### Things I have added.

- Custom logger. Used the code from a tutorial found [Here](https://codesource.io/creating-a-logging-middleware-in-expressjs/). The logger uses chalk to pretty up the log and creates a .txt file of all request.

#### Get this project running.

- Create a config directory with a file called db.js.
- Connect to your MongoDB instance
- In the command line type "npm start"

- [Not the most "React"ive way to handle clear forms but it works](https://stackoverflow.com/questions/52504275/reset-form-input-values-in-react)