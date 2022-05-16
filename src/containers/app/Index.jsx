import React, {Fragment, useEffect} from "react";
import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer";
import Slider from "react-slick";
import CardCourse from "../../components/app/CardCourse";
import {Tab} from '@headlessui/react'
import CardProgram from "../../components/app/CardProgram";
import airplane from '../../assets/img/icons/airplane.svg'
import group from '../../assets/img/icons/group2.svg'
import gteacher from '../../assets/img/icons/gteacher.svg'
import star from '../../assets/img/icons/startw.svg'
import CardCourse2 from "../../components/app/CardCourse2";
import ind1 from '../../assets/img/ind1.png'
import learn from '../../assets/img/learn.png'
import imge from '../../assets/img/imge.png'

import {useDispatch, useSelector} from "react-redux";
import SliderStudentIndex from "../../components/app/SliderStudentIndex";
import {getAll} from "../../actions/generalActions";
import {ERROR_COURSE, GET_ALL_COURSES, LOAD_COURSE} from "../../types/coursesTypes";
import {ERROR_PROGRAM, GET_ALL_PROGRAMS, LOAD_PROGRAM} from "../../types/programsTypes";
import {ERROR_OPINION, GET_ALL_OPINIONS, LOAD_OPINION} from "../../types/opinionsTypes";

