import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Skeleton className="h-8 w-32" />
        <div className="flex-1" />
        <Skeleton className="h-8 w-24" />
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:p-6">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-10 w-1/4" />
            <Skeleton className="h-10 w-1/4" />
          </div>
          <Skeleton className="h-10 w-full" />
          <div className="rounded-md border">
            <div className="h-10 border-b px-4 py-2">
              <Skeleton className="h-5 w-full" />
            </div>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4 border-b px-4 py-4">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/6" />
                <Skeleton className="h-4 w-1/6" />
                <Skeleton className="h-4 w-1/6" />
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-8 w-8" />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </main>
    </div>
  )
}
