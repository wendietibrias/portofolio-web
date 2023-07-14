import ReactLoading from 'react-loading';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center mt-10 flex-col">
            <ReactLoading type="spin" width={35} height={35} color={`rgb(59 130 246)`} />
            {/* <p className="text-center font-semibold text-sm mt-3 text-blue-500">Loading</p> */}
        </div>
    )
}

export default LoadingSpinner;