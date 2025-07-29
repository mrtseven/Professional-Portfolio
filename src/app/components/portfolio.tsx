"use client"
import React from 'react';
import {translate} from "@/config/config";
import portfolioItem from "@/items/portfolioItem";
import DecryptedText from "@/components/animations/decryptedText";

const portfolioComponent = (trans:any) => {
    const [portfolioActive, setPortfolioActive] = React.useState('all');

    return (
        <>
            <div className="row mb-5">
                <div className="col">
                    <h6 className="font-weight-700  text-uppercase mb-2 text-zinc-800 dark:text-zinc-200">
                        <DecryptedText
                            text={`${translate("portfolio", trans)}`}
                            speed={50}
                            maxIterations={20}
                            characters="ABCD1234!?"
                            className="revealed"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                        />
                    </h6>
                    <div className="col-md-12 flex items-center justify-center my-3">
                        <hr className="divider divider-lg divider-center"/>
                    </div>
                </div>
            </div>


            <div className="row text-center">
                <div className="col">
                    <ul className="filter mb-0 pl-0">
                        <li className=" radius-2 mb-3 mb-md-0">
                            <a
                                data-filter="all"
                                href="#"
                                className={`${portfolioActive === 'all' && 'active'} inner radius-2 cursor-target`}
                                onClick={()=>{
                                    document.querySelectorAll('.item.web').forEach(item => item.classList.remove('disable'));
                                    document.querySelectorAll('.item.graphic').forEach(item => item.classList.remove('disable'));
                                    document.querySelectorAll('.item.motion').forEach(item => item.classList.remove('disable'));
                                    setPortfolioActive('all')
                                }}
                            >
                                <DecryptedText
                                    text={`${translate("all", trans)}`}
                                    speed={50}
                                    maxIterations={20}
                                    characters="ABCD1234!?"
                                    className="revealed"
                                    parentClassName="all-letters"
                                    encryptedClassName="encrypted"
                                />
                            </a>
                        </li>
                        <li className=" radius-2 mb-3 mb-md-0">
                            <a
                                onClick={()=>{
                                    setPortfolioActive('web')
                                    document.querySelectorAll('.item.web').forEach(item => item.classList.remove('disable'));
                                    document.querySelectorAll('.item.graphic').forEach(item => item.classList.add('disable'));
                                    document.querySelectorAll('.item.motion').forEach(item => item.classList.add('disable'));
                                }}
                                data-filter="web"
                                href="#"
                                className={`${portfolioActive === 'web' && 'active'} inner radius-2  cursor-target`}
                            >
                                <DecryptedText
                                    text={`${translate("web_design", trans)}`}
                                    speed={50}
                                    maxIterations={20}
                                    characters="ABCD1234!?"
                                    className="revealed"
                                    parentClassName="all-letters"
                                    encryptedClassName="encrypted"
                                />
                            </a>
                        </li>
                        <li className=" radius-2 mb-3 mb-md-0">
                            <a
                                data-filter="graphic"
                                href="#"
                                className={`${portfolioActive === 'graphic' && 'active'} inner radius-2  cursor-target`}
                                onClick={()=>{
                                    setPortfolioActive('graphic')
                                    document.querySelectorAll('.item.web').forEach(item => item.classList.add('disable'));
                                    document.querySelectorAll('.item.graphic').forEach(item => item.classList.remove('disable'));
                                    document.querySelectorAll('.item.motion').forEach(item => item.classList.add('disable'));
                                }}
                            >
                                <DecryptedText
                                    text={`${translate("graphic_design", trans)}`}
                                    speed={50}
                                    maxIterations={20}
                                    characters="ABCD1234!?"
                                    className="revealed"
                                    parentClassName="all-letters"
                                    encryptedClassName="encrypted"
                                />
                            </a>
                        </li>
                        <li className=" radius-2 mb-3 mb-md-0">
                            <a
                                data-filter="developer"
                                href="#"
                                className={`${portfolioActive === 'motion' && 'active'} inner radius-2  cursor-target`}
                                onClick={()=>{
                                    setPortfolioActive('motion')
                                    document.querySelectorAll('.item.web').forEach(item => item.classList.add('disable'));
                                    document.querySelectorAll('.item.graphic').forEach(item => item.classList.add('disable'));
                                    document.querySelectorAll('.item.motion').forEach(item => item.classList.remove('disable'));

                                }}
                            >
                                <DecryptedText
                                    text={`${translate("developer", trans)}`}
                                    speed={50}
                                    maxIterations={20}
                                    characters="ABCD1234!?"
                                    className="revealed"
                                    parentClassName="all-letters"
                                    encryptedClassName="encrypted"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="row mt-4">

                {portfolioItem('web' , 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740')}

                {portfolioItem('web' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_hct7rGTmGITfG5QLTWtpkRXGYnaLiCv-g&s')}

                {portfolioItem('graphic' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSRDF-NcV93-tgQyp3Kc6oH5Wqp0h2_ICYA&s')}

                {portfolioItem('web' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5AFpCNKSarFu7kxEApXIF-aumd_s8_eGKw&s')}

                {portfolioItem('graphic' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNnf7laOZLF6TT2-PK4Jgq-bDnjmhQEbfSnA&s')}

                {portfolioItem('web' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzmdqGMagOh5lW67a0hkaqAcC2KLUvJA_Rw&s')}

                {portfolioItem('developer' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPt1QzpYJmLaswgc7HXuhgW7E_4m7R1wZc9g&s')}

                {portfolioItem('graphic' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Kp1TrvsoQnR8r7tMMDdbwGOp4c610kjAUg&s')}

                {portfolioItem('graphic' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO37v_q0KYG_wqTvUnNpUTk6men_nyD-3_ZQ&s')}

                {portfolioItem('graphic' , 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D')}

                {portfolioItem('developer' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0UU3p0vF5Mp_oNg0esfa2B71DIfnk_h2OQ&s')}

                {portfolioItem('developer' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWxw4W0D6MKRk6uXWeHZGh6quMCX6tDLumQ&s')}

            </div>
        </>
    );
};

export default portfolioComponent;
