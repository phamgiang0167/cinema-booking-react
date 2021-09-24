import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    message,
    Radio,
    Switch,
    Typography,
    Upload,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actEditMovieInfo, actFetchAllMovie, actFetchMovieInfo } from '../module/action';
import { GROUP_ID } from 'settings/apiConfig';

const { Title } = Typography;

const dateFormat = 'DD-MM-YYYY';

function EditMovie(props) {
    const [componentSize, setComponentSize] = useState('default');
    const [imageUrl, setSrcImg] = useState('');

    const dispatch = useDispatch();
    const { movieInfo } = useSelector((state) => state.movieAdminReducer);

    useEffect(() => {
        let { id } = props.match.params;
        dispatch(actFetchMovieInfo(id));
    }, []);

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: movieInfo.maPhim,
            tenPhim: movieInfo.tenPhim,
            trailer: movieInfo.trailer,
            moTa: movieInfo.moTa,
            ngayKhoiChieu: movieInfo.ngayKhoiChieu,
            sapChieu: movieInfo.sapChieu,
            dangChieu: movieInfo.dangChieu,
            hot: movieInfo.hot,
            danhGia: movieInfo.danhGia,
            maNhom: GROUP_ID,
            hinhAnh: null,
        },
        onSubmit: (values) => {
            console.log('values', values);
            let formData = new FormData();
            //console.log('values', values);
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name);
                    }
                }
            }
            /** 
            console.log(formData.get('maPhim'));
            console.log(formData.get('tenPhim'));
            console.log(formData.get('trailer'));
            console.log(formData.get('moTa'));
            console.log(formData.get('maPhim'));
            console.log(formData.get('ngayKhoiChieu'));
            console.log(formData.get('sapChieu'));
            console.log(formData.get('dangChieu'));
            console.log(formData.get('hot'));
            console.log(formData.get('danhGia'));
            console.log(formData.get('maNhom'));
            console.log(formData.get('File'));
            */

            dispatch(actEditMovieInfo(formData, props));
        },
    });

    const handleChangeDatePicker = (value) => {
        // Use moment library to change moment object to string
        //console.log("value", moment(value).format("DD/MM/YYYY"));
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
    };

    // handle callback function to dynamic name props in <Switch name=""/> by closer function
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        };
    };

    const handleFileChange = async (e) => {
        //console.log(e);
        // get a file object in FileList
        let file = e.target.files[0] || '';
        // create a FileReader object to read file
        let readerFile = new FileReader();
        // get url from file passed
        if (file && file.type.match('image.*')) {
            // set file data into formik
            await formik.setFieldValue('hinhAnh', file);
            readerFile.readAsDataURL(file);
            // create a event by onload function to get result base64 image
            readerFile.onload = (e) => {
                setSrcImg(e.target.result || '');
            };
        }
    };

    return (
        <div>
            <Title level={3}>Thông tin phim</Title>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                onSubmitCapture={formik.handleSubmit}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim:">
                    <Input
                        name="tenPhim"
                        onChange={formik.handleChange}
                        value={formik.values.tenPhim}
                    />
                </Form.Item>
                <Form.Item label="Trailer:">
                    <Input
                        name="trailer"
                        onChange={formik.handleChange}
                        value={formik.values.trailer}
                    />
                </Form.Item>
                <Form.Item label="Mô tả:">
                    <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker
                        value={moment(
                            formik.values.ngayKhoiChieu && formik.values.ngayKhoiChieu.slice(0, 10),
                            dateFormat
                        )}
                        format={dateFormat}
                        onChange={handleChangeDatePicker}
                    />
                </Form.Item>
                <Form.Item label="Đang chiếu:" valuePropName="checked">
                    <Switch
                        onChange={handleChangeSwitch('dangChieu')}
                        checked={formik.values.dangChieu}
                    />
                </Form.Item>
                <Form.Item label="Sắp chiếu:" valuePropName="checked">
                    <Switch
                        onChange={handleChangeSwitch('sapChieu')}
                        checked={formik.values.sapChieu}
                    />
                </Form.Item>
                <Form.Item label="Hot:" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label="Số sao:">
                    <InputNumber
                        onChange={handleChangeInputNumber('danhGia')}
                        min={1}
                        max={10}
                        value={formik.values.danhGia}
                    />
                </Form.Item>

                <Form.Item label="Hình ảnh">
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    <br />
                    <img
                        src={!imageUrl ? movieInfo.hinhAnh : imageUrl}
                        alt={imageUrl}
                        width={150}
                        height={150}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Cập nhật phim
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default EditMovie;
