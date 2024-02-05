import React, { FC } from 'react'

const MyOrders: FC = () => {
    return (
        <div className="shadow  w-full mx-auto rounded-lg">
            <div className="animate-pulse flex space-x-4 ">
                <div className="flex-1 space-y-6  h-1/2 bg-white  px-4 py-[40px]">
                    <div className="h-10 w-1/4 bg-slate-400 rounded" />
                    <div className="grid grid-cols-1 gap-4">
                        {Array.from({ length: 6 }, (_, index) => (
                            <div className="h-[60px] bg-slate-200 rounded col-span-1" key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders