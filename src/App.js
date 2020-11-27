import { Component } from 'react';
import './App.css';


class App extends Component {
  state = {

      task: "",
      timeDate: "",
      list: [],
      templist:[],
    
 
  }

  

handleInput = (event) => {
      this.setState({ task: event.target.value });

  }
  handleInput2 = (event) => {

      this.setState({ timeDate: event.target.value });
  }



  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.task, this.state.timeDate],
      task: "", timeDate: "",
    });
  };

  handleClick = (list) => {
    const tempList = [...this.state.list];
    tempList.splice(list,1)
    this.setState({list: tempList})

  }

  


  render() {
      return (
          <div className="container">
              <h1>TASK {this.state.task}</h1>
              <h1>TIME/DATE/REMINDER  {this.state.timeDate}</h1>
              <form onSubmit={this.handleSubmit}>
                  <div>
                      <label> Task: </label>
                      <input
                          onChange={this.handleInput}
                          type="text" 
                          value={this.state.task}
                      />
                  </div>
                  <div>
                      <label>TimeDateReminder: </label>
                      <input
                          onChange={this.handleInput2}
                          type="text"
                          value={this.state.timeDate}

                      />
                  </div>
                  <button type="submit">ADD TASK</button>
                  
              </form>
              <button onClick={this.handleClick}>DELETE TASK</button>
          <div>
            {this.state.list.map((item) => {
              return <li>{item}</li>





                // <div className='list-item'>
                //  {this.state.timeDate}
                //   <button class="delete">delete</button>
                // </div>



              
            })}
          </div>
          </div>
      )
  }


}
export default App;



//  <li>{item}</li>


  