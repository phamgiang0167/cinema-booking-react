import React from 'react'
import './Register.scss'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { } from 'react'
import { actRegisterApi } from './modules/actions'
import { Link } from 'react-router-dom';

export default function Register() {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            hoTen: ""
        },
        onSubmit: values => {
            // console.log(values)
            dispatch(actRegisterApi(values))
        },
    });
    return (
        <div className="relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
                    <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0" />
                    <div className="w-full  max-w-md z-10">
                        <div
                            className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6"
                            style={{
                                backgroundImage: `url(./images/popcorn.png)`,
                                width: "200px",
                                height: "200px",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                                margin: "0 auto"
                            }}
                        ></div>
                    </div>
                    {/*-remove custom style*/}
                    <ul className="circles">
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                </div>
                <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <h2 className="mt-12 text-3xl font-bold text-gray-900">
                                Login
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
                        </div>
                        <form className="mt-8 space-y-6" action="#"
                            onSubmit={(e) => {
                                e.preventDefault()
                                formik.handleSubmit(e)
                            }}
                        >
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="relative">

                                <label
                                    className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Tài khoản</label>
                                <input
                                    onChange={formik.handleChange}
                                    name="taiKhoan"
                                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                    type placeholder="Enter your account"
                                />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </label>
                                <input
                                    onChange={formik.handleChange}
                                    name="matKhau"
                                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type placeholder="Enter your password"
                                />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Email
                                </label>
                                <input
                                    onChange={formik.handleChange}
                                    name="email"
                                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type placeholder="Enter your email"
                                />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Số điện thoại
                                </label>
                                <input
                                    onChange={formik.handleChange}
                                    name="soDT"
                                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type placeholder="Enter your phone"
                                />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Họ tên người dùng
                                </label>
                                <input
                                    onChange={formik.handleChange}
                                    name="hoTen"
                                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type placeholder="Enter your fullname"
                                />
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Đăng nhập
                                </button>
                            </div>
                            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                <span>Đã có tài khoan?</span>
                                <Link to="/login" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Đăng nhập</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}
