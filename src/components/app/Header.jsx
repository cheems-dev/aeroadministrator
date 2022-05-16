import React, {Fragment} from "react";
import logoWhite from '../../assets/img/logo-white.png'
import {SearchIcon} from "@heroicons/react/outline";

const Header = ({color}) => {
    return (
        <Fragment>
            <div className="flex flex-wrap justify-between items-center container mx-auto">
                <div className="py-4 items-center flex gap-20">
                    <div>
                        <img src={logoWhite} alt=""/>
                    </div>
                    <div className={`${color} font-Nova-Sb`}>
                        <ul className="flex space-x-12">
                            <li>Cursos</li>
                            <li>Comunidad</li>
                            <li>Servicios</li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-96">
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <SearchIcon className="h-6 w-6 fill-neutro-custom text-grSecond1-c2"/>
                            </span>
                            <input
                                className="placeholder:text-gray-primary placeholder:font-Nova-Sb block bg-neutro-custom w-full border border-gray-300 rounded py-1.5 pl-12 pr-3 shadow-sm focus:outline-none focus:border-primary"
                                placeholder="¿Qué quieres aprender hoy?" type="text"/>
                        </label>
                    </div>
                    <div className="w-70">
                        <ul className="flex gap-8">
                            <li>
                                <button
                                    className="inline-flex px-8 py-1 btn-color-second1 border-transparent border-solid border-2 rounded-md text-gradient-to-r text-grSecond1-c3 font-Nova-Eb">Entrar
                                </button>
                            </li>
                            <li>
                                <button
                                    className="bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white py-1.5 px-6 rounded-md font-Nova-Eb tracking-wide hover:bg-red-500 hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">Regístrate
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Header