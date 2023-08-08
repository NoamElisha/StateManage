const App = function _App() {
    return `
      <h1>Hello Vanilla JS!</h1>
      <div>
        Example of state management in Vanilla JS
      </div>
      <br />
      <h1>${_App.state.count}</h1>
      <button id="increase">Increase</button>
      <button id="decrease">decrease</button>
    `;
  }; // this screen is represent the user interface of the website
  // the H1 get a counter inside him from the "state"


  App.state = { // this function is used to store the data
    count: 0,
    increment: () => { // the increment fucntion increse the count by 1
      setState(() => App.state.count++);// update the var inside the state
    },
    decrement: () => { 
        setState(() => App.state.count--);
      }
  };

  const setState = (callback) => { //call back is a function
    callback(); // execute the function that we got 
    updateTree(); // call update tree function
  }

  const updateTree = () => {
    document.getElementById("app").innerHTML = App();
    document
      .getElementById("increase")
      .addEventListener("click", App.state.increment);
    document
      .getElementById("decrease")
      .addEventListener("click", App.state.decrement);
  };

  updateTree();