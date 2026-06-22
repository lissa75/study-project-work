import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { Component } from 'react';
import './app.css';

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 24,
      position: '',
      inputState: ''
    }
  }

  nextYear = () => {
    console.log("++++")
    this.setState({
      years: this.state.years + 1
    })
  }

  changePosition = (e) => {
    this.setState({
      inputState: e.target.value,
      position: e.target.value
    })
  }

  resetBtn = () => {
    this.setState({
      position: "",
      inputState: ""
    })
  }

  render() {
    const { name, surname } = this.props
    const { years, position, inputState } = this.state
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>qwee</h1>
        <h2>name:{name} surname:{surname} age: {years} position: {position}</h2>
        <input className='input-text' type='text' onChange={this.changePosition} value={inputState} />
        <button onClick={this.resetBtn}>reset</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'qq', salary: 1000, increase: true, like: true, id: 1 },
        { name: 'wwww', salary: 2323, increase: false, like: false, id: 2 },
        { name: 'sss', salary: 11111, increase: false, like: false, id: 3 }
      ],
      term: '',
      filter: ''
    }
  }

  maxId = 4;

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary: Number(salary), 
      increase: false,
      like: false,
      id: this.maxId++ 
    }

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }
  ToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          console.log(id)
          return { ...item, [prop]: !item[prop] }
        }
        return item
      })
    }))
  }

  searchMethod = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  // filterIncrease = (filter, data, term) => {
  //   const visibleData = this.searchMethod(data, term)
  //   if (filter === 'all') {
  //     return visibleData.filter(item => item.increase)
  //   }
  //   if (filter === 'increase') {
  //     return visibleData.filter(item => item.increase)
  //   }
  //   if (filter === 'salary') {
  //     return visibleData.filter(item => item.increase)
  //   }


  

  updateSearch = (term) => {
    this.setState({ term })
  }

  render() {
  const { data, term } = this.state
const visibleData = this.searchMethod(data, term) 

    const employeesCount = data.length;
    const bonusCount = data.filter(item => item.increase).length;


    return (
      <div className="app">
        <AppInfo
          employeesCount={employeesCount}
          bonusCount={bonusCount}

        />
        {/* <Person name='qwe' surname="qwee" />
        <Person name='qwe2' surname="qwee2" /> */}
        <div className="search-panel">
          <SearchPanel
            OnUpdateSearch={this.updateSearch} />
          <AppFilter
            data={visibleData}
            OnFilterIncrease={this.filterIncrease}
          />
        </div>

        {/* Исправлено: addItem={this.OnAddItem} */}
        <EmployeesList

          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.ToggleProp}


        />
        <EmployeesAddForm OnAddItem={this.addItem} />
      </div>
    );
  }

}
export default App;