import React, { useState, useEffect } from 'react'
//import Testando from './Testando'
import { ThemeContext, themes } from './Theme'
import Card from './Card'


function App () {
    const[token, setToken] = useState()

    useEffect(() => {
        
        setTimeout(() =>{
            setToken('5465123132654312564')
        }, 4000)
    },[setToken])

    return (
        <ThemeContext.Provider value={{...themes.primary, token}}>
            <Card/>
        </ThemeContext.Provider>
    )
}

export default App





/* class App extends Component{

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
} */