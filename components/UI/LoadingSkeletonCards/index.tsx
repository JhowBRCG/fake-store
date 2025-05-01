type LoadingSkeletonCards = {
  cards: number;
};

export default function LoadingSkeleton({ cards }: LoadingSkeletonCards) {
  return (
    <div className="mt-[20px] grid grid-cols-2 gap-[2px] overflow-hidden rounded-lg md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
      {Array.from({ length: cards }).map((_, i) => (
        <article className="h-full bg-white" key={i}>
          <div className="relative h-[200px] border-b">
            <p className="absolute inset-0 m-auto h-fit w-fit text-slate-600">
              loading...
            </p>
          </div>
          <div className="h-[130px] px-[10px] py-[15px]">
            <h2></h2>
            <div className="flex items-center gap-1"></div>
            <div className="mt-[8px] flex items-center">
              <div className="flex items-center gap-1 border-r pr-[4px]">
                <p className="text-xs"></p>
              </div>
              <p className="pl-[4px] text-xs"></p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
