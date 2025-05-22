import { Progress } from "@/components/ui/progress";

export function HabitProgress() {
  const habits = [
    { name: "Morning Meditation", progress: 85, streak: 12 },
    { name: "Daily Exercise", progress: 70, streak: 8 },
    { name: "Reading", progress: 60, streak: 6 },
    { name: "Journaling", progress: 90, streak: 14 },
  ];

  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <div key={habit.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{habit.name}</span>
            <span className="text-xs text-muted-foreground">
              {habit.streak} days
            </span>
          </div>
          <Progress value={habit.progress} className="h-2" />
        </div>
      ))}
    </div>
  );
}
