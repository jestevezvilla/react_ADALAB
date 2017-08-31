
import React, { Component } from 'react';

class StarWars extends Component {
  constructor(){
    super();
    this.state = {
      people: [],
      filter: ''
    }
  }
  
  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then((response) => response.json())
      .then( ({results: items}) => this.handlePromise(items));
  }

  handlePromise(people){
    this.setState({people})
  }

  componentWillUnmount() {
    this.handlePromise = () => console.log('unmounted component');
  }
  

  search(e){

    this.setState({filter: e.target.value});

  }

  render() {

    //let people = this.state.people;
    let {people} = this.state;

    if(this.state.filter){
      people = people.filter((item) =>
                      item.name.toLowerCase()
                         .includes(this.state.filter.toLowerCase()));
    }

    return (
      <div>
        <input type="text" onChange={this.search.bind(this)}/>
        {people.map( (person) => 
          <Person key={person.name} person={person} />
        )}
      </div>
    );
  }
}

const Person = (props) => (<p>{props.person.name}</p>);

export default StarWars;