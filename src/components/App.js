import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          fruit: [],
          filters: [],
          currentFilter: null
        };
    }

    componentWillMount() {
      this.fetchFilters();
      this.fetchItems();
    }

    fetchItems = () => {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(items => this.setState({ items }));
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

    handleFilterChange = event => {
      console.log('new filter: ', event.target.value);
      this.setState({ currentFilter: event.target.value });
    }

    render () {
      return (
        <FruitBasket
          items={this.state.items}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}
          handleFilterChange={this.handleFilterChange}
        />
      )
    }

}

export default App;
