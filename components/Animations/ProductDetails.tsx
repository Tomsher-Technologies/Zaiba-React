import dynamic from 'next/dynamic';
import React, { FC } from 'react';

const ProductDetails: FC = () => {
    return (
        <div className="shadow  w-full mx-auto rounded-lg">
            <div className="animate-pulse flex space-x-4 ">
                <div className="flex-1 space-y-6  h-1/2 bg-white  px-4 py-[40px]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]">
                        <div className="col-span-1">
                            <div className="h-[300px] lg:h-[400px] w-full bg-slate-200 rounded" />
                            <div className="mt-5 flex gap-5 px-[50px]">
                                <div className="h-[100px] w-full bg-slate-200 rounded" />
                                <div className="h-[100px] w-full bg-slate-200 rounded" />
                                <div className="h-[100px] w-full bg-slate-200 rounded" />
                            </div>
                        </div>
                        <div className="col-span-2 space-y-10">
                            <div className="h-2 w-1/4 bg-slate-400 rounded" />
                            <div className="space-y-2">
                                <div className="h-5 w-[75%] bg-slate-400 rounded" />
                                <div className="h-5 w-[50%] bg-slate-400 rounded" />
                            </div>
                            <div className='mt-[40px]'>
                                <div className="h-16 w-[20%] bg-slate-300 rounded" />
                            </div>
                            <div className="w-1/2 grid grid-cols-3 gap-4 mt-[30px]">
                                <div className="h-20  bg-slate-200 rounded-full" />
                                <div className="h-20  bg-slate-200 rounded-full" />
                                <div className="h-20  bg-slate-200 rounded-full" />
                            </div>
                            <div className="h-[1px] bg-slate-200 rounded mt-[30px]" />
                            <div className=" grid grid-cols-5 gap-4 mt-[30px]">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <div className="h-7  bg-slate-200 " key={index} />
                                ))}
                            </div>
                            <div className="border border-gray-300 p-5">
                                <div className="h-[300px] lg:h-[400px] w-full bg-slate-100 rounded p-5 space-y-5" >
                                    <div className="h-[20px] w-1/2 bg-slate-300 rounded" />
                                    <div className="h-[20px] w-1/2 bg-slate-300 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;