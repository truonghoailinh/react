import React, { Component } from 'react'
import axios from 'axios';

const testData = [
  {id: '1', name: 'Dan Abramov', avatar_url: 'https://placehold.it/100', company: 'Facebook'},
  {id: '2', name: 'Sophie Alpert', avatar_url: 'https://placehold.it/150', company: 'Facebook'},
  {id: '3', name: 'Linh Truong', avatar_url: 'https://placehold.it/120', company: 'Facebook'}
]

class Form extends Component {
  state = { userName: '' }
  handleSubmit = async (event) => {
    event.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data)
    this.setState({ userName: ''})
  }
  render() { 
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.userName} onChange={event => this.setState({userName: event.target.value})} placeholder='GitHub username' required/>
          <button>ADd Card</button>
        </form>
      </>
    )
  }
}

const ListCard = (props) => (
  <div>
    {props.profiles.map((items, _index) => <Card key={items.id} {...items} />)}
  </div>
)
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
  state = {
    profiles: testData
  }
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  render() { 
    return (
      <>
        <h1>{this.props.title}</h1>
        <Form onSubmit={this.addNewProfile}/>
        <ListCard profiles={this.state.profiles}/>
      </>
    ) 
  }
}
 
export default App;