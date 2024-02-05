import React, { FC } from 'react'

const Offers: FC = () => {
    return (
        <div className='grid grid-cols-1  gap-10'>
            {Array.from({ length: 1 }, (_, index) => (
                <div className="animate-pulse flex-1 space-y-6  h-1/2 bg-white  px-4 py-[40px] space-x-4 " key={index} >
                    <div className="h-6 bg-slate-400 rounded-lg w-1/4" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-14 bg-slate-200 rounded col-span-1" />
                        <div className="h-14 bg-slate-200 rounded col-span-1" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                        {Array.from({ length: 10 }, (_, index) => (
                            <div className="h-[200px] bg-slate-300 rounded-xl col-span-1" key={index} />
                        ))}
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Offers;