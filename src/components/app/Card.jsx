import React, {Fragment} from "react";
import {AiOutlinePlayCircle} from "react-icons/ai";

const Card = (courses) => {
    return (
        <Fragment>
            <div className="bg-white mt-16 rounded-b-lg sticky top-4 z-50">
                <div className="bg-neutro-second5 h-56 text-center rounded-t-lg">
                    <div className="py-10">
                        <AiOutlinePlayCircle className="h-12 w-12 mx-auto mt-8 mb-10"/>
                        <button className="m-auto block bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1.5 px-3
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                            Ver Contenido
                        </button>
                    </div>
                </div>
                <div className="px-5 py-7 text-gray-second1">
                    <div className="flex">
                        <div className="w-1/2">
                            <ul className="flex items-center">
                                <li>
                                    <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                </li>
                                <li className="pl-3">
                                    <p className="font-Nova-Eb text-[20px]">Precio</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <ul className="flex items-center pl-12">
                                <li className="pr-4 text-gray-primary">
                                    <p className="line-through font-Nova-Sb">$269</p>
                                </li>
                                <li>
                                    <p className="font-Nova-Eb text-[20px]">${courses.price}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <p className="font-Nova-Sb text-[14px] bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text">
                            ¡Esta oferta termina en 2:45 min!
                        </p>
                    </div>
                    <div className="flex">
                        <div className="w-7/12">
                            <ul className="flex items-center">
                                <li>
                                    <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                </li>
                                <li className="pl-3">
                                    <p className="font-Nova-Sb text-[14px]">Cupos disponibles</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-5/12">
                            <ul className="flex items-center pl-16">
                                <li className="text-gray-primary">
                                    <p className="font-Nova-Sb text-[14px]">{courses.spots} cupos</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <div className="w-6/12">
                            <ul className="flex items-center">
                                <li>
                                    <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                </li>
                                <li className="pl-3">
                                    <p className="font-Nova-Sb text-[14px]">Fecha de inicio</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-6/12">
                            <ul className="flex items-center pl-12">
                                <li className="text-gray-primary">
                                    <p className="font-Nova-Sb text-[14px]">Lunes 19 de Jul.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <div className="w-6/12">
                            <ul className="flex items-center">
                                <li>
                                    <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                </li>
                                <li className="pl-3">
                                    <p className="font-Nova-Sb text-[14px]">Plataforma</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-6/12">
                            <ul className="flex items-center pl-20">
                                <li className="text-gray-primary">
                                    <p className="font-Nova-Sb text-[14px]">Vía Zoom</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <div className="w-6/12">
                            <ul className="flex items-center">
                                <li>
                                    <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                </li>
                                <li className="pl-3">
                                    <p className="font-Nova-Sb text-[14px]">Horario</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-6/12">
                            <ul className="flex items-center pl-6">
                                <li className="text-gray-primary">
                                    <p className="font-Nova-Sb text-[14px]">Colombia 19:00 hrs</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ul className="flex items-center">
                            <li>
                                <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                            </li>
                            <li className="pl-3">
                                <p className="font-Nova-Sb text-[14px]">Bonus, grabaciones gratis por 4 meses</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <button className="w-full block bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1.5 px-3
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                            Inscribirme
                        </button>
                    </div>
                    <div className="mt-3">
                        <a href="#"
                           className="text-center block color-primary px-3 py-2 text-white rounded-md
                           font-ProximaNova-Eb text-base tracking-wide">
                            Reservar con el 30%
                        </a>
                    </div>
                    <div className="mt-6">
                        <p className="font-Nova-Sb text-center text-[14px]">¿Entrenamiento para tus colaboradores?</p>
                    </div>
                    <div className="mt-3">
                        <button className="w-full block bg-gradient-to-r text-white 2xl:text-[13.5px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1.5 px-3
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                            Prueba Sector Aeronautico para empresas
                        </button>
                    </div>
                    <div className="mt-5 px-14">
                        <p className="text-[14px] text-center font-Nova-Sb">Comparte este curso y accede
                            a $USD5 de crédito
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Card