import React,{useState,useEffect} from 'react'
import axios from 'axios';

function FetchData() {

    // const [articles,setArticles] = useState([])
    const [article,setArticle] = useState([])
    const [id,setId] = useState(1)


    // useEffect(()=>{
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    //     .then(resp=>{
    //         console.log(resp.data)
    //         setArticles(resp.data)
    //     })
    //     .catch(error=>console.log(error))
    // },[])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp=>{
            console.log(resp.data)
            setArticle(resp.data)
        },[id])
        .catch(error=>console.log(error))
    })

    return (
        <div>
            {/* {articles.map(article => (
                <h3 key={article.id}>{article.title}</h3>
            ))} */}

            <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
            <h3>{article.title}</h3>

        </div>
    )
}

export default FetchData
