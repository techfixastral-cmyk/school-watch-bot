import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Download, AlertTriangle, Users } from "lucide-react";

const CoordinatorDashboard = () => {
  const sections = [
    { name: "3-A", total: 25, present: 24, absent: 1, rate: 96 },
    { name: "3-B", total: 28, present: 26, absent: 2, rate: 92.9 },
    { name: "3-C", total: 26, present: 24, absent: 2, rate: 92.3 },
    { name: "3-D", total: 27, present: 25, absent: 2, rate: 92.6 },
  ];

  const alerts = [
    { student: "Mike Johnson", section: "3-A", absences: 5, status: "warning" },
    { student: "Emily Davis", section: "3-B", absences: 7, status: "critical" },
    { student: "Alex Turner", section: "3-C", absences: 4, status: "watch" },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Attendance Overview</CardTitle>
              <CardDescription>Real-time attendance across all sections</CardDescription>
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">{section.name}</span>
                    </div>
                    <div>
                      <p className="font-medium">Section {section.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {section.present}/{section.total} present
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={section.rate >= 95 ? "default" : "secondary"}>
                      {section.rate}%
                    </Badge>
                  </div>
                </div>
                <Progress value={section.rate} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Attendance Alerts
            </CardTitle>
            <CardDescription>Students requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    alert.status === "critical"
                      ? "border-destructive bg-destructive/5"
                      : alert.status === "warning"
                      ? "border-warning bg-warning/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{alert.student}</p>
                      <p className="text-sm text-muted-foreground">Section {alert.section}</p>
                    </div>
                    <Badge
                      variant={
                        alert.status === "critical"
                          ? "destructive"
                          : alert.status === "warning"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {alert.absences} absences
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Weekly Trends
            </CardTitle>
            <CardDescription>Attendance patterns this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-accent/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Monday</span>
                  <span className="text-sm font-bold">95.2%</span>
                </div>
                <Progress value={95.2} className="h-2" />
              </div>
              <div className="p-4 rounded-lg bg-gradient-accent/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Tuesday</span>
                  <span className="text-sm font-bold">93.8%</span>
                </div>
                <Progress value={93.8} className="h-2" />
              </div>
              <div className="p-4 rounded-lg bg-gradient-accent/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Wednesday</span>
                  <span className="text-sm font-bold">94.5%</span>
                </div>
                <Progress value={94.5} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoordinatorDashboard;
