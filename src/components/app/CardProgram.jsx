import React, {Fragment} from "react";
import isg from "../../assets/img/isg.png";
import groupIcon from "../../assets/img/icons/group-icon.svg";
import {CalendarIcon} from "@heroicons/react/outline";

const CardProgram = (program) => {
    return (
        <Fragment>
            <div className={`bg-neutro-second1 hover:color-second2  shadow rounded-lg px-8 pt-5 pb-6 text-neon hover:text-white`}>
                <span className="text-[12px] uppercase mt-5 px-5 py-1 bg-gradient-to-r from-grSecond1-c1
                via-grSecond1-c2 to-grSecond1-c3 rounded-md font-Nova-Eb tracking-wider text-white">
               Programa
                </span>
                <div className="mt-3">
                    <img src={isg} className="h-40" alt=""/>
                </div>
                <div className="mt-2">
                    <div className="font-Nova-Eb">
                        <h5 className="text-[21px]">{program.title}</h5>
                        <p className="text-[14px]">Dictado por {program.teacher} {program.teacherSurname}</p>
                    </div>
                    <div className="mt-2">
                        <p className="font-Nova-Lt text-[13.5px]">{program.abstract}
                        </p>
                        <div className="flex justify-between mt-6 items-center">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img src={groupIcon} alt=""/>
                                    </div>
                                    <div>
                                        <span className="font-Nova-Eb text-[14px]">{program.spots} Cupos disponibles</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span
                                    className="bg-red px-5 py-0.5 text-white rounded-md font-Nova-Sb 2xl:text-[12px] tracking-wide">En vivo
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between mt-2 items-center">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <CalendarIcon className="h-5 w-5"/>
                                    </div>
                                    <div>
                                        <span className="font-Nova-Sb text-[14px]">Inicio: {program.dateIni}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="bg-white rounded font-Nova-Eb hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150 py-0.5 px-2">
                                    <span className="bg-gradient-to-r text-transparent bg-clip-text 2xl:text-[13px]
                                      from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 tracking-wide">
                                        Matricularme
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CardProgram