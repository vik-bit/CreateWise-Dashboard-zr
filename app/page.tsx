import { DashboardShell } from "@/components/dashboard-shell"
import { ArticlesTable } from "@/components/articles-table"
import { ArticlesTabs } from "@/components/articles-tabs"
import { SearchBar } from "@/components/search-bar"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-4">
        <ArticlesTabs />
        <SearchBar />
        <ArticlesTable />
      </div>
    </DashboardShell>
  )
}
