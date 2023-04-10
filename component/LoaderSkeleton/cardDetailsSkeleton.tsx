export default function CardDetailsSkeleton() {
    return (
        <>
            <div className="container mx-auto px-4">
                <div role="status" className="grid grid-cols-2 mt-10 max-w-full animate-pulse border-2 marker:border-blue-500 rounded-2xl py-8 px-5">
                    <div>
                        <div className="bg-gray-200 dark:bg-gray-700 w-full h-96 mb-4 m-auto"></div>
                    </div>
                    <div className="pl-5">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 max-w-[100px] mb-2.5"></div>
                        <div className="h-10 bg-gray-200 rounded-xl  dark:bg-gray-700 max-w-[100px] mt-10"></div>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    );
}
