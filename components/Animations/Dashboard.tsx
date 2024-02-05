import React, { FC, Fragment } from 'react'

const Dashboard: FC = () => {
    return (
        <div className="shadow  w-full mx-auto rounded-lg">
            <div className="animate-pulse  space-x-4 px-5 lg:px-10">
                <div className="h-[300px] lg:h-[600px] w-full bg-slate-200 !rounded-[30px]" />
                <div className="grid grid-cols-3 lg:grid-cols-5  gap-5 border border-gray-200 rounded-md p-5 lg:p-7 !mt-5 lg:!mt-[40px] mb-10">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div className='space-y-6' key={index} >
                            <div className="bg-slate-300 w-full h-[100px] lg:h-[200px]" />
                            <div className="bg-slate-400 w-[75%] h-[30px] lg:h-[15px]" />
                            <div className="bg-slate-400 w-[17%] h-[20px] lg:h-[15px]" />
                            <div className="w-full grid grid-cols-3 gap-4 !mt-[30px]">
                                <div className="h-10 lh:h-20  bg-slate-200 rounded-full" />
                                <div className="h-10 lh:h-20  bg-slate-200 rounded-full" />
                                <div className="h-10 lh:h-20  bg-slate-200 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-[300px] lg:h-[600px] w-full bg-slate-200 !rounded-[30px] !my-[20px]" />
                <div className="grid grid-cols-3 lg:grid-cols-5  gap-5 border border-gray-200 rounded-md p-5 lg:p-7 !mt-5 lg:!mt-[40px] mb-10">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div className='space-y-6' key={index} >
                            <div className="bg-slate-300 w-full h-[100px] lg:h-[200px]" />
                            <div className="bg-slate-400 w-[75%] h-[30px] lg:h-[15px]" />
                            <div className="bg-slate-400 w-[17%] h-[20px] lg:h-[15px]" />
                            <div className="w-full grid grid-cols-3 gap-4 !mt-[30px]">
                                <div className="h-10 lh:h-20  bg-slate-200 rounded-full" />
                                <div className="h-10 lh:h-20  bg-slate-200 rounded-full" />
                                <div className="h-10 lh:h-20  bg-slate-200 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;