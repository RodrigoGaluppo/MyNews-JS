import React from "react"
import {RouteProps as RProps,Route as ReactDomRoute,Redirect} from "react-router-dom"

interface RouteProps extends RProps{
    isPrivate ?: boolean
    component:React.ComponentType
}

const Route:React.FC<RouteProps> = ({isPrivate = false,component:Component,...rest})=>{

    return(
        <ReactDomRoute 
        {...rest} 
        render={()=>{
            return !!Component ? (<Component></Component>) : (<Redirect to="/" ></Redirect>)
        }}>
            
        </ReactDomRoute>
    )
}
export default Route