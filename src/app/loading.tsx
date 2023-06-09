export default function Loading() {
    return (
        <div className="absolulute inset-0 flex flex-1 items-center justify-center">
            <div className="m-6 flex h-24 w-24 justify-around">
                <div className="h-4 w-4 origin-[50%_100%] animate-bouncing-ball rounded-full bg-black"></div>
                <div className="animation-delay-100 h-4 w-4 origin-[50%_100%] animate-bouncing-ball rounded-full bg-black"></div>
                <div className="animation-delay-200 h-4 w-4 origin-[50%_100%] animate-bouncing-ball rounded-full bg-black"></div>
            </div>
        </div>
    );
}
