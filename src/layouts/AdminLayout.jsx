import HeaderAdmin from '../components/Header/HeaderAdmin'
import FooterAdmin from '../components/Footer/FooterAdmin'
import withLayout from '../hocs/withLayout'
import React from 'react';
const { Fragment } = require("react")
function AdminLayout(props){
    return (
        <Fragment>
            <HeaderAdmin />
            {props.children}
            <FooterAdmin />
        </Fragment>
    )
}

export default withLayout(AdminLayout)