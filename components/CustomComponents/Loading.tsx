import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


interface LoadingProps {
    size?: any;
    className?: string;
}
const Loading: React.FC<LoadingProps> = ({ size, className }) => {
    return (
        <div className='flex justify-center items-center'>
            <Box >
                <CircularProgress className={className} size={size} />
            </Box>
        </div>
    );
};

export default Loading;