import React, {Fragment} from "react";
import Header from "../../components/app/Header";
import mdSilver from "../../assets/img/icons/md-silver-xl.svg";
import Footer from "../../components/app/Footer";
import InfoRealCourse from "../../components/app/InfoRealCourse";
import TemaryLock from "../../components/app/TemaryLock";
import MethodText from "../../components/app/MethodText";
import IACourseCarge from "../../components/app/IACourseCarge";
import QuestionF from "../../components/app/QuestionF";
import {AiFillStar} from "react-icons/ai";
import ComentCourse from "../../components/app/ComentCourse";
import CardNo from "../../components/app/CardNo";

const CourseTR = () => {
    return (
        <Fragment>
            <Header/>
              <div className="color-custom1 font-Nova-Rg">
                  <div className="container mx-auto px-40 py-36 flex gap-20">
                      <div className="w-1/3">
                          <img src={mdSilver} className="h-80 w-full" alt=""/>
                      </div>
                      <div className="w-full">
                          <div className="mt-9">
                              <p className="font-Nova-Eb text-2xl text-white uppercase">Curso</p>
                              <p className="font-Nova-Eb text-6xl text-white mt-4">Sketchup Pro: Fundamentos</p>
                              <p className="text-[18px] text-white mt-4 pr-64">Nuestras clases online no son video-cursos
                                  grabados. Nuestras clases se dictan
                                  vía Zoom en tiempo real para que puedas aprender con nuestros docentes al instante.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
            <div className="bg-neutro-second2 font-Nova-Rg text-neon">
                <div className="container mx-auto px-24 flex pt-16 gap-6">
                    <div className="w-9/12">
                        <div className="grid grid-cols-4 text-gray-second1 pr-40">
                            <div>
                                <button className="bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1 px-10
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                                    Nuevo
                                </button>
                            </div>
                            <div>
                                <ul className="flex items-center">
                                    <li>
                                        <div className="bg-neutro-second3 rounded-full h-8 w-8"/>
                                    </li>
                                    <li className="pl-3">
                                        <p className="text-[18px]">1h 29m</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex items-center">
                                    <li>
                                        <div className="bg-neutro-second3 rounded-full h-8 w-8"/>
                                    </li>
                                    <li className="pl-3">
                                        <p className="text-[18px]">50</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex items-center">
                                    <li>
                                        <div className="bg-neutro-second3 rounded-full h-8 w-8"/>
                                    </li>
                                    <li className="pl-3">
                                        <p className="text-[18px]">Nivel intermedio</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-14">
                            <InfoRealCourse/>
                            <div className="mt-10">
                                <p className="font-Nova-Eb text-[28px] text-neon">Temario del curso</p>
                                <TemaryLock/>
                            </div>
                            <div className="mt-14">
                                <MethodText/>
                            </div>
                            <div className="mt-16">
                                <IACourseCarge/>
                            </div>
                        </div>
                        <div className="mt-14">
                            <p className="font-Nova-Eb text-[28px]">Preguntas frecuentes</p>
                            <div className="mt-6">
                                <QuestionF/>
                            </div>
                        </div>
                        <div className="mt-10 mb-20">
                            <p className="font-Nova-Eb text-[28px]">Valoraciones</p>
                            <div className="flex mt-2">
                                <div className="w-2/12">
                                    <p className="text-7xl font-Nova-Eb">8.5</p>
                                    <div>
                                        <ul>
                                            <li className="inline-block pr-1">
                                                <AiFillStar className="w-4 h-4 text-p1 text-neon2"/>
                                            </li>
                                            <li className="inline-block px-1">
                                                <AiFillStar className="w-4 h-4 text-p1 text-neon2"/>
                                            </li>
                                            <li className="inline-block px-1">
                                                <AiFillStar className="w-4 h-4 text-p1 text-neon2"/>
                                            </li>
                                            <li className="inline-block px-1">
                                                <AiFillStar className="w-4 h-4 text-p1 text-neon2"/>
                                            </li>
                                            <li className="inline-block px-1">
                                                <AiFillStar className="w-4 h-4 text-p1 text-neon2"/>
                                            </li>
                                        </ul>
                                        <p className="text-black text-xs pl-2">500 valoraciones</p>
                                    </div>
                                </div>
                                <div className="w-3/12">

                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="font-Nova-Eb text-[28px]">Comentarios</p>
                                <ComentCourse/>
                                <ComentCourse/>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/12">
                    <CardNo/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default CourseTR