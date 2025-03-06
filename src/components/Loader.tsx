import React from "react";
import { Skeleton } from "./ui/skeleton";

const Loader = () => {
  return (
    <div className="p-8 space-y-8">
      {/* header */}
      <div>
        <Skeleton className="h-44 w-full rounded-xl" />
      </div>
      {/* metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Skeleton className="h-[84px] rounded-xl" />
        <Skeleton className="h-[84px] rounded-xl" />
        <Skeleton className="h-[84px] rounded-xl" />
        <Skeleton className="h-[84px] rounded-xl" />
        <Skeleton className="h-[84px] rounded-xl" />
      </div>
      {/* dependencies */}
      <div className="h-[376px] flex flex-col gap-3  rounded-xl">
        <Skeleton className="h-[76px] w-full rounded-xl" />
        <Skeleton className="h-[40px] w-full rounded-xl" />
        <Skeleton className="h-[36px] w-full rounded-xl" />
        <Skeleton className="h-[36px] w-full rounded-xl" />
        <Skeleton className="h-[36px] w-full rounded-xl" />
        <Skeleton className="h-[36px] w-full rounded-xl" />
      </div>
      {/* checks */}
      <div className="flex flex-col gap-3  h-96 rounded-xl">
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
      {/* vulnerability */}
      <div className=" w-full flex flex-col gap-3  rounded-xl">
        <Skeleton className="h-48 w-full rounded-xl" />
        <div className="h-24 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Skeleton className="h-[84] rounded-xl" />
          <Skeleton className="h-[84] rounded-xl" />
          <Skeleton className="h-[84] rounded-xl" />
          <Skeleton className="h-[84] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Loader;