const Index = () => {
    const dispatch = useDispatch();
    const {courses} = useSelector(state => state.coursesReducers);
    const {programs} = useSelector(state => state.programsReducers);
    const {opinions} = useSelector(state => state.opinionsReducers);

    useEffect(() => {
        dispatch(getAll('course/home', LOAD_COURSE, GET_ALL_COURSES, ERROR_COURSE));
        dispatch(getAll('program/home', LOAD_PROGRAM, GET_ALL_PROGRAMS, ERROR_PROGRAM));
        dispatch(getAll('publicity/opinions', LOAD_OPINION, GET_ALL_OPINIONS, ERROR_OPINION));
    }, [dispatch])

    const settings = {
        dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 3, adaptiveHeight: true
    };
    const settings2 = {
        dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 4, slidesToScroll: 4, adaptiveHeight: true
    };
    const setting3 = {
        dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, adaptiveHeight: true
    }
    return (<Fragment>
        <div className="bg-gradient-to-b from-grPrimary-c1 to-grPrimary-c2 font-Nova-Rg">
            <Header color='text-white'/>
            <div className="pt-32 px-56">
                <div className="flex">
                    <div className="w-4/12">
                        <p className="font-Nova-Rg text-[50px] leading-[60px] text-white tracking-wide"><span
                            className="text-grSecond1-c1 font-Nova-Eb">Potencia </span>
                            tus <span
                                className="bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text font-Nova-Eb">conocimientos </span> y
                            genera nuevas
                            <span className="text-grSecond1-c1 font-Nova-Eb"> habilidades</span></p>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        className="bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white py-1.5 px-6 rounded-md font-Nova-Eb tracking-wide hover:bg-red-500 hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                        Ver Cursos y Carreras
                    </button>
                </div>
                <div className="mt-48 px-4">
                    <div className="text-white">
                        <h4 className="font-Nova-Eb text-3xl">Cursos online en vivo</h4>
                        <p className="font-Nova-Sb mt-2 text-xl">potencia habilidades con nuestros cursos a tiempo
                            real</p>
                    </div>
                </div>
                <Slider {...settings} className="mt-10">
                    {courses.map((course) => {
                        if (course.type === 'real_time') {
                            return (
                                <CardCourse key={course.id} {...course}/>
                            )
                        }
                    })}
                </Slider>
            </div>
            <div className="color-second2 2xl:px-[500px] py-20 mt-40 text-white text-center">
                <h4 className="font-Nova-Eb 2xl:text-[40px]">Descubre Nuestras Carreras</h4>
                <p className="font-Nova-Sb 2xl:text-[20px]">Pronto, aprende con lo más altos estandáres y exigencias
                    de la OACI junto a la
                    experiencia sector aeronautico education.</p>
            </div>
            <div className="mt-16 px-56">
                <Tab.Group>
                    <Tab.List className="space-x-9 text-center">
                        <Tab
                            className="bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white py-1.5 px-6 rounded-md font-Nova-Eb tracking-wide hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                            Aeronáutica
                        </Tab>
                        <Tab
                            className="inline-flex px-8 py-1 btn-color-second1 border-transparent border-solid border-2 rounded-md text-gradient-to-r text-grSecond1-c3 font-Nova-Eb hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                            Aeronáutica
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-10">
                        <Tab.Panel>
                            <Slider {...settings}>
                                {programs.map((program) => {
                                    return (
                                        <CardProgram key={program.id} {...program}/>
                                    )
                                })}
                            </Slider>
                        </Tab.Panel>
                        <Tab.Panel>
                            <Slider {...settings}>
                                {programs.map((program) => {
                                    return (
                                        <CardProgram key={program.id} {...program}/>
                                    )
                                })}
                            </Slider>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
                <div className="grid grid-cols-4 px-8 mt-36 gap-10 text-white">
                    <div>
                        <img src={airplane} className="h-10 w-10" alt=""/>
                        <h4 className="font-Nova-Eb mt-8 text-[18px]">Sumergete en la industria</h4>
                        <p className="mt-10 text-[15px]">
                            Profundiza tus conocimientos en aviónica, motores, fundamentos, mecatrónica y
                            otras especialidades en una plataforma educativa en en ciencia aeronáuticas.
                        </p>
                    </div>
                    <div>
                        <img src={group} className="h-10 w-10" alt=""/>
                        <h4 className="font-Nova-Eb mt-8 text-[18px]">Habilidades Blandas</h4>
                        <p className="mt-10 text-[15px]">
                            Aprende en conjunto, fortalece tus habilidades sociales por medio de una estructura
                            participativa junto a otros participantes de diferentes nacionalidades.
                        </p>
                    </div>
                    <div>
                        <img src={gteacher} className="h-10 w-10" alt=""/>
                        <h4 className="font-Nova-Eb mt-8 text-[18px]">Desarrolla tus competencias laborales</h4>
                        <p className="mt-3 text-[15px]">
                            Desarrolla nuevas competencias, máxima tus conocimientos y aprende sustentarlas a través
                            de una instrucción dinámica y una estructura participativa.
                        </p>
                    </div>
                    <div>
                        <img src={star} className="h-10 w-10" alt=""/>
                        <h4 className="font-Nova-Eb mt-8 text-[18px]">Feedback continuo</h4>
                        <p className="mt-10 text-[15px]">
                            Despeja tus dudas con nuestro instrucciones, de manera que facilite tu proceso de
                            aprendizaje.
                        </p>
                    </div>
                </div>
                <div className="mt-48">
                    <div className="text-white">
                        <h4 className="font-Nova-Eb text-[35px]">Aprende a tu Ritmo</h4>
                        <p className="font-Nova-Sb mt-2 text-[18px]">Nuevos Cursos, Nuevos Retos</p>
                    </div>
                    <div className="mt-16">
                        <Slider {...settings2}>
                            {courses.map((course) => {
                                if (course.type === 'normal') {
                                    return (
                                        <CardCourse2 key={course.id} {...course}/>
                                    )
                                }
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="mt-32 text-white">
                    <h4 className="font-Nova-Eb text-[30px] text-center">Potenciamos el pensamiento estratégico</h4>
                    <div className="flex mt-28 items-center">
                        <div className="w-5/12 pl-[200px]">
                            <h4 className="pr-28 text-[22px] bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-transparent bg-clip-text font-Nova-Eb">
                                Educación digital a través del microlearning
                            </h4>
                            <p className="pr-16 text-[14px] mt-4">
                                Clases en video cortas que generan mayor recordación comparada con la educación
                                tradicional
                            </p>
                        </div>
                        <div className="w-7/12">
                            <img src={ind1} className="h-80 m-auto" alt=""/>
                        </div>
                    </div>
                    <div className="flex mt-40 items-center">
                        <div className="w-7/12">
                            <img src={learn} className="h-80 m-auto" alt=""/>
                        </div>
                        <div className="w-5/12 px-[40px]">
                            <h4 className="mt-8 pr-[130px] text-[22px] bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-transparent bg-clip-text font-Nova-Eb">
                                Aprendizaje basado en manuales proyectos y experiencia
                            </h4>
                            <div className="pr-[108px] text-[14px] mt-4">
                                <p>
                                    Le brindamos apoyo competente y coherente durante la evaluación de su inversión.
                                </p>
                                <p className="mt-4">
                                    Cooperamos estrechamente con usted, seleccionaremos entre una gran variedad de
                                    posibles opciones, la variante tecnología económicamente más efectiva,
                                    planificaremos
                                    el proyecto y lo ejecutaremos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-40 items-center">
                        <div className="w-5/12 pl-[200px]">
                            <h4 className="pr-28 text-[22px] bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-transparent bg-clip-text font-Nova-Eb">
                                Retroaliméntate las 24 horas del día
                            </h4>
                            <p className="pr-16 text-[14px] mt-4">
                                Clases en video cortas que generan mayor recordación comparada con la educación
                                tradicional
                            </p>
                        </div>
                        <div className="w-7/12">
                            <img src={ind1} className="h-80 m-auto" alt=""/>
                        </div>
                    </div>
                    <div className="mt-32">
                        <h4 className="text-white font-Nova-Eb text-center text-[30px]">Opiniones de Alumnos</h4>
                        <div className="mt-16 px-28">
                            <Slider {...setting3}>
                                {opinions.map((opinion) => {
                                    return (
                                        <SliderStudentIndex key={opinion.id} {...opinion}/>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="mt-40">
                        <h4 className="font-Nova-Eb text-custom text-center text-[22px]">Capacita a tu equipo para el
                            mañana</h4>
                        <div className="flex px-32 mt-10">
                            <div className="w-3/6">
                                <img src={imge} className="pl-32 h-40" alt=""/>
                            </div>
                            <div className="w-3/6">
                                <h4 className="text-custom font-Nova-Sb text-[24px]">Sector Aeronautico para
                                    empresas.</h4>
                                <p className="mt-1 pr-56">Clases en video cortas que generan mayor recordación comparada
                                    con la educación tradicional</p>
                                <div className="mt-4">
                                    <button className="bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1 px-8
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                                        Conocer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-40 flex bg-gradient-to-r from-grSecond3-c1 to-grSecond3-c2 px-96 py-4 items-center">
                <div className="w-2/6">
                    <h4 className="text-white text-[20px] text-center">Verifica tu certificado</h4>
                </div>
                <div className="w-2/6">
                    <input className="rounded w-full py-1"/>
                </div>
                <div className="w-2/6">
                    <button className="m-auto block bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1 px-8
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                        Verificar
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
    </Fragment>)
}
export default Index