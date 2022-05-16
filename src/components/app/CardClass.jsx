import React, {Fragment} from "react";
import airbg from "../../assets/img/airbg.png";
import {CalendarIcon, ClockIcon} from "@heroicons/react/outline";
const CardClass = ()=>{
    return(
        <Fragment>
            <div>
                <div className="relative">
                    <img src={airbg} className="h-full w-full rounded-lg"/>
                </div>
                <div className="mt-8">
                    <p className="font-Nova-Eb text-white text-[24px] leading-7">Insertar texto del livestream programado</p>
                    <p className="text-neutro-second3 mt-4 text-[14px]">Dictado por: Kevin Urbina</p>
                    <ul className="mt-4 text-neutro-second3 flex gap-8 items-center">
                        <li className="flex gap-2 items-center">
                            <ClockIcon className="h-5 w-5"/>
                            <p className="font-Nova-Sb text-[13px]">Hora: 16:00 PM</p>
                        </li>
                        <li className="flex gap-2 items-center">
                            <CalendarIcon className="h-5 w-5"/>
                            <p className="font-Nova-Sb text-[13px]">Viernes 30 Oct. 2020</p>
                        </li>
                    </ul>
                </div>
                <div className="mt-4">
                    <button className="m-auto block w-full bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-2 px-8
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                        Reproducir
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
export default CardClass