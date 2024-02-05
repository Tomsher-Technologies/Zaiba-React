import React, { FC } from 'react'

const CartList: FC = () => {
    return (
        <div className="shadow  w-full mx-auto rounded-lg">
            <div className="animate-pulse flex space-x-4 ">
                <div className="flex-1 space-y-6  h-1/2 bg-white  px-4 py-[40px]">
                    <div className="h-10 w-1/4 bg-slate-400 rounded" />
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="col-span-2">
                                <div className="grid grid-cols-1 gap-5">
                                    {Array.from({ length: 4 }, (_, index) => (
                                        <div className="h-[60px] bg-slate-200 rounded col-span-1" key={index} />
                                    ))}
                                </div>
                                <div className='flex justify-end mt-[30px]'>
                                    <div className=" w-[20%] h-[60px] rounded-full bg-slate-200"></div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="h-full bg-slate-200 rounded col-span-1" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartList;