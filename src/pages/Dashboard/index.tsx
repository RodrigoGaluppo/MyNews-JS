import React, { useEffect, useState,useRef,useCallback} from "react"
import "./Dash.css"
import {Container,Info,Search,ListRooms,User} from "./styles"
import {Link} from "react-router-dom"
import {useAuth} from "../../hooks/AuthContext"
import {FormHandles} from "@unform/core"
import {Form} from "@unform/web"
import {useToast} from "../../hooks/ToastContext"
import {FiSettings} from "react-icons/fi"
import api from "../../services/apiClient"
import SearchInput from "../../components/SearchInput"
import Loading from "../../components/Loading"
import {v4} from "uuid"

interface IArticle{
    
    title:string
    link:string
    imgSrc:string
    timeStamp:string
    source:string
}

const Dashboard:React.FC = ()=>{
    const formRef = useRef<FormHandles>(null)
    //const history = useHistory()
    const {setArticleLink,lang} = useAuth()
    const {addToast} = useToast()
    const [articles,setArticles] = useState<IArticle[]>([])
    const [query,SetQuery] =  useState(()=>{
        if(navigator.language)
        {
            switch(navigator.language)
            {
                case "pt-BR":
                    return "brasil"

                case "pt-PT":
                    return "portugal"

                case "en-US":
                    return "us"
                    
                case "en-UK":
                    return "uk"

                case "fr-FR":
                    return "france"
                
                case "es-ES":
                    return "españa"
            }
        }
        else
            return "news"
    })
    const [loading,setLoading] = useState<boolean>(false)

    const HandleSearch = useCallback((data)=>{
        const Newquery = data.query
        SetQuery(Newquery)
    },[])

    useEffect(()=>{

        setLoading(true)

        api.post("https://my-yahoo-newsscraper.herokuapp.com/yahoonews",{"query":query,"lang":lang})
        .then((res)=>{

            let art = res.data.news

            art = art.filter((article:IArticle)=>(
                !!article.title && !!article.link  && article.imgSrc
            ))

            setArticles(art)  
            
            setLoading(false)
            
        })

        .catch(()=>{
            setArticles([])
            addToast({type:"error","title":"could not connect to the server"})
            setLoading(false)
        })
    
    /* eslint-disable react-hooks/exhaustive-deps */
    },[query])

    return(
        <>
        <Container>
            
            <Info>
                <div className="container" >
                    <h1>My<strong>News</strong></h1>
                    <User><Link to={"/profile"} ><FiSettings size={20} ></FiSettings></Link></User>
                </div>

            </Info>
            <Search>
                <Form ref={formRef} onSubmit={HandleSearch} >
                    <SearchInput  placeholder="Search any news"  name="query" >

                    </SearchInput>
                </Form>
            </Search>
            <ListRooms>
               {articles.map((article)=>(
                   <article className="News" key={article.link}>
                       <Link to={`/view_article/${v4()}`} onClick={()=>{setArticleLink(article.link)}}>
                            <div>
                                <article>
                                    <strong>{article.title}</strong>
                                    <p>{article.timeStamp}</p><span>{article.source}</span>
                                </article>
                                <div className="containerImg">
                                    <img src={article.imgSrc} alt=""/>
                                </div>
                                
                            </div>
                       </Link>
                   </article>
               ))}
            </ListRooms>
            
            
        </Container>
        {loading && <Loading></Loading>}
        </>
    )
}
export default Dashboard