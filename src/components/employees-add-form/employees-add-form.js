import './employees-add-form.scss';
import { Component } from 'react';
import App from '../app/app';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            salary: ''
        }
    }
    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    onSubmit = (e) => {
          e.preventDefault()
        if (this.state.name === '' && this.state.salary === '') {
            alert('заполните все поля')
            return
        }
        this.props.OnAddItem(this.state.name, this.state.salary)
        this.setState(
            {
                name: '',
                salary: ''
            }
        )
    }

    render() {

        const { OnAddItem } = this.props
        const { name, salary } = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onInput} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onInput} />

                    <button type="submit"
                        className="btn btn-outline-light" >Добавить</button>
                </form>

            </div>
        )
    }
}

export default EmployeesAddForm;