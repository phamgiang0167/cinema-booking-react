import { DesktopOutlined, FileOutlined, PieChartOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './AdminLayout.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminLayout(props) {
    // path, exact, Component
    const { Component, ...restProps } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed) => {
        //console.log(collapsed);
        setCollapsed(collapsed);
    };

    return (
        <Route
            {...restProps}
            render={(propsRoute) => {
                //console.log(propsRoute); // history, location, match
                return (
                    <Fragment>
                        <Layout style={{ minHeight: '100vh' }}>
                            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                                <div className="logo">
                                    <NavLink to="/admin/">
                                        <img
                                            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                                            alt="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                                        />
                                    </NavLink>
                                </div>
                                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                                        <NavLink to="/admin/users">Users</NavLink>
                                    </Menu.Item>

                                    <SubMenu key="sub1" icon={<DesktopOutlined />} title="Movies">
                                        <Menu.Item key="3">
                                            <NavLink to="/admin/movies">Movies</NavLink>
                                        </Menu.Item>
                                        <Menu.Item key="4">
                                            <NavLink to="/admin/movies/add-movie">
                                                Add Movie
                                            </NavLink>
                                        </Menu.Item>
                                    </SubMenu>

                                    <Menu.Item key="9" icon={<FileOutlined />}>
                                        <NavLink to="/admin/showtimes">Showtimes</NavLink>
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                            <Layout className="site-layout">
                                <Header className="site-layout-background" style={{ padding: 0 }} />
                                <Content style={{ margin: '0 16px' }}>
                                    <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item>User</Breadcrumb.Item>
                                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                    </Breadcrumb>
                                    <div
                                        className="site-layout-background"
                                        style={{ padding: 24, minHeight: 360 }}
                                    >
                                        <Component {...propsRoute} />
                                    </div>
                                </Content>
                                <Footer style={{ textAlign: 'center' }}>
                                    {/* Ant Design ©2018 Created by Ant UED */}
                                </Footer>
                            </Layout>
                        </Layout>
                    </Fragment>
                );
            }}
        />
    );
}

export default AdminLayout;
