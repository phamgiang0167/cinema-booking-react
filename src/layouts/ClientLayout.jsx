const { Fragment } = require("react")
import HeaderClient from '../components/Header/Client/HeaderClient'
import withLayout from '../hocs/withLayout'
import React from 'react';
import { Suspense } from 'react'
function ClientLayout(props){
    // console.log(props)
    return (
        <Fragment>
            <HeaderClient history={props.children.props.history}/>
            <Suspense 
                fallback={
                    <div 
                        class="lazyr" 
                        style={{width: "100%", height: "100vh"}}
                    >
                            <img 
                                src="/images/lazy.gif" alt="loading" 
                                style={{width: "100px", height: "100px", margin: "auto auto"}}/>
                    </div>}>
                {props.children}
            </Suspense>
        </Fragment>
    )
}

export default withLayout(ClientLayout)