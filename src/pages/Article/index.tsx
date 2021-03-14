import React, { useEffect, useState } from "react"
import {Container,Info,Article} from "./styles"
import {Link} from "react-router-dom"
import {useAuth} from "../../hooks/AuthContext"

import "react-day-picker/lib/style.css"
import {useToast} from "../../hooks/ToastContext"

import api from "../../services/apiClient"
import Loading from "../../components/Loading"

interface IArticle{
    imgSrc:string
    title:string
    authors:string[]
    description:string
    content:string
    source:string
}

const Room:React.FC = ()=>{
    const {addToast} = useToast()
    const {articleLink} = useAuth()
    const [article,setArticle] = useState<IArticle>()
    const [loading,setLoading] = useState<boolean>(false)

    useEffect(()=>{

        setLoading(true)

        api.post("https://my-yahoo-newsscraper.herokuapp.com/article",{"link":articleLink})
        .then((res)=>{
            setArticle(res.data.article) 
            setLoading(false) 
        })
        .catch(()=>{
            setLoading(false)
            setArticle({} as IArticle)
            addToast({type:"error","title":"could not connect to the server"})
            
        })
    /* eslint-disable react-hooks/exhaustive-deps */
    },[])
      
    return(
        <>
        <Info>
                <div className="container" >
                    
                    <Link to={"/"}>
                        <h1>My<strong>News</strong></h1>    
                    </Link>
                </div>

            </Info>
    
        <Container>
            <Article>
                <main>
                    <h1>{article?.title}</h1>
                    <strong>{}</strong>
                    <div className="img">
                        <img src={article?.imgSrc} alt={article?.title}/>
                    </div>
                    <p >{article?.content}</p>

                    {!!article?.source && 
                        <div className="source">
                            <p>Source:</p>
                            <a href={article.source}><span>{article.source}</span></a>
                        </div>
                    }
                    
                </main>
            </Article>
        </Container>
        {loading && <Loading></Loading>}
        </>
    )
}
export default Room
