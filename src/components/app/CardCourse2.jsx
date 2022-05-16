import React, {Fragment} from "react";
import bgAir from "../../assets/img/faker/bgAir.png";
import {ClockIcon} from "@heroicons/react/outline";

const CardCourse2 = (course) => {
    return (
        <Fragment>
            <div className="bg-white rounded">
                <div className="relative">
                                       <span className="leading-[0px] text-[12px] uppercase mt-3 ml-4 absolute m-auto justify-center px-5 py-2.5 bg-gradient-to-r
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded-md font-Nova-Eb tracking-wide text-white">
                                     {course.level}
                                     </span>
                    {course.image === '' || null ?
                        <img src={bgAir} className="h-full w-full" alt=""/>
                        :
                        <img src={course.image} className="h-full w-full" alt=""/>
                    }
                </div>
                <div className="px-4 pt-3 pb-5">
                    <h4 className="font-Nova-Eb text-neon text-[18px] leading-6">{course.name}</h4>
                    <p className="text-gray-second1 text-[13px] font-Nova-Eb mt-1">Dictado por {course.teacher} {course.teacherSurname}</p>
                    <div className="flex justify-between mt-2">
                        <div className="flex text-gray-second1 gap-1 items-center">
                            <div>
                                <ClockIcon className="h-5 w-5"/>
                            </div>
                            <div>
                                <span className="text-[14px] font-Nova-Sb">{course.timeClass}</span>
                            </div>
                        </div>
                        <div>
                            <button className="bg-gradient-to-r text-white 2xl:text-[12px]
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
export default CardCourse2