import Image from 'next/image';

import CancelPresentationRoundedIcon from '@mui/icons-material/CancelPresentationRounded';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import { ImageInputProps } from '@/types/ImageInputProps';

const ImageInput: React.FC<ImageInputProps> = ({
    label = '',
    inline = false,
    className = '',
    name = '',
    disabled = false,
    onCancel = () => { },
    src = '',
    onChange = () => { },
    hintMessage = false,
    errorMessage = false,
    successMessage = false,
}) => {
    return (
        // form-input-invalid ,  form-input-valid
        <div
            className={`form-element ${className} ${inline ? 'form-element-inline' : ''}`}>
            <div className="form-label my-2">{label}</div>
            <div className="group flex w-full h-32 bg-white rounded-md border border-solid border-gray-300 py-1 flex-col justify-center items-center cursor-pointer relative">
                {!src && !disabled && (
                    <>
                        <BackupOutlinedIcon fontSize="large" />
                        <span className="text-center text-xs mt-2">
                            Drag Your Files Here
                            <br /> or
                            <br /> Click to Upload
                        </span>
                    </>
                )}
                {src && (
                    <>
                        <div className={`rounded w-full h-full cursor-pointer relative`}>
                            <Image
                                src={src}
                                alt="media"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <BackupOutlinedIcon />
                    </>
                )}
                {!disabled && (
                    <>
                        <input
                            type="file"
                            name={name}
                            className="absolute w-full h-full  opacity-0 cursor-pointer"
                            onChange={onChange}
                        />
                        {src && onCancel !== false && (
                            <button
                                className="btn btn-default btn-rounded btn-icon bg-transparent hover:bg-blue-50 text-red-500 hover:text-red-700 btn-raised absolute top-1 right-1"
                                onClick={onCancel}>
                                <CancelPresentationRoundedIcon fontSize='medium' />
                            </button>
                        )}
                    </>
                )}
                {disabled && !src && (
                    <span className="text-center text-xs mt-2 text-red-300">
                        No Files Uploaded
                    </span>
                )}
            </div>

            {hintMessage && <div className="form-hint">{hintMessage}</div>}
            {errorMessage && <div className="form-error">{errorMessage}</div>}
            {successMessage && <div className="form-success">{successMessage}</div>}
        </div>
    );
};

export default ImageInput;