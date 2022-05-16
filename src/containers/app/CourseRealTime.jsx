import React, {Fragment, useEffect} from "react";
import mdSilver from "../../assets/img/md-silver-xl.svg"
import Header from "../../components/app/Header";
import InfoRealCourse from "../../components/app/InfoRealCourse";
import Temary from "../../components/app/Temary";
import IACourseCarge from "../../components/app/IACourseCarge";
import {AiFillStar} from "react-icons/ai";
import ComentCourse from "../../components/app/ComentCourse";
import Footer from "../../components/app/Footer";
import Card from "../../components/app/Card";
import MethodText from "../../components/app/MethodText";
import QuestionF from "../../components/app/QuestionF";
import {useDispatch, useSelector} from "react-redux";
import {getById} from "../../actions/generalActions";
import {useParams} from "react-router-dom";
import {ERROR_COURSE, GET_COURSE, LOAD_COURSE} from "../../types/coursesTypes";

const CourseRealTime = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {courses} = useSelector(state => state.coursesReducers);
    useEffect(() => {
        dispatch(getById('course', id, LOAD_COURSE, GET_COURSE, ERROR_COURSE))
    }, [dispatch, id])
    return (
        <Fragment>
            <Header/>
            <div className="bg-gradient-to-r from-grCustom2-c1 via-grCustom2-c2 to-grCustom2-c3 px-5 py-2 font-Nova-Rg">
                <div className="container mx-auto px-80 py-36 flex gap-20">
                    <div className="w-1/3">
                        <img src={mdSilver} className="h-80 w-full" alt=""/>
                    </div>
                    <div className="w-full">
                        <div className="mt-9 text-white">
                            <p className="font-Nova-Eb text-2xl uppercase">Online</p>
                            <p className="font-Nova-Eb text-5xl mt-4">Curso: {courses.name}</p>
                            <p className="text-[18px] mt-4 pr-20">Nuestras clases online no son video-cursos
                                grabados. Nuestras clases se dictan
                                vía Zoom en tiempo real para que puedas aprender con nuestros docentes al instante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutro-second2 font-Nova-Rg">
                <div className="container mx-auto px-20 flex gap-4">
                    <div className="w-9/12 text-neon">
                        <div className="flex container mx-auto pr-24 mt-16 text-center">
                            <div className="w-1/4">
                                <div className="bg-neutro-second3 rounded-full h-24 w-24 flex items-center m-auto"/>
                                <div className="mt-3">
                                    <p className="uppercase text-[20px] font-Nova-Eb bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text">Inicio</p>
                                    <p className="px-16 mt-2 text-[16px] text-gray-second2">Lunes 8 de Agosto</p>
                                </div>
                            </div>
                            <div className="w-1/4">
                                <div className="bg-neutro-second3 rounded-full h-24 w-24 flex items-center m-auto"/>
                                <div className="mt-3">
                                    <p className="uppercase text-[20px] font-Nova-Eb bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text">Horario</p>
                                    <p className="px-16 mt-2 text-[16px] text-gray-second2">20:00-22:30 Colombia</p>
                                </div>
                            </div>
                            <div className="w-1/4">
                                <div className="bg-neutro-second3 rounded-full h-24 w-24 flex items-center m-auto"/>
                                <div className="mt-3">
                                    <p className="uppercase text-[20px] font-Nova-Eb bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text">Duración</p>
                                    <p className="px-16 mt-2 text-[16px] text-gray-second2">50 horas (3 semanas)</p>
                                </div>
                            </div>
                            <div className="w-1/4">
                                <div className="bg-neutro-second3 rounded-full h-24 w-24 flex items-center m-auto"/>
                                <div className="mt-3">
                                    <p className="uppercase text-[20px] font-Nova-Eb bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text">Modalidad</p>
                                    <p className="px-8 mt-2 text-[16px] text-gray-second2">Online via Zoom
                                        (Máx. 20 alumnos)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-14">
                            <InfoRealCourse {...courses}/>
                            <div className="mt-10">
                                <p className="font-Nova-Eb text-[32px] text-neon">Temario del curso</p>
                                <Temary/>
                            </div>
                            <div className="mt-16">
                                <MethodText/>
                            </div>
                            <div className="mt-16">
                                <IACourseCarge/>
                                <div className="flex gap-7 mt-16">
                                    <div className="w-5/12 bg-neutro-second4 h-56 rounded-xl"/>
                                    <div className="w-7/12">
                                        <div className="mt-10">
                                            <p className="font-Nova-Eb text-[24px]">¿En qué se diferencia nuestro
                                                certificado?</p>
                                            <p className="text-[18px] mt-4 pr-6">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ut duis
                                                urna feugiat pellentesque.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ut duis
                                                urna feugiat pellentesque.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ut duis
                                                urna feugiat pellentesque.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-14">
                                    <p className="font-Nova-Eb text-[32px]">Preguntas frecuentes</p>
                                    <div className="mt-6">
                                        <QuestionF/>
                                    </div>
                                </div>
                                <div className="mt-10 mb-20">
                                    <p className="font-Nova-Eb text-[32px]">Valoraciones</p>
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
                                        <p className="font-Nova-Eb text-[32px]">Comentarios</p>
                                        <ComentCourse/>
                                        <ComentCourse/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/12">
                        <Card {...courses}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default CourseRealTime