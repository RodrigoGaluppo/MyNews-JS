import React,{createContext, useCallback,useState,useContext} from "react"

interface IAuthContext{
    articleLink:string
    setArticleLink:(articleUrl:string) => void
    setLanguage:(lang:string) => void
    lang:string
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider:React.FC = ({children})=>{

    const [articleLink, setArticleLink] = useState<string>(()=>{
        const articleUrl = localStorage.getItem("@MyNews:articleLink")
        
        if (articleUrl){
            return articleUrl
        }else{
            return ""
        }
    })

    const [language,setLanguage] = useState<string>(()=>{
        const language = localStorage.getItem("@MyNews:language")
        
        if (language){
            return language
        }else{
            let lang = navigator.language

            lang = lang.split("-")[0] + "-" + lang.split("-")[1].toUpperCase()

            return !!lang ? lang : "en-US"
        }
    })

    const setlanguage = useCallback((lang:string)=>{
        if(localStorage.getItem("@MyNews:language"))
            localStorage.removeItem("@MyNews:language")

        localStorage.setItem("@MyNews:language",lang)
        setLanguage(lang)
    },[])

    const setarticleLink = useCallback((articleUrl:string)=>{
        localStorage.setItem("@MyNews:articleLink",articleUrl)
        setArticleLink(articleUrl)
    },[])

    return(
        <AuthContext.Provider value={{lang:language,articleLink:articleLink,setArticleLink:setarticleLink,setLanguage:setlanguage}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ():IAuthContext=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used within an auth provider")
    }else{
        return context
    }

}
