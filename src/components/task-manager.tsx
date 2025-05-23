import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Clock, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ScrollArea } from "./ui/scroll-area";

export function TaskManager() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);

  // Mock data for tasks
  const tasks = [
    {
      id: "1",
      title: "Team meeting",
      description: "Weekly team sync",
      date: "2023-05-20",
      time: "10:00 AM",
      completed: false,
      priority: "high",
      tags: ["work", "meeting"],
    },
    {
      id: "2",
      title: "Project deadline",
      description: "Submit final deliverables",
      date: "2023-05-20",
      time: "12:00 PM",
      completed: false,
      priority: "high",
      tags: ["work", "deadline"],
    },
    {
      id: "3",
      title: "Lunch with client",
      description: "Discuss new project opportunities",
      date: "2023-05-20",
      time: "1:30 PM",
      completed: false,
      priority: "medium",
      tags: ["work", "meeting"],
    },
    {
      id: "4",
      title: "Review presentation",
      description: "Prepare for tomorrow's presentation",
      date: "2023-05-20",
      time: "3:00 PM",
      completed: false,
      priority: "medium",
      tags: ["work"],
    },
    {
      id: "5",
      title: "Grocery shopping",
      description: "Buy ingredients for dinner",
      date: "2023-05-20",
      time: "5:30 PM",
      completed: false,
      priority: "low",
      tags: ["personal", "errands"],
    },
    {
      id: "6",
      title: "Workout",
      description: "30 min cardio + strength training",
      date: "2023-05-20",
      time: "7:00 PM",
      completed: false,
      priority: "medium",
      tags: ["personal", "health"],
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-amber-500";
      case "low":
        return "text-green-500";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Task Manager</h1>
        <Dialog
          open={isAddTaskDialogOpen}
          onOpenChange={setIsAddTaskDialogOpen}
        >
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Tarefa</DialogTitle>
              <DialogDescription>
                Preencha os detalhes da tarefa e clique em salvar quando
                terminar.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[400px] w-full pr-5">
              <div className="grid gap-2 pb-4">
                <Label htmlFor="title">Título</Label>
                <Input id="title" placeholder="Título da tarefa" />
              </div>
              <div className="grid gap-2 pb-4">
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" placeholder="Descrição da tarefa" />
              </div>
              <div className="grid grid-cols-2 gap-4 pb-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Data</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Hora</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="grid gap-2 pb-4">
                <Label htmlFor="priority">Prioridade</Label>
                <Select>
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">Alta</SelectItem>
                    <SelectItem value="medium">Média</SelectItem>
                    <SelectItem value="low">Baixa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 pb-4">
                <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                <Input id="tags" placeholder="trabalho, pessoal, etc." />
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button type="submit">Salvar Tarefa</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="today" className="space-y-4">
            <TabsList>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All Tasks</TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Today's Tasks</CardTitle>
                  <CardDescription>
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex flex-col space-y-2 rounded-lg border p-3"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-2">
                            <Checkbox id={task.id} />
                            <div>
                              <label
                                htmlFor={task.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {task.title}
                              </label>
                              <p className="text-xs text-muted-foreground mt-1">
                                {task.description}
                              </p>
                            </div>
                          </div>
                          <Badge
                            className={getPriorityColor(task.priority)}
                            variant="outline"
                          >
                            {task.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 pt-1">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {task.time}
                          </div>
                          <div className="flex items-center gap-1">
                            {task.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>
                    Tasks scheduled for the future
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Upcoming tasks would appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Completed Tasks</CardTitle>
                  <CardDescription>
                    Tasks you've already completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Completed tasks would appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>All Tasks</CardTitle>
                  <CardDescription>
                    View and manage all your tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All tasks would appear here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
