import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { HabitProgress } from "@/components/habit-progress";
import { UpcomingTasks } from "@/components/upcoming-tasks";
import { GoalProgress } from "@/components/goal-progress";

export function Dashboard() {
  return (
    <div className="space-y-6 h-full overflow-visible">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Habit Streak</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 days</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Tasks Completed
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/36</div>
            <p className="text-xs text-muted-foreground">67% completion rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Goals Progress
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/5</div>
            <p className="text-xs text-muted-foreground">
              60% of quarterly goals
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Focus Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4h 26m</div>
            <p className="text-xs text-muted-foreground">+1h from yesterday</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="habits">Habits</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-1 gap-4">
              <CardHeader>
                <CardTitle className="text-2xl">Habit Progress</CardTitle>
                <CardDescription>Your top habits this week</CardDescription>
              </CardHeader>
              <CardContent>
                <HabitProgress />
              </CardContent>
            </Card>
            <Card className="col-span-1 gap-4">
              <CardHeader>
                <CardTitle className="text-2xl">Upcoming Tasks</CardTitle>
                <CardDescription>Your schedule for today</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingTasks />
              </CardContent>
            </Card>
            <Card className="col-span-1 gap-4">
              <CardHeader>
                <CardTitle className="text-2xl">Goal Progress</CardTitle>
                <CardDescription>Your quarterly goals</CardDescription>
              </CardHeader>
              <CardContent>
                <GoalProgress />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="habits">
          <Card>
            <CardHeader>
              <CardTitle>Habit Details</CardTitle>
              <CardDescription>View and manage your habits</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Detailed habit tracking information would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <CardTitle>Task Details</CardTitle>
              <CardDescription>View and manage your tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Detailed task management information would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Goal Details</CardTitle>
              <CardDescription>View and manage your goals</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Detailed goal tracking information would appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
