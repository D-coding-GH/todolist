import { Component } from 'react';
import './App.css';


class App extends Component {

  state = {///......create the state you want to pass around the app here, the variable

      task: "",
      // timeDate: "",
      list: [],
      templist:[],
    
 
  }

  

handleInput = (event) => {//......function created to update the state
      this.setState({ task: event.target.value });//......target te sate you want to update, value bring the data entered, eg name of task

  }
  // handleInput2 = (event) => {//.....need to double check were this timedate was removed from

  //     this.setState({ timeDate: event.target.value });
  // }



  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.task,],/////it was removed from here 
      task: "", 
    });
  };

  // timeDate: "",

  deleteTask = (index) => {
    console.log("deleting a task " + index);
    const filterTask = this.state.list.filter((task, taskIndex) => {
      return taskIndex != index
    }
    )
    this.setState({
      list: filterTask
    })
  }

  


  render() {

    
    
    return (

     <div className="container1">
        <div className="container2">
        <h1 className="todolist"  >TO DO LIST {this.state.task}</h1>
        {/* <h1>TIME/DATE/REMINDER  {this.state.timeDate}</h1> */}
        <form className="submit" onSubmit={this.handleSubmit}>
          <div className="submit2" >
            <h2 className="submittext">WHATS TO DO</h2>
            <label className="task"></label>
            <input className="submitP"
              onChange={this.handleInput}
              type="text"
              value={this.state.task}
            />
          </div>
          <div>
            {/* <label> TimeDateReminder: </label>
            <input
              onChange={this.handleInput2}
              type="text"
              value={this.state.timeDate}

            /> */}
          </div>


          <button className="submitB" type="submit" >ADD TASK</button>




        </form>
        <div  >
          {this.state.list.map((item, i) => {
            return (
              <ul>
              <li className="thelist" >{item} <button onClick={() => this.deleteTask(i)}   >DELETE</button> </li>
              </ul>
            )///.............apply the delete function and state to button with onclick, attach button within list
          })}
        </div>

      </div>
    </div> 
    )
  }


}

export default App;



{/* <div>
          {this.state.list.map(() => {

            return (
             <div className='list-item'>
              {this.handleInput2}{this.handleInput}
              <button class="delete" onClick={this.handleClick} > delete  </button>
            </div>
            
          )})}
        </div> */}