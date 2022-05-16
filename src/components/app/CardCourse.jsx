import React, {Fragment} from 'react'
import imgCard from "../../assets/img/faker/group.png";
import {CalendarIcon} from "@heroicons/react/outline";
import {Link} from "react-router-dom";
const CardCourse = (course) => {
    return (
        <Fragment>
            <div className="bg-white shadow rounded-lg">
                <Link to={`/curso-tiempo-real/${course.id}`}>
                    <div className="relative">
                                <span className="text-16 mt-5 ml-6 absolute items-center justify-center px-5 bg-gradient-to-r
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded-md font-Nova-Eb tracking-wide text-white">
                                     {course.level}
                                 </span>
                        {course.image === '' || null ?
                            <img src={imgCard} className="h-full w-full" alt=""/>
                            :
                            <img src={course.image} className="h-full w-full" alt=""/>
                        }
                    </div>
                </Link>
                <div className="px-6 pt-3 pb-6">
                    <Link to={`/curso-tiempo-real/${course.id}`}><h4
                        className="text-neon 2xl:text-[21px] text-[20px] font-Nova-Eb pr-2 leading-6">{course.name}</h4>
                    </Link>
                    <div className="flex justify-between">
                        <div className="mt-3">
                            <p className="2xl:text-[13.5px] text-[11px] font-Nova-Eb text-gray-second1">
                                Dictado por {course.teacher} {course.teacherSurname}
                            </p>
                        </div>
                        <div className="mt-3">
                            <p className="2xl:text-[13.5px] text-[11px] font-Nova-Eb bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text">
                                {course.spots} Cupos disponibles
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="text-gray-second2 font-Nova-Rg 2xl:text-[14px] font-Nova-Lt">
                            {course.abstract}
                        </p>
                    </div>
                    <div className="flex justify-end">
                                    <span
                                        className="bg-red px-5 text-white rounded-md font-Nova-Sb 2xl:text-[12px] tracking-wide">En vivo</span>
                    </div>
                    <div className="mt-2.5 flex justify-between">
                        <div className="flex gap-2 items-center text-gray-second1 font-Nova-Sb">
                            <CalendarIcon className="h-5 w-5"/>
                            <span className="text-[12px] 2xl:text-[14px]">Inicio: {course.date_ini}</span>
                        </div>
                        <div>
                            <button className="bg-gradient-to-r text-white 2xl:text-[14px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1 px-3
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                                Inscribirme
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CardCourse