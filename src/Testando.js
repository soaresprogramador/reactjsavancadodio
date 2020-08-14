import React, { Component } from 'react'

class Testando extends Component{

    state={
        tentativa: 'title'
    }

    componentDidMount(){
        const { posts, loading } = this.props
        console.log('componentDidMount', posts)
        console.log('componentDidMount:loading', loading)
    }

    componentDidUpdate(prevProps){
        const { loading } = this.props
        if(this.props.loading !== prevProps.loading){
            console.log('componentDidUpdate:loading', loading )
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount : desmontado')
    }

    shouldComponentUpdate(nextProps, nextstate){
        return this.state.tentativa !== nextstate.tentativa // || nextProps.loading !== this.props.loading
    }

    tentativa = () => {
        this.setState({
            tentativa:true
        })
    }


    render(){        
        const { posts } = this.props
        console.log('render', posts)
        return(
        <div>
            <button onClick={this.tentativa}>Re render</button>
            Teste Montado
        </div>
        )
    } 
}

export default Testando