import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MsgButton = () => {
    return (
        <div>
            <button class=" bg-black text-white h-8 w-40 uppercase ">
                send message <ArrowRightAltIcon></ArrowRightAltIcon>
            </button>
        </div>
    );
};

export default MsgButton;