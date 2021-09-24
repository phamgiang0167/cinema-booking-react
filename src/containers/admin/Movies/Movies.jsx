import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Space, Table, Typography } from 'antd';
import React, { Fragment, useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actDeleteMovie, actFetchAllMovie } from './module/action';

const { confirm } = Modal;

const { Search } = Input;
const { Text, Title } = Typography;

function Movies(props) {
    const { movieList } = useSelector((state) => state.movieAdminReducer);

    const dispatch = useDispatch();

    //console.log('danh sach phim: ', movieList);

    useEffect(() => {
        //console.log('re-render movie list');
        dispatch(actFetchAllMovie());
    }, []);

    const showDeleteConfirm = useCallback((maPhim, props) => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(actDeleteMovie(maPhim, props));
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }, []);

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',

            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, movie, index) => {
                return (
                    <Fragment key={movie.maPhim}>
                        <img
                            src={movie.hinhAnh}
                            alt={movie.hinhAnh}
                            width='100'
                            height='100'
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://picsum.photos/id/${index}/100/100`;
                            }}
                        />
                    </Fragment>
                );
            },
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (text, movie) => {
                return (
                    <Fragment key={movie.maPhim}>
                        {movie.moTa.length > 50 ? movie.moTa.substr(0, 50) + '...' : movie.moTa}
                    </Fragment>
                );
            },
        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            render: (text, movie) => {
                const maPhim = movie.maPhim;

                return (
                    <Fragment>
                        <div className='icons-list'>
                            <Space>
                                <NavLink key={1} to={`/admin/movies/edit/${movie.maPhim}`}>
                                    <Text type='success'>
                                        <EditOutlined style={{ fontSize: 20 }} />
                                    </Text>
                                </NavLink>
                                <Text type='danger'>
                                    <DeleteOutlined
                                        style={{ fontSize: 20 }}
                                        onClick={() => showDeleteConfirm(maPhim, props)}
                                    />
                                </Text>
                            </Space>
                        </div>
                    </Fragment>
                );
            },
        },
    ];

    const data = movieList;

    const onSearch = (value) => console.log(value);

    const handleRouteToAddMoive = () => {
        props.history.push('/admin/movies/add-movie');
    };

    return (
        <div>
            <Title level={2}>Quản lý Phim</Title>
            <Button type='primary' onClick={handleRouteToAddMoive}>
                Thêm phim
            </Button>
            <div style={{ margin: '15px 0' }} />
            <Search placeholder='input search text' onSearch={onSearch} enterButton />
            <div style={{ margin: '15px 0' }} />
            <Table columns={columns} dataSource={data} rowKey={'maPhim'} />
        </div>
    );
}

export default Movies;
