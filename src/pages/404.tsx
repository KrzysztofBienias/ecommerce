export default function Custom404() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <main className="text-center">
                <h2 className="text-6xl font-bold">Oops, page not found</h2>
                <p className="my-8">
                    We are very sorry for the inconvenience. It looks like you&apos;re trying to
                    <br />
                    access a page that has been deleted or never even existed
                </p>

                <a href="/" className="group cursor-pointer p-2 hover:font-bold sm:p-4 lg:p-6">
                    <span className="relative inline-block overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-[100%_50%] before:scale-x-0 before:bg-gray-700 before:transition-transform before:duration-300 before:ease-[cubic-bezier(.76,0,.24,1)] focus:before:origin-[0%_50%] focus:before:scale-x-100  group-hover:before:origin-[0%_50%] group-hover:before:scale-x-100">
                        Go back to the home page
                    </span>
                </a>
            </main>
        </div>
    );
}
