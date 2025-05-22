import { Progress } from "@/components/ui/progress"

export function GoalProgress() {
  const goals = [
    { name: "Complete project X", progress: 75 },
    { name: "Learn new technology", progress: 45 },
    { name: "Improve fitness", progress: 60 },
    { name: "Read 10 books", progress: 30 },
  ]

  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <div key={goal.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{goal.name}</span>
            <span className="text-xs text-muted-foreground">{goal.progress}%</span>
          </div>
          <Progress value={goal.progress} className="h-2" />
        </div>
      ))}
    </div>
  )
}
