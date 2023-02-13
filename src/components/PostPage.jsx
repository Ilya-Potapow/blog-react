import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postRequest } from '../API/PostServise'
import { UseFetching } from '../hooks/useFetching'
import Loader from './UI/loader/Loader'
const PostPage = () => {
    const params = useParams()
    const[post, setPost] = useState({})
    const[comm, setComm] = useState([])
    const [fetchPostById, loading, error] = UseFetching(async()=>{
        const response = await postRequest.getPostById(params.id)
        setPost(response.data)
    })
    const [fetchCommById, commLoading, commError] = UseFetching(async()=>{
        const response = await postRequest.getCommById(params.id)
        setComm(response.data)
    })
    
    useEffect(() => {
        fetchPostById(params.id)
        fetchCommById(params.id)
    }, [])


  return (
    <div>
        {loading
            ?<Loader/>
            :<div>
                <h1>{post.id}.{post.title}</h1>
                <p>{post.body}</p>
             </div>
        }
        {commLoading
        ?<Loader/>
        :comm.map( c => (
            <div key={c.id} style={{color: 'grey', marginTop: '15px'}}>
                <h4>{c.email}</h4>
                <div>{c.body}</div>
            </div>
        ))}
        
    </div>
  )
}

export default PostPage