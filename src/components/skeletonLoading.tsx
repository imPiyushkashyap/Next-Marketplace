import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => (
  <div className="max-w-md  mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
    <div className="text-3xl font-semibold text-gray-800 mb-2">
      <Skeleton className="h-8 w-1/2" />
    </div>
    <div className="text-lg text-gray-600 mb-4">
      <Skeleton className="h-6 w-3/4" />
    </div>
    <div className="w-full">
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  </div>
);

export default LoadingSkeleton;
