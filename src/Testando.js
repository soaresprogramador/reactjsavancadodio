import React, { useEffect, useState, memo } from 'react'

//evita re render
const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}

function Testando(props) {

    const { loading } = props
    const [tentativa, setTentativa] = useState('title')

    //componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log('componentDidMount', posts)
        console.log('componentDidMount:loading', loading)
    }, [props])

    //componentDidUpdate
    useEffect(()=>{
        console.log('componentDidUpdate', loading)
    }, [loading])

    //componentWillUnmount
    useEffect(()=> {
        return () => {
            console.log('componentWillUnmount : desmontado')
        }
    },[])

    const handleTentativa = () => {
        setTentativa('Tentativa atualizada') 
    }
           
  
    console.log('Tentativa 1', tentativa)
    return (
    <div>
       {<button onClick={handleTentativa}>Re render</button>}
        Teste Montado
    </div>
    )
    
}

export default memo (Testando, areEqual)