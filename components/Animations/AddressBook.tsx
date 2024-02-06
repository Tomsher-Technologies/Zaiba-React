import React, { FC } from 'react'

const AddressBook: FC = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
            {Array.from({ length: 2 }, (_, index) => (
                <div key={index} className="shadow  w-full mx-auto rounded-lg">
                    <div className="animate-pulse flex space-x-4 ">
                        <div className="flex-1 space-y-6  h-1/2 bg-white  px-4 py-[20px]">
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-3 bg-slate-400 rounded col-span-2" />
                                    <div className="h-8 bg-blue-200 rounded col-span-1" />
                                </div>
                                <div className="h-2 bg-slate-400 rounded" />
                            </div>
                            <div className="h-2 bg-slate-400 rounded" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-8 bg-slate-200 rounded col-span-1" />
                                <div className="h-8 bg-slate-200 rounded col-span-1" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AddressBook;