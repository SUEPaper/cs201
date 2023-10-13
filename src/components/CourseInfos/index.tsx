import React from "react";
import { faLocationDot, faClock, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useBaseUrl from '@docusaurus/useBaseUrl';

function CourseInfos(): JSX.Element {

    return (
        <div className="w-4/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">课程信息</h2>

            <div className="bg-white w-4/5 mx-auto mt-5 mb-1 rounded-lg shadow-2xl">

                <div className="float-left">
                    <div className="my-5 ml-14">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>     
                        <span className="text-xl ml-2 font-bold">简介</span>
                    </div>

                    <div className="indent-9 text-left mt-1 mx-5 font-normal text-lg">
                        <p>
                        Python语言是一种解释型的、面向对象的计算机程序设计语言，广泛用于数据分析、机器学习、科学计算、软件开发等领域，特别适用于快速的应用程序开发。本课程要求学生掌握程序设计的理论与方法，具备计算思维，熟悉Python语言的基本语法和常用函数库，能够分析和解决常见计算问题，并使用Python语言实现解决方案。同时，还应能够熟练配置和使用Python开发工具，并掌握正确的编码规范。
                        </p>

                        <p className="text-orange-500 font-bold">请在课程开始前仔细阅读<a href={useBaseUrl("/basic/")}>预学习</a>的所有内容，安装好Python和VS Code环境的搭建。</p>
                    </div>
                </div>
                <div className="mt-5 ml-14">
                    <FontAwesomeIcon icon={faClock} /> 
                    <span className="text-xl ml-2 font-bold">时间：</span> 
                    <p className="inline-block">周二下午1:20 ～ 晚上 8:25</p>
                </div>

                <div className="my-5 ml-14">
                    <FontAwesomeIcon icon={faLocationDot} /> 
                    <span className="text-xl ml-3 font-bold">地点：</span>
                    <p className="inline-block">临港一教408第四机房</p>
                </div>
            </div>
        </div>
    )

}

export default CourseInfos;