import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const { name, salary, increase, like, onDelete, onSalaryChange, onToggleProp } = props;

    let classnames = "list-group-item d-flex justify-content-between";
    if (increase)
        classnames += ' increase';
    if (like)
        classnames += ' like';

    const onSalaryInput = (e) => {
        const digitsStr = e.target.value.replace(/\D/g, '');
        const newSalary = digitsStr === '' ? '' : Number(digitsStr);
        onSalaryChange(newSalary);
    };

    return (
        <li className={classnames}>
            <span className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="like">
                {name}
            </span>
            <input type="text"
                className="list-group-item-input"
                value={salary + '$'}
                onChange={onSalaryInput} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;