import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Plus, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HabitTracker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock data for habits
  const habits = [
    {
      id: "1",
      name: "Morning Meditation",
      frequency: "Daily",
      streak: 12,
      progress: 85,
    },
    {
      id: "2",
      name: "Exercise",
      frequency: "3x Week",
      streak: 8,
      progress: 70,
    },
    { id: "3", name: "Reading", frequency: "Daily", streak: 6, progress: 60 },
    {
      id: "4",
      name: "Journaling",
      frequency: "Daily",
      streak: 14,
      progress: 90,
    },
    {
      id: "5",
      name: "Drink Water",
      frequency: "Daily",
      streak: 20,
      progress: 95,
    },
  ];

  // Mock data for habit log
  const habitLog = [
    { date: "2023-05-15", habits: ["1", "2", "3", "5"] },
    { date: "2023-05-16", habits: ["1", "3", "4", "5"] },
    { date: "2023-05-17", habits: ["1", "2", "4", "5"] },
    { date: "2023-05-18", habits: ["1", "3", "5"] },
    { date: "2023-05-19", habits: ["1", "2", "4", "5"] },
    { date: "2023-05-20", habits: ["1", "3", "4", "5"] },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Habit Tracker</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Habit
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Habits</TabsTrigger>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Tabs defaultValue="cards">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="table">Table</TabsTrigger>
            </TabsList>

            <TabsContent value="cards" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {habits.map((habit) => (
                  <Card key={habit.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle>{habit.name}</CardTitle>
                        <Badge variant="outline">{habit.frequency}</Badge>
                      </div>
                      <CardDescription>
                        Current streak: {habit.streak} days
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm font-medium">
                          {habit.progress}%
                        </span>
                      </div>
                      <Progress value={habit.progress} className="h-2" />
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Button variant="outline" size="sm">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Log Today
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="table" className="mt-0">
              <Card>
                <CardContent className="p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-medium">Habits</th>
                          {/* Generate last 7 days */}
                          {Array.from({ length: 7 }).map((_, i) => {
                            const date = new Date();
                            date.setDate(date.getDate() - 6 + i);
                            return (
                              <th
                                key={i}
                                className="p-2 text-center font-medium"
                              >
                                <div className="flex flex-col items-center">
                                  <span className="text-xs text-muted-foreground">
                                    {date.toLocaleDateString("en", {
                                      weekday: "short",
                                    })}
                                  </span>
                                  <span>{date.getDate()}</span>
                                </div>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {habits.map((habit) => (
                          <tr key={habit.id} className="border-b">
                            <td className="p-2">
                              <div className="font-medium">{habit.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {habit.frequency}
                              </div>
                            </td>
                            {/* Generate last 7 days */}
                            {Array.from({ length: 7 }).map((_, i) => {
                              const date = new Date();
                              date.setDate(date.getDate() - 6 + i);
                              const dateString = date
                                .toISOString()
                                .split("T")[0];

                              // Check if habit was completed on this date
                              const isCompleted = habitLog.some(
                                (log) =>
                                  log.date === dateString &&
                                  log.habits.includes(habit.id),
                              );

                              return (
                                <td key={i} className="p-2 text-center">
                                  <div className="flex justify-center">
                                    <Checkbox
                                      checked={isCompleted}
                                      className="h-6 w-6 rounded-md"
                                    />
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Daily Habits</CardTitle>
              <CardDescription>Track your daily habits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {habits
                  .filter((habit) => habit.frequency === "Daily")
                  .map((habit) => (
                    <div
                      key={habit.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <Checkbox id={`daily-${habit.id}`} />
                        <label
                          htmlFor={`daily-${habit.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {habit.name}
                        </label>
                      </div>
                      <Badge variant="outline">{habit.streak} days</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Weekly View</CardTitle>
              <CardDescription>
                Your habit performance this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 text-center">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day) => (
                    <div key={day} className="font-medium">
                      {day}
                    </div>
                  ),
                )}
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md bg-muted/50 flex items-center justify-center"
                  >
                    <span className="text-xs">
                      {Math.floor(Math.random() * 5) + 1}/{habits.length}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Monthly Calendar</CardTitle>
              <CardDescription>
                Track your habits throughout the month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />

              {date && (
                <div className="mt-4 space-y-2">
                  <h3 className="font-medium">
                    Hábitos para {date.toLocaleDateString("pt-BR")}
                  </h3>

                  {date > new Date() ? (
                    <div className="p-4 text-center rounded-md bg-muted/50">
                      <p className="text-muted-foreground">
                        Nenhum registro para esse dia
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {habits.map((habit) => {
                        // Simulate if the habit was completed on this date
                        // In a real app, this would come from your habit log data
                        const isCompleted = habitLog.some(
                          (log) =>
                            new Date(log.date).toDateString() ===
                              date.toDateString() &&
                            log.habits.includes(habit.id),
                        );

                        return (
                          <div
                            key={habit.id}
                            className="flex items-center justify-between p-2 rounded-md border"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-4 w-4 rounded-full ${isCompleted ? "bg-primary" : "bg-muted"}`}
                              >
                                {isCompleted && (
                                  <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                                )}
                              </div>
                              <span
                                className={
                                  isCompleted
                                    ? "line-through text-muted-foreground"
                                    : ""
                                }
                              >
                                {habit.name}
                              </span>
                            </div>
                            <Badge variant="outline">{habit.frequency}</Badge>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Habit Statistics</CardTitle>
              <CardDescription>
                Your habit performance over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
                <p className="text-muted-foreground">
                  Habit performance charts would appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
