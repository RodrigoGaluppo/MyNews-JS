import React from "react"
import { Switch} from "react-router-dom"
import Route from "./Routes"
import Dashboard from "../pages/Dashboard"
import Article from "../pages/Article"
import Profile from "../pages/Profile"



const Routes:React.FC = ()=>(
    <Switch>
        <Route path="/" exact component={Dashboard} ></Route>
        <Route path="/view_article/:article_link" isPrivate component={Article} ></Route>
        <Route path="/profile"  component={Profile} ></Route>
    </Switch>
)

export default Routes