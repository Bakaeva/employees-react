import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: true, like: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: false, like: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, like: false, id: 3 }
      ],
      term: '',
      filterBtnId: 0
    };
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(elem => elem.id !== id)
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: nextId()
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(elem => (elem.id !== id) ? elem : { ...elem, [prop]: !elem[prop] })
    }));
  };

  searchEmployeers = (items, term) => {
    if (term.length === 0)
      return items;

    return items.filter(item => item.name.indexOf(term) > -1);
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterEmployeers = (items, btnId) => {
    switch (btnId) {
      case 1: // На повышение
        return items.filter(item => item.like);
      case 2: // З/П больше 1000$
        return items.filter(item => item.salary > 1000);
      case 0: // Все сотрудники
      default:
        return items;
    };
  };

  onFilterBtnClick = (btnId) => {
    this.setState({ filterBtnId: btnId });
  };

  render() {
    const { data, term, filterBtnId } = this.state;
    const visibleData = this.filterEmployeers(this.searchEmployeers(data, term), filterBtnId);

    return (
      <div className="app" >
        <AppInfo
          total={data.length}
          increased={data.filter(elem => elem.increase).length} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            filterBtnId={filterBtnId}
            onFilterBtnClick={this.onFilterBtnClick}
          />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm
          onSubmit={this.addItem} />
      </div>
    );
  };
}

export default App;
