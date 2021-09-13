import axios from 'axios'
import React,{useReducer,useEffect} from 'react'

const initialState = {
    loadng : true,
    article:{},
    error:''
}


const reducer = (state,action) => {
    switch(action.type) {
        case 'SUCCESS':
            return{
                loadng:false,
                article:action.payload,
                error:''
            }
        case 'ERROR':
            return{
                loadng:false,
                article:{},
                error:'Error in data fetching'
            }
    }
}

function DataFetching() {

    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1/')
        .then(resp =>{
            dispatch({type:'SUCCESS',payload:resp.data})
        })
        .catch(error => {
            dispatch({type:'ERROR'})
        })
    },[])

    return (
        <div>
            {state.loadng ? 'Loading':state.article.body}
            {state.error? state.error:null}
        </div>
    )
}

export default DataFetching
