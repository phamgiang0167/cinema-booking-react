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
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actAddMovieUploadImage } from '../module/action';

const { Title } = Typography;

function AddMovie(props) {
    const [componentSize, setComponentSize] = useState('default');
    const [imageUrl, setSrcImg] = useState('');
    const [visibleImg, setVisibleImg] = useState({ display: 'none' });

    const dispatch = useDispatch();

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            sapChieu: true,
            dangChieu: true,
            hot: true,
            danhGia: 10,
            hinhAnh: {},
        },
        onSubmit: (values) => {
            console.log('values', values);
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                }
                formData.append('File', values.hinhAnh, values.hinhAnh.name);
            }
            dispatch(actAddMovieUploadImage(formData, props));
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

    const handleFileChange = (e) => {
        //console.log(e);

        // get a file object in FileList
        let file = e.target.files[0] || '';

        // create a FileReader object to read file
        let readerFile = new FileReader();

        // get url from file passed
        if (file && file.type.match('image.*')) {
            readerFile.readAsDataURL(file);
            // create a event by onload function to get result base64 image
            readerFile.onload = (e) => {
                setSrcImg(e.target.result || '');
            };

            // set file data into formik
            formik.setFieldValue('hinhAnh', file);
            setVisibleImg({ display: 'block' });
        }
    };

    return (
        <div>
            <Title level={3}>Thêm mới phim</Title>
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
                    <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
                </Form.Item>
                <Form.Item label="Đang chiếu:" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>
                <Form.Item label="Sắp chiếu:" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>
                <Form.Item label="Hot:" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} />
                </Form.Item>
                <Form.Item label="Số sao:">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
                </Form.Item>

                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleFileChange} accept="image/*" />
                    <br />
                    <img
                        src={imageUrl}
                        alt={imageUrl}
                        width={150}
                        height={150}
                        style={visibleImg}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm phim
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddMovie;
