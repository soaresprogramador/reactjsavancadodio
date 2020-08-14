import React, { Component } from 'react'
import Testando from './Testando'


class App extends Component{

  state = {
    loading: false,   
    actived: true
  }

  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = ()=> {
    this.setState({
      actived: false
    })
  }

  render(){

    const posts = [{
      title: 'testinho',
      description: 'testando'
    },{
      title: 'testinho2',
      description: 'ainda testando'
    }]

    return(
      <div>
      <button onClick={this.onRemove}>Remover componente</button>
      {this.state.actived && (
        <Testando posts={posts} loading={this.state.loading} />
      )}
      </div>      
    )
  }
}

export default App