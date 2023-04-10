export default function CardSkeleton() {
  return (
    <>
      <div role="status" className="max-w-sm animate-pulse border-2 marker:border-blue-500 rounded-2xl py-8 px-5">
        <div className="h-52 bg-gray-200 dark:bg-gray-700 w-48 mb-4 m-auto"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 max-w-[100px] mb-2.5"></div>
        <div className="h-10 bg-gray-200 rounded-xl  dark:bg-gray-700 max-w-[100px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}
