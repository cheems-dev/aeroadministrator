import React, {Fragment} from "react";
import bgcom from "../../assets/img/faker/bg-com.png";
import {AiFillStar} from "react-icons/ai";
const ComentCourse = ()=>{
    return(
        <Fragment>
            <div className="bg-white rounded-lg p-6 mt-6">
                <div className="flex">
                    <div className="w-2/12">
                        <div className="rounded-full flex items-center">
                            <img className="h-40 w-40" src={bgcom} alt=""/>
                        </div>
                    </div>
                    <div className="w-10/12">
                        <div className="mt-4">
                            <p className="font-Nova-Sb text-[20px] text-black">Andrea Garza</p>
                            <ul>
                                <li className="inline-block pr-1">
                                    <AiFillStar className="w-5 h-5 text-p1 text-neon2"/>
                                </li>
                                <li className="inline-block px-1">
                                    <AiFillStar className="w-5 h-5 text-p1 text-neon2"/>
                                </li>
                                <li className="inline-block px-1">
                                    <AiFillStar className="w-5 h-5 text-p1 text-neon2"/>
                                </li>
                                <li className="inline-block px-1">
                                    <AiFillStar className="w-5 h-5 text-p1 text-neon2"/>
                                </li>
                                <li className="inline-block px-1">
                                    <AiFillStar className="w-5 h-5 text-p1 text-neon2"/>
                                </li>
                            </ul>
                            <p className="mt-2 text-[18px] pr-7">
                                Estoy satisfecha con el nivel de profesionalismo de Brand
                                Inteligente, las clases que tome del curso de Brand fueron
                                con ejercicios a un nivel retador y que cambian mucho las
                                perspectivas y refuerzan lo aprendido a nivel universidad.
                                Agradezco a Roger y Daniel por las clases impartidas, y me
                                deja las ganas de aplicar a más cursos para mi crecimiento
                                de manera profesional.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ComentCourse