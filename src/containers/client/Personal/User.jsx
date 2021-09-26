import React from 'react'
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router'
import callApi from '../../../utils/callApi';
import Loader from 'components/Loader/Loader';
import Swal from 'sweetalert2'

import { USER_LOGIN, ACCESS_TOKEN } from 'settings/apiConfig'
import { Fragment } from 'react';
export default function User() {
    const [user, setUser] = useState({})
    useEffect(async () => {
        const data = await callApi("QuanLyNguoiDung/ThongTinTaiKhoan", "POST")
        setUser(data.data.content)
    }, [])
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
            hoTen: ""
        },
        onSubmit: values => {
            values.taiKhoan = user.taiKhoan
            values.matKhau = values.matKhau || user.matKhau
            values.email = values.email || user.email
            values.soDt = values.soDt || user.soDT
            values.hoTen = values.hoTen || user.hoTen
            Swal.fire({
                title: 'Bạn chắc chắn muốn cập nhật thông tin cá nhân?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Chắc chắn!',
                cancelButtonText: "Hủy"
            }).then((result) => {
                if (result.isConfirmed) {
                    callApi('QuanLyNguoiDung/CapNhatThongTinNguoiDung', "PUT", values)
                        .then(() => {
                            localStorage.removeItem(USER_LOGIN)
                            localStorage.removeItem(ACCESS_TOKEN)
                            let timerInterval
                            Swal.fire({
                                title: 'Cập nhật thành công!',
                                html: 'Bạn sẽ bị đăng xuất trong <b></b> giây.',
                                timer: 2000,
                                timerProgressBar: true,
                                didOpen: () => {
                                    Swal.showLoading()
                                    const b = Swal.getHtmlContainer().querySelector('b')
                                    timerInterval = setInterval(() => {
                                        b.textContent = Swal.getTimerLeft()
                                    }, 100)
                                },
                                willClose: () => {
                                    clearInterval(timerInterval)
                                }
                            }).then((result) => {
                                /* Read more about handling dismissals below */
                                if (result.dismiss === Swal.DismissReason.timer) {
                                    window.location.reload()
                                }
                            })
                        }).catch(err => {
                            Swal.fire(
                                'Câp nhật thất bại!',
                                err.response.data.content,
                                'error'
                            )
                        })
                }
            })
        },
    });

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/login" />
    }
    const accessUpdate = () => {
        Swal.fire('Giờ đây bạn có thể thay đổi thông tin cá nhân')
        let btn_confirm = document.getElementsByClassName("btn_confirm")[0]
        btn_confirm.disabled = false
        btn_confirm.style.cursor = "pointer"
        let inputs = document.getElementsByTagName('input')
        for (let i = 1; i < inputs.length; i++) {
            inputs[i].disabled = false
            inputs[i].style.cursor = "pointer"
        }
    }

    if (user === {}) return <Loader />
    return (
        <div className="user">
            <div className="p-5">

                <h3>Thông tin cá nhân</h3>
            </div>
            <div className="row" style={{ margin: "0" }}>
                <div className="col-sm-4 col-md-2 col-lg-4"></div>
                <form
                    className="col-sm-4 col-md-8 col-lg-4"
                    onSubmit={(e) => {
                        e.preventDefault()
                        formik.handleSubmit(e)
                    }}
                >
                    <div className="relative">
                        <label
                            className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Tài khoản</label>
                        <div className="d-flex align-items-center">
                            <input
                                disabled
                                onChange={formik.handleChange}
                                name="taiKhoan"
                                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                type="text"
                                defaultValue={user.taiKhoan}

                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label
                            className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Mật khẩu</label>
                        <div className="d-flex align-items-center">
                            <input
                                disabled
                                onChange={formik.handleChange}
                                name="matkhau"
                                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                type="password"
                                defaultValue={user.matKhau}
                            />

                        </div>
                    </div>
                    <div className="relative">
                        <label
                            className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                        <div className="d-flex align-items-center">
                            <input
                                disabled
                                onChange={formik.handleChange}
                                name="email"
                                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                type="email"
                                defaultValue={user.email}
                            />

                        </div>
                    </div>
                    <div className="relative">
                        <label
                            className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Số điện thoại</label>
                        <div className="d-flex align-items-center">
                            <input
                                disabled
                                onChange={formik.handleChange}
                                name="soDt"
                                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                type="text"
                                defaultValue={user.soDT}
                            />

                        </div>
                    </div>
                    <div className="relative">
                        <label
                            className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Họ tên</label>
                        <div className="d-flex align-items-center">
                            <input
                                disabled
                                onChange={formik.handleChange}
                                name="hoTen"
                                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                type="text"
                                defaultValue={user.hoTen}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="btn_update col-sm-3"
                            onClick={accessUpdate}>Cập nhật</div>
                        <div className="col-sm-3"></div>
                        <button className="btn_confirm col-sm-3" disabled type="submit">Xác nhận</button>
                    </div>

                </form>
                <div className="col-sm-4 col-md-2 col-lg-4">

                </div>
            </div>
        </div>

    )
}
