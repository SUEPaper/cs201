import React from "react";
import HaiwenImageUrl from '@site/static/img/haiwen.jpg';

function Maintainers(): JSX.Element {

    return (
        <div className="w-4/5 my-14 mx-auto">
            <h2 className="text-2xl font-bold">课程维护</h2>

            <div className="bg-white w-4/5 mx-auto mt-5 mb-1 rounded-lg shadow-2xl text-center">
             <table className="mx-7 my-7">
                    <thead>
                        <tr className="border-t-0 border-b-2">
                            <th className="border-0 bg-white w-64"></th>
                            <th className="border-0 bg-white w-32">名字</th>
                            <th className="border-0 bg-white w-64">邮箱</th>
                            <th className="border-0 bg-white w-64">GitHub账号</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-0">
                            <td className="border-0 bg-white"><img className="rounded-full max-w-20 max-h-20 object-cover" src={HaiwenImageUrl}/></td>
                            <td className="border-0 bg-white">章海文</td>
                            <td className="border-0 bg-white">haiwensummer@gmail.com</td>
                            <td className="border-0 bg-white"><a href="https://github.com/HaiwenZhang">HaiwenZhang</a></td>
                        </tr>                     
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Maintainers;