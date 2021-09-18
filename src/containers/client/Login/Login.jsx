import React from 'react'
import './Login.scss'
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux'
import {} from 'react'
import {actLoginApi} from './modules/actions'
export default function Login() {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          taiKhoan: '',
          matKhau: '',
        },
        onSubmit: values => {
          dispatch(actLoginApi(values))
        },
      });
    return (
        <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                    <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                    <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                    <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                            Login
                        </label>
                        <form 
                            method="#" 
                            action="#" 
                            className="mt-10" 
                            onSubmit={(e)=> {
                                e.preventDefault()
                                formik.handleSubmit(e)
                            }}
                        >
                            <div>
                                <input
                                    onChange={formik.handleChange}
                                    name="taiKhoan"
                                    type="text" 
                                    placeholder="Tai Khoan" 
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                                />
                            </div>
                            <div className="mt-7">
                                <input
                                    onChange={formik.handleChange}
                                    type="password" 
                                    name="matKhau"
                                    placeholder="Mat Khau" 
                                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" 
                                />
                            </div>
                            <div className="mt-7 flex">
                                <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                                    <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Recuerdame
                                    </span>
                                </label>
                                <div className="w-full text-right">
                                    <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                                        ¿Olvidó su contraseña?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-7">
                                <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                </button>
                            </div>
                            
                            <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2">¿Eres nuevo?</label>
                                    <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Crea una cuenta
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}
