import React, {Fragment} from "react";
import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer";
import {AiFillStar} from "react-icons/ai";
import ComentCourse from "../../components/app/ComentCourse";
import CardCourse from "../../components/app/CardCourse";
import Slider from "react-slick";
const ContentIn = ()=>{
    const settings = {
        dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 3, adaptiveHeight: true
    };
    return (
        <Fragment>
            <Header/>
              <div className="bg-[url('/src/assets/img/bg-air.png')] bg-center h-[500px]"/>
            <div className="bg-neutro-second2">
                <div className="container mx-auto px-24 font-Nova-Rg pt-8 pb-20">
                    <p className="text-neon font-Nova-Sb text-[18px]">Ver todos los artículos</p>
                    <div className="mt-8">
                        <ul className="flex items-center gap-12">
                            <li>
                                <button className="text-neutro-second5 2xl:text-[16px]
                                     bg-gray-second2 rounded font-Nova-Eb tracking-wide py-2 px-10
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                                    Análisis
                                </button>
                            </li>
                            <li>
                                <p className="text-gray-second1">Publicado por: Javier Espinoza</p>
                            </li>
                            <li>
                                <p className="text-gray-second1">noviembre 30,2021</p>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <h4 className="font-Nova-Eb text-[38px] text-neon pr-36 tracking-wide leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh porttitor urna,
                                interdum diam ac, feugiat.
                            </h4>
                            <p className="mt-16 font-Nova-Sb text-neon">Expresar con estrategia</p>
                            <p className="mt-4 text-gray-second1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum leo ullamcorper.
                                Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non,
                                ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum
                                leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a
                                quisque elementum vitae.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum leo ullamcorper.
                                Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non,
                                ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum
                                leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a
                                quisque elementum vitae.


                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum leo ullamcorper.
                                Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non,
                                ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum
                                leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a
                                quisque elementum vitae.
                            </p>
                        </div>
                        <div className="mt-6 flex gap-8">
                            <div className="w-4/6 bg-[url('/src/assets/img/airbg.png')] bg-cover bg-right h-96 rounded"/>
                            <div className="w-2/6 bg-[url('/src/assets/img/airbg.png')] bg-cover bg-right h-96 rounded"/>
                        </div>
                        <div className="mt-6">
                            <p className="mt-16 font-Nova-Sb text-neon">Expresar con estrategia</p>
                            <p className="mt-4 text-gray-second1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum leo ullamcorper.
                                Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non,
                                ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum
                                leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a
                                quisque elementum vitae.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum leo ullamcorper.
                                Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non,
                                ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum
                                leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a
                                quisque elementum vitae.


                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum leo ullamcorper.
                                Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus.
                                Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent.
                                Quis adipiscing condimentum interdum leo ullamcorper. Consectetur scelerisque sed lectus non,
                                ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a quisque elementum vitae. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Sed egestas dolor at aliquet egestas ipsum orci ut praesent. Quis adipiscing condimentum interdum
                                leo ullamcorper. Consectetur scelerisque sed lectus non, ac suscipit cras elementum mus. Et tellus donec tempor pellentesque a
                                quisque elementum vitae.
                            </p>
                        </div>
                        <div className="flex mt-10">
                            <div className="w-2/6">
                                <div>
                                    <p className="font-Nova-Eb text-[26px]">Valoraciones</p>
                                    <div className="flex mt-2">
                                        <div className="w-3/6">
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
                                        <div className="w-3/6">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-4/6">
                                <p className="font-Nova-Eb text-[22px]">¿ Qué te pareció este artículo ?, Coméntanos. </p>
                                <ComentCourse/>
                                <ComentCourse/>
                                <ComentCourse/>
                            </div>
                        </div>
                        <div className="mt-32">
                        <hr className="h-[1px] w-full bg-custom2"/>
                            <h4 className="font-Nova-Eb text-center text-[28px] text-neon mt-20 ">Estos cursos  pueden ayudarte </h4>
                            <Slider {...settings} className="mt-10 pb-10">
                                <CardCourse/>
                                <CardCourse/>
                                <CardCourse/>
                                <CardCourse/>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
export default ContentIn