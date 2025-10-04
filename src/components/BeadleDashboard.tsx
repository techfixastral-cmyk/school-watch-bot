import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Upload, CheckCircle2, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BeadleDashboard = () => {
  const { toast } = useToast();
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", studentId: "2024-001", present: true },
    { id: 2, name: "Jane Smith", studentId: "2024-002", present: true },
    { id: 3, name: "Mike Johnson", studentId: "2024-003", present: false },
    { id: 4, name: "Sarah Williams", studentId: "2024-004", present: true },
    { id: 5, name: "Tom Brown", studentId: "2024-005", present: true },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents(students.map(s => s.id === id ? { ...s, present: !s.present } : s));
  };

  const handleSubmit = () => {
    toast({
      title: "Attendance Submitted",
      description: "Today's attendance has been recorded successfully.",
    });
  };

  const presentCount = students.filter(s => s.present).length;
  const totalCount = students.length;
  const attendanceRate = ((presentCount / totalCount) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Section 3-A Attendance</CardTitle>
              <CardDescription>Mark students present or absent</CardDescription>
            </div>
            <Badge variant="outline" className="text-lg">
              {presentCount}/{totalCount} Present ({attendanceRate}%)
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-soft transition-all"
              >
                <div className="flex items-center gap-4">
                  <Checkbox
                    checked={student.present}
                    onCheckedChange={() => toggleAttendance(student.id)}
                    className="h-5 w-5"
                  />
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.studentId}</p>
                  </div>
                </div>
                <Badge variant={student.present ? "default" : "destructive"} className="gap-1">
                  {student.present ? (
                    <>
                      <CheckCircle2 className="h-3 w-3" />
                      Present
                    </>
                  ) : (
                    <>
                      <XCircle className="h-3 w-3" />
                      Absent
                    </>
                  )}
                </Badge>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-primary" onClick={handleSubmit}>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Submit Attendance
              </Button>
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload Proof
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BeadleDashboard;
