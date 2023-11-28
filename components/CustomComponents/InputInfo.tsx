import React, { FC } from 'react';

import { InputInfoProps } from '@/types/CommonInputTextProps';

const InputInfo: FC<InputInfoProps> = ({ label, content }) => {
    return (
        <div className='w-full flex flex-col gap-1 mb-2'>
            {label && <label className='flex-label'>{label} :</label>}
            <div className='flex flex-col gap-2 p-2 bg-slate-100 rounded-md'>
                {content}
            </div>
        </div>
    );
}

export default InputInfo;