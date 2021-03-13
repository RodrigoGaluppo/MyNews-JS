import React, { useCallback,useRef } from "react"
import {Container,Info,Text,Search} from "./styles"
import {Link} from "react-router-dom"
import {useAuth} from "../../hooks/AuthContext"
import "react-day-picker/lib/style.css"
import {useToast} from "../../hooks/ToastContext"
import Input from '../../components/Input'
import {FiUser} from "react-icons/fi"
import {FormHandles} from "@unform/core"
import {Form} from "@unform/web"

import Button from '../../components/Button'

const normalizeCardNumber = (value:string)=>{
    value = value.replace(/\d/g,"")
    value = value.replace(/^(\W{2})(\W{2})/g,"$1-$2")
    return value
}

const Config:React.FC = ()=>{
    const {addToast} = useToast()

    const {setLanguage,lang} = useAuth()
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback((data)=>{
        if(!!data.language &&  data.language !== "")
        {
            if(!data.language.match(/[a-z]{2}-[A-Z]{2}/))
            {
                addToast({"type":"error","title":"could not update the language","description":"it must have the format like 'en-US' "})
                return
            }
            setLanguage(data.language)
            addToast({"type":"success","title":"your searching language was succesfully updated","description":"now you will search by news in this language' "})
        }
    },[addToast,setLanguage])

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
            <Search>
                <Text><h1>Searching Language</h1></Text>
                <Form ref={formRef} onSubmit={handleSubmit} >
                    
                    <Input name="language" defaultValue={lang} onChange={(e)=>{
                        e.currentTarget.maxLength=5
                        let value = e.currentTarget.value
                        e.currentTarget.value = normalizeCardNumber(value)
                    }} icon={FiUser}  ></Input>
                    <Button>Update</Button>

                    
                </Form>
            </Search>
            <Text>
                <h1>What is the MyNews app ? </h1>
                <p> it is a news indexer made to show you the best and trending top news showing filtered news scraped on-line </p>
            </Text>
        </Container>
        
        </>
    )
}
export default Config
