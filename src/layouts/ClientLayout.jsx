const { Fragment } = require("react")
import HeaderClient from '../components/Header/Client/HeaderClient'
import withLayout from '../hocs/withLayout'
import React from 'react';
import { Suspense } from 'react'
import FooterClient from 'components/Footer/FooterClient';
import Loader from 'components/Loader/Loader';
function ClientLayout(props){
    // console.log(props)
    return (
        <Fragment>
            <HeaderClient history={props.children.props.history}/>
            <Suspense 
                fallback={<Loader />}>
                {props.children}
            </Suspense>
            <FooterClient />
        </Fragment>
    )
}

export default withLayout(ClientLayout)