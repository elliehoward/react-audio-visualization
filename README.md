# react-audio-visualization

This tutorial is for creating an audio visualization in React with the web audio API.

The first thing we need to do is download create-react-app to get our react boilerplate. [Here are the docs if you want to learn more.](https://github.com/facebookincubator/create-react-app)
Type the following into your terminal:

```
npm install -g create-react-app
```

Then we can create our app by typing this command followed by the name of your application. I called mine audio-visuals in this example. Type the following into your terminal:


```
create-react-app audio-visuals
```

This may take a moment...

Then open up the directory in your favorite text editor. \(I use Atom\)
The file structure will look like this:
```
audio-visuals/
  README.md
  node_modules/
  package.json
  .gitignore
  public/
    favicon.ico
    index.html
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
Navigate to audio-visuals/src/App.js
 you should see this in the file:

```
 import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';

 class App extends Component {
   render() {
     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
         </div>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
       </div>
     );
   }
 }

 export default App;
```
 You can delete some lines and leave it looking like this, or just paste the following code over it.

 ```
 import React, { Component } from 'react';
 import './App.css';

 class App extends Component {
   render() {
     return (
       <div className="App">
       </div>
     );
   }
 }

 export default App;
 ```
