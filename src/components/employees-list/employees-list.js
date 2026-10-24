import styled from 'styled-components';
import EmployeesListItem from "../employees-list-item/employees-list-item";
import { Wrapper } from '../app/app'

const EmployeesList = ({ data, onDelete, onSalaryChange, onToggleProp }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onSalaryChange={(newSalary) => onSalaryChange(id, newSalary)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        );
    });

    const ListWrapper = styled(Wrapper)`
      padding: 0;
    `;

    return (
        <ListWrapper>
            <ul className="list-group">
                {elements}
            </ul>
        </ListWrapper>
    );
};

export default EmployeesList;