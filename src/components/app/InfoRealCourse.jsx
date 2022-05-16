import React, {Fragment} from "react";
import stb from "../../assets/img/icons/stb.svg";
import granade from "../../assets/img/icons/granade.svg";
import dir from "../../assets/img/icons/dir.svg";
import idn from "../../assets/img/icons/idn.svg";
import {BsCheckCircle} from "react-icons/bs";
const InfoRealCourse = (courses)=>{
    return(
        <Fragment>
            <p className="font-Nova-Eb text-[28px] text-neon">Acerca del curso</p>
            <p className="mt-4 pr-16">{courses.description}
            </p>
            <div className="mt-8">
                <p className="font-Nova-Eb text-[28px] text-neon">Este curso te permitirá</p>
                <div className="flex px-2 mt-10">
                    <div className="w-1/2">
                        <div className="flex gap-6">
                            <div className="w-1/7">
                                <img src={stb} alt=""/>
                            </div>
                            <div className="w-full">
                                <p className="font-Nova-Eb text-[20px] text-neon">Establecer</p>
                                <p className="text-18 pr-20">
                                    Estrategias comunicativas para marcas con el fin de tener un mejor
                                    manejo sobre su gestión, generar crecimiento y rentabilidad y mejorar
                                    su impacto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex gap-6">
                            <div className="w-1/7">
                                <img src={granade} alt=""/>
                            </div>
                            <div className="w-full">
                                <p className="font-Nova-Eb text-[20px] text-neon">Desarrollar</p>
                                <p className="text-[18px] pr-12">
                                    Estrategias comunicativas para marcas con el fin de tener
                                    un mejor manejo sobre su gestión, generar crecimiento y
                                    rentabilidad y mejorar su impacto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex px-2 mt-10">
                    <div className="w-1/2">
                        <div className="flex gap-6">
                            <div className="w-1/7">
                                <img src={dir} alt=""/>
                            </div>
                            <div className="w-full">
                                <p className="font-Nova-Eb text-[20px] text-neon">Dirigir</p>
                                <p className="text-[18px] pr-20">
                                    Estrategias comunicativas para marcas con el fin de tener un mejor
                                    manejo sobre su gestión, generar crecimiento y rentabilidad y mejorar
                                    su impacto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex gap-6">
                            <div className="w-1/7">
                                <img src={idn} alt=""/>
                            </div>
                            <div className="w-full">
                                <p className="font-Nova-Eb text-[20px] text-neon">Identificar</p>
                                <p className="text-[18px] pr-12">
                                    Estrategias comunicativas para marcas con el fin de tener
                                    un mejor manejo sobre su gestión, generar crecimiento y
                                    rentabilidad y mejorar su impacto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <p className="font-Nova-Eb text-[28px] text-neon">¿Qué necesito para aprender el curso?</p>
                <div className="bg-white rounded-lg p-8 mt-3">
                    <div className="flex items-center">
                        <div className="w-11">
                            <BsCheckCircle className="w-6 h-6"/>
                        </div>
                        <div className="w-full">
                            <p className="text-[14px]">Conocimiento o experiencia previa en ventas.</p>
                        </div>
                    </div>
                    <div className="flex mt-4 items-center">
                        <div className="w-11">
                            <BsCheckCircle className="w-6 h-6"/>
                        </div>
                        <div className="w-full">
                            <p className="text-[14px]">Software de edición de texto y presentaciones para trabajar en los avances del proyecto final.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default InfoRealCourse