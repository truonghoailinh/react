import React, { Component } from 'react'

const testData = [
  {id: '1', name: 'Dan Abramov', avatar_url: 'https://placehold.it/100', company: 'Facebook'},
  {id: '2', name: 'Sophie Alpert', avatar_url: 'https://placehold.it/150', company: 'Facebook'},
  {id: '3', name: 'Linh Truong', avatar_url: 'https://placehold.it/120', company: 'Facebook'}
]

class ListCard extends Component {
  render() { 
    return (
      <>
        {testData.map((items, _index) => <Card key={items.id} {...items} />)}
      </>
    )
  }
}
class Card extends Component {
  render() { 
    const items = this.props
    return (
      <>
        <div className='github-profile' style={{ margin: '1rem', textAlign: 'left'}}>
          <img src={items.avatar_url} style={{ width: '75px' }} />
          <div className="info" style={{ display: 'inline-block', marginLeft: 10, fontWeight: 'bold', verticalAlign: 'top' }}>
              <div className="name" style={{ fontSize: '125%', fontWeight: 'bold' }}>{items.name}</div>
              <div className="company">{items.company}</div>
          </div>
        </div>
      </>
    )
  }
}
class App extends Component { 
  render() { 
    return (
      <>
        <h1>{this.props.title}</h1>
        <ListCard />
      </>
    ) 
  }
}
 
export default App;