import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = (props) => {
    let {component:RouteComponent,path} = props
    return (
        <Route path={path} render={
            (routeProps)=>(
                localStorage.getItem('login') ? <RouteComponent {...routeProps} />:
                <Redirect to={{pathname:'/login',state:{from:path}}} />
            )
        }>

        </Route>
    )
}

export default Protected