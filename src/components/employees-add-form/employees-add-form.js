import { Component } from 'react';
import { Wrapper } from '../app/app'
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errorName: '',
            errorSalary: ''
        };
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { name, salary } = this.state;

        let errorName = '';
        let errorSalary = '';

        if (name.trim().length < 3) {
            errorName = 'Имя должно быть не короче 3 символов';
        };

        if (Number(salary) <= 0) {
            errorSalary = 'Зарплата должна быть больше 0';
        };

        if (errorName || errorSalary) {
            this.setState({ errorName, errorSalary });
            return;
        };

        this.props.onSubmit(name, Number(salary));
        this.setState({
            name: '',
            salary: '',
            errorName: '',
            errorSalary: ''
        });
    };

    render() {
        const { name, salary, errorName, errorSalary } = this.state;
        return (
            <Wrapper>
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex align-items-start"
                    onSubmit={this.onSubmit}>

                    <div className="d-flex flex-column">
                        <input type="text"
                            className={`form-control new-post-label ${errorName ? 'is-invalid' : ''}`}
                            placeholder="Как его зовут?"
                            name="name"
                            value={name}
                            onChange={this.onValueChange}
                        />
                        {errorName && <div className="text-danger small mt-1">{errorName}</div>}
                    </div>

                    <div className="d-flex flex-column">
                        <input type="number"
                            className={`form-control new-post-label ${errorSalary ? 'is-invalid' : ''}`}
                            placeholder="З/П в $?"
                            name="salary"
                            value={salary}
                            onChange={this.onValueChange}
                        />
                        {errorSalary && <div className="text-danger small mt-1">{errorSalary}</div>}
                    </div>

                    <button type="submit"
                        className="btn btn-outline-light">Добавить
                    </button>
                </form >
            </Wrapper >
        );
    };
};

export default EmployeesAddForm;