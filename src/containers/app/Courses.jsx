import React, {Fragment} from "react";
import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer";
import Slider from "react-slick";
import CardCourse from "../../components/app/CardCourse";

const Courses = () => {
    const settings = {
        dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 3, adaptiveHeight: true
    };
    return (
        <Fragment>
            <Header/>
            <div className="bg-neutro-second2 font-Nova-Rg text-neon">
                <div className="container mx-auto px-24 pt-20">
                    <div className="text-neon text-center">
                        <h4 className="font-Nova-Eb text-[28px] uppercase">Descubre nuestras especialidades</h4>
                        <p className="mt-4">
                            Aprende Branding, diseño y otras especialidades en tiempo real
                        </p>
                    </div>
                    <div className="px-32 flex justify-between mt-14">
                        <div>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full text-gray-700 py-3 px-4 pr-28 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state">
                                    <option>Cursos en Vivo</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grSecond1-c2">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full text-gray-700 py-3 px-4 pr-28 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state">
                                    <option>Ordernar por</option>
                                    <option>Nuevos</option>
                                    <option>Fecha</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grSecond1-c2">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h4 className="font-Nova-Sb text-[24px]">Próximos cursos a iniciar </h4>
                    </div>
                    <Slider {...settings} className="mt-10">
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                    </Slider>
                    <div className="bg-[url('/src/assets/img/bg-airplane.png')] bg-cover bg-center mt-14 py-20 rounded-md">
                        <div className="text-center text-white text-[20px]">
                             <p>Invierte en tu educación a mucho menos. </p>
                            <h4 className="text-[28px] font-Nova-Sb">Por inaguración, separa tu vacanta con 35% Dscto</h4>
                            <p>que esperas,asegura tu cupo en dos cuotas</p>
                        </div>
                    </div>
                    <Slider {...settings} className="mt-20 pb-52">
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                        <CardCourse/>
                    </Slider>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default Courses