import React, { FC } from 'react'

const OrderDetails: FC = () => {
    return (
        <div className="shadow  w-full mx-auto rounded-lg">
            <div className="animate-pulse flex space-x-4 ">
                <div className="flex-1 space-y-6  h-1/2 bg-white  px-4 py-[40px]">
                    <div className="h-6 w-1/3 bg-slate-400 rounded" />
                    <div className="h-6 w-1/2 bg-slate-400 rounded" />
                    <div className="w-full h-[70px] bg-slate-200 rounded col-span-1" />

                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-4 bg-slate-400 rounded col-span-2" />
                    </div>
                    <div className="h-4 bg-slate-400 rounded" />
                    <div className="h-4 bg-slate-400 rounded" />
                    <div className="h-4 bg-slate-400 rounded" />
                    <div className="h-4 bg-slate-400 rounded" />
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;