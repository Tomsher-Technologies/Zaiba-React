import React, { FC } from 'react';

const StoreLocator: FC = () => {
    return (
        <div className="shadow  w-full mx-auto rounded-lg">
            <div className="animate-pulse flex space-x-4 ">
                <div className="flex-1 space-y-6  h-1/2 bg-white  px-4 py-[40px]">
                    <div className="space-y-3">
                        <div className="h-10 w-1/2 bg-slate-400 rounded" />
                    </div>
                    <div className="h-2 w-1/3 bg-slate-400 rounded" />
                    <div className="grid grid-cols-5 gap-4">
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                        <div className="h-[220px] bg-slate-200 rounded col-span-1" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StoreLocator;