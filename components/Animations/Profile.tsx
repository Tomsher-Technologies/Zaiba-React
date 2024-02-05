import React, { FC } from 'react';

const Profile: FC = () => {
    return (
        <div className="shadow  w-full mx-auto rounded-lg">
            <div className="animate-pulse flex space-x-4 ">
                <div className="flex-1 space-y-6  h-1/2 bg-white  px-4 py-[40px]">
                    <div className="h-7 w-[18%] bg-slate-400 rounded" />
                    <div className="w-1/3 grid grid-cols-2 gap-4">
                        {Array.from({ length: 14 }, (_, index) => (
                            <div className="h-3 w-full bg-slate-400 rounded" key={index} />
                        ))}
                    </div>
                    <div className="h-7 w-[18%] bg-slate-400 rounded mt-5" />
                    <div className="w-1/3 grid grid-cols-2 gap-4">
                        {Array.from({ length: 14 }, (_, index) => (
                            <div className="h-3 w-full bg-slate-400 rounded" key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile