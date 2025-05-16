"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ArticlesTabs() {
  return (
    <Tabs defaultValue="unpublished" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-primary/10">
        <TabsTrigger
          value="unpublished"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Unpublished Articles
        </TabsTrigger>
        <TabsTrigger
          value="published"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Published Articles
        </TabsTrigger>
        <TabsTrigger
          value="scheduled"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Scheduled Articles
        </TabsTrigger>
        <TabsTrigger
          value="archived"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Archived Articles
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
