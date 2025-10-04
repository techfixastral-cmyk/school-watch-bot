import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, AlertCircle, CheckCircle2, Calendar, Bell, Upload, Settings } from "lucide-react";
import BeadleDashboard from "@/components/BeadleDashboard";
import AdviserDashboard from "@/components/AdviserDashboard";
import CoordinatorDashboard from "@/components/CoordinatorDashboard";

type UserRole = "beadle" | "adviser" | "coordinator" | "admin";

const Index = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>("coordinator");

  const roleConfig = {
    beadle: {
      label: "Beadle",
      icon: CheckCircle2,
      description: "Mark attendance for your section",
      color: "bg-gradient-accent",
    },
    adviser: {
      label: "Adviser",
      icon: Upload,
      description: "Manage student lists and review reports",
      color: "bg-gradient-primary",
    },
    coordinator: {
      label: "Coordinator",
      icon: BarChart3,
      description: "View analytics and manage all sections",
      color: "bg-gradient-accent",
    },
    admin: {
      label: "Admin",
      icon: Settings,
      description: "System configuration and user management",
      color: "bg-gradient-primary",
    },
  };

  const stats = [
    { label: "Total Students", value: "1,248", icon: Users, trend: "+12 this week" },
    { label: "Today's Attendance", value: "94.2%", icon: CheckCircle2, trend: "+2.1% from yesterday" },
    { label: "Pending Reports", value: "3", icon: AlertCircle, trend: "2 sections" },
    { label: "This Week", value: "92.8%", icon: Calendar, trend: "Avg attendance" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">POD AI Monitor</h1>
                <p className="text-sm text-muted-foreground">Attendance Management System</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="capitalize">
                  {roleConfig[currentRole].label}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Role Selector (Demo purposes) */}
        <Card className="mb-8 shadow-medium">
          <CardHeader>
            <CardTitle>Switch View (Demo)</CardTitle>
            <CardDescription>Select a role to see different interfaces</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(Object.entries(roleConfig) as [UserRole, typeof roleConfig[UserRole]][]).map(([role, config]) => {
                const Icon = config.icon;
                return (
                  <button
                    key={role}
                    onClick={() => setCurrentRole(role)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      currentRole === role
                        ? "border-primary bg-primary/5 shadow-medium"
                        : "border-border hover:border-primary/50 hover:shadow-soft"
                    }`}
                  >
                    <div className={`h-12 w-12 rounded-lg ${config.color} flex items-center justify-center mb-3 mx-auto`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">{config.label}</h3>
                    <p className="text-xs text-muted-foreground">{config.description}</p>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.trend}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Role-specific Content */}
        <div className="space-y-6">
          {currentRole === "beadle" && <BeadleDashboard />}
          {currentRole === "adviser" && <AdviserDashboard />}
          {currentRole === "coordinator" && <CoordinatorDashboard />}
          {currentRole === "admin" && (
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
                <CardDescription>System configuration and user management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Admin interface coming soon...</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
