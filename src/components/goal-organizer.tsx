import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, Plus } from "lucide-react";

export function GoalOrganizer() {
  // Mock data for goals
  const goals = [
    {
      id: "1",
      title: "Complete Project X",
      description: "Finish all deliverables for Project X",
      deadline: "2023-06-30",
      progress: 75,
      category: "work",
      tasks: [
        { id: "t1", title: "Research phase", completed: true },
        { id: "t2", title: "Design phase", completed: true },
        { id: "t3", title: "Development phase", completed: false },
        { id: "t4", title: "Testing phase", completed: false },
      ],
    },
    {
      id: "2",
      title: "Learn New Technology",
      description: "Master React and Next.js framework",
      deadline: "2023-07-15",
      progress: 45,
      category: "personal development",
      tasks: [
        { id: "t5", title: "Complete basic tutorial", completed: true },
        { id: "t6", title: "Build sample project", completed: true },
        { id: "t7", title: "Learn advanced concepts", completed: false },
        { id: "t8", title: "Contribute to open source", completed: false },
      ],
    },
    {
      id: "3",
      title: "Improve Fitness",
      description: "Reach target weight and fitness level",
      deadline: "2023-08-31",
      progress: 60,
      category: "health",
      tasks: [
        { id: "t9", title: "Establish workout routine", completed: true },
        { id: "t10", title: "Maintain diet plan", completed: true },
        {
          id: "t11",
          title: "Reach intermediate fitness level",
          completed: false,
        },
        { id: "t12", title: "Participate in 5k run", completed: false },
      ],
    },
    {
      id: "4",
      title: "Read 10 Books",
      description: "Complete reading list for personal growth",
      deadline: "2023-12-31",
      progress: 30,
      category: "personal development",
      tasks: [
        { id: "t13", title: "Book 1: Atomic Habits", completed: true },
        { id: "t14", title: "Book 2: Deep Work", completed: true },
        {
          id: "t15",
          title: "Book 3: The Psychology of Money",
          completed: true,
        },
        { id: "t16", title: "Book 4-10", completed: false },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Goal Organizer</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Goal
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {goals.map((goal) => (
          <Card key={goal.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{goal.title}</CardTitle>
                <Badge>{goal.category}</Badge>
              </div>
              <CardDescription>{goal.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pb-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm">Progress</span>
                  <span className="text-sm font-medium">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Tasks</h4>
                {goal.tasks.map((task) => (
                  <div key={task.id} className="flex items-center space-x-2">
                    <div
                      className={`h-4 w-4 rounded-full ${task.completed ? "bg-primary" : "bg-muted"}`}
                    >
                      {task.completed && (
                        <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                      )}
                    </div>
                    <span
                      className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}
                    >
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                Deadline: {goal.deadline}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
