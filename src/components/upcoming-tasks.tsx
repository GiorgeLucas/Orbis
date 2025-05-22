import { Checkbox } from "@/components/ui/checkbox";

export function UpcomingTasks() {
  const tasks = [
    { id: "1", title: "Team meeting", time: "10:00 AM", completed: true },
    { id: "2", title: "Project deadline", time: "12:00 PM", completed: false },
    { id: "3", title: "Lunch with client", time: "1:30 PM", completed: false },
    {
      id: "4",
      title: "Review presentation",
      time: "3:00 PM",
      completed: false,
    },
    { id: "5", title: "Send weekly report", time: "5:00 PM", completed: false },
  ];

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-start space-x-2">
          <Checkbox id={task.id} checked={task.completed} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor={task.id}
              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                task.completed ? "line-through text-muted-foreground" : ""
              }`}
            >
              {task.title}
            </label>
            <p className="text-xs text-muted-foreground">{task.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
