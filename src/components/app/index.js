import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const employeeList = [
  {name: 'Brett', title: 'Analyst 1', salary: 65000},
  {name: 'Phil', title: 'Analyst 2', salary: 75000},
  {name: 'Dan', title: 'Analyst 3', salary: 85000},
]

class Employee extends Component {
  render() {
    const {name, title, salary} = this.props
    return(
      <div>
        <h1>{name}</h1>
        <p>Title: {title}</p>
        <p>Salary: {salary}</p>
      </div>
    )
  }
}

class Department extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      hiring: true
    }

    this.toggleHiring = this.toggleHiring.bind(this)
    this.myfunction = this.myfunction.bind(this)
  }

  myfunction() {
    console.log(this.state.hiring)
  }

  toggleHiring() {
    //set state is asynchronous - pass callbacks
    this.setState({
      hiring: !this.state.hiring
    })
  }

  render() {
    const { name, employees } = this.props
    return(
      <div>
        <h1>{name}</h1>
        <button onClick={this.toggleHiring}>Toggle Hiring</button>
        <button onClick={this.myfunction}>Toggle myfunction</button>
        <h2>{this.state.hiring ? 'Department is hiring':'Department is not hiring'}</h2>
        {employees.map(
          (emp, i) => <Employee key={i} name={emp.name} title={emp.title} salary={emp.salary} />
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <Department name="Marketing Department" employees={employeeList} />,
  document.getElementById('target')
)
