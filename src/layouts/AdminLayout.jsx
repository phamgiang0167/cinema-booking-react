const { Fragment } = require("react")
import HeaderAdmin from '../components/Header/HeaderAdmin'
import FooterAdmin from '../components/Footer/FooterAdmin'
import withLayout from '../hocs/withLayout'
import React from 'react';
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