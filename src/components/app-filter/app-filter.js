import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        { id: 0, label: 'Все сотрудники' },
        { id: 1, label: 'На повышение' },
        { id: 2, label: 'З/П больше 1000$' }
    ];

    const buttons = buttonsData.map(({ id, label }) => {
        return (
            <button type="button"
                className={`btn ${id === props.filterBtnId ? 'btn-light' : 'btn-outline-light'}`}
                key={id}
                onClick={() => props.onFilterBtnClick(id)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group" >
            {buttons}
        </div>
    );
};

export default AppFilter;