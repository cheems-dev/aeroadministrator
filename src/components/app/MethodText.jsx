import React, {Fragment} from "react";
import obj from "../../assets/img/icons/obj.svg";
import dg from "../../assets/img/icons/dg1.svg";
import eg from "../../assets/img/icons/eg.svg";

const MethodText=()=>{
    return(
        <Fragment>
            <p className="font-Nova-Eb text-[28px] bg-gradient-to-r
                                from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text pr-16">
                Usaremos una metodología multidisciplinaria,
                que fusiona la teoría comunicativa con
                la gestión de marcas y el diseño gráfico
                para optimizar resultados.
            </p>
            <div className="flex mt-14 gap-6">
                <div className="w-1/3">
                    <div className="flex">
                        <div className="w-1/7">
                            <img src={obj} alt=""/>
                        </div>
                        <div className="w-full pl-4">
                            <p className="font-Nova-Eb text-[20px]">Objetivos</p>
                            <p className="text-[16px] mt-1">
                                Estrategias comunicativas para marcas con el fin de tener
                                un mejor manejo sobre su gestión, generar crecimiento y
                                rentabilidad y mejorar su impacto.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex">
                        <div className="w-1/7">
                            <img src={dg} alt=""/>
                        </div>
                        <div className="w-full pl-4">
                            <p className="font-Nova-Eb text-[20px]">Dirigido a</p>
                            <p className="text-[16px] mt-1">
                                Estrategias comunicativas para marcas con el fin de tener
                                un mejor manejo sobre su gestión, generar crecimiento y
                                rentabilidad y mejorar su impacto.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="flex">
                        <div className="w-1/7">
                            <img src={eg} alt=""/>
                        </div>
                        <div className="w-full pl-4">
                            <p className="font-Nova-Eb text-[20px]">Metodología</p>
                            <p className="text-[16px] mt-1">
                                Estrategias comunicativas para marcas con el fin de tener
                                un mejor manejo sobre su gestión, generar crecimiento y
                                rentabilidad y mejorar su impacto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default MethodText