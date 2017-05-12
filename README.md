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
After it's done you can go ahead and change directories into the newly created app. Type the following into your terminal.
```
cd audio-visuals
```

Then open up the directory in your favorite text editor. \(I use Atom\) You can open it up from the terminal by typing
```
atom .
```
If you see an error that says atom is not a command then go to atom and look at the top menu bar. Click the drop down that says Atom and look for Install shell commands. Click that and you should now be able to use the atom command in your terminal.  


![Atom menu example](http://i68.tinypic.com/avhjz7.png)



The file structure will look like this:  
![File structure example](http://i64.tinypic.com/keao0i.png)
<!-- ```
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
``` -->
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
Now inside the main div we will insert an audio tag, with whatever song you'd like. I'm going to use sublime!

now the App Component should look like this:

```
class App extends Component {
  render() {
    return (
      <div className="App">
      <audio
          ref="audio"
          autoPlay={true}
          controls={true}
          src="https://p.scdn.co/mp3-preview/e4a8f30ca62b4d2a129cc4df76de66f43e12fa3f?cid=null"
          >
          </audio>
      </div>
    );
  }
}
```

As you can see we have set a few attributes on the audio tag, including the ref attribute. This is so we can reference the tag in a method we will write on our component later on. [Learn more about the red attribute here!](https://facebook.github.io/react/docs/refs-and-the-dom.html)

You can now run npm start in your terminal and see the audio tag. Mine looks like this:  


![First website test](http://i67.tinypic.com/11t5sv8.png)  

Go back to atom or your text editor and add a canvas tag underneath the audio tag. Add a ref attribute of "analyzerCanvas" and an id of "analyzer". I've also added a couple divs with specific Ids so we can reference them later. Your app component should look like this now:

```
class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Sublime - 40oz to Freedom</h2>
                <div id="mp3_player">
                    <div id="audio_box">
                        <audio
                            ref="audio"
                            autoPlay={true}
                            controls={true}
                            src={"https://p.scdn.co/mp3-preview/e4a8f30ca62b4d2a129cc4df76de66f43e12fa3f?cid=null"}
                            >
                            </audio>
                            <canvas
                                ref="analyzerCanvas"
                                id="analyzer"
                                >
                                </canvas>
                        </div>
                    </div>
                </div>
            );
        }
    }
```
