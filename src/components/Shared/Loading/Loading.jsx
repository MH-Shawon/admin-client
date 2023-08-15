
const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center space-x-2">
	<div className="w-7 h-7 rounded-full animate-pulse dark:bg-red-500"></div>
	<div className="w-7 h-7 rounded-full animate-pulse dark:bg-blue-500"></div>
	<div className="w-7 h-7 rounded-full animate-pulse dark:bg-green-500"></div>
</div>
    );
}

export default Loading;