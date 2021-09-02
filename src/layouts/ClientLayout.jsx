const { Fragment } = require("react")
import HeaderClient from '../components/Header/HeaderClient'
import withLayout from '../hocs/withLayout'
import React from 'react';
function ClientLayout(props){
    return (
        <Fragment>
            <HeaderClient />
            {props.children}
        </Fragment>
    )
}

export default withLayout(ClientLayout)