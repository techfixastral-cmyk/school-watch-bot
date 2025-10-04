import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdviserDashboard = () => {
  const { toast } = useToast();

  const sections = [
    { name: "Section 3-A", students: 25, reported: true, attendance: "96%" },
    { name: "Section 3-B", students: 28, reported: true, attendance: "92%" },
    { name: "Section 3-C", students: 26, reported: false, attendance: "N/A" },
  ];

  const handleUploadMasterlist = () => {
    toast({
      title: "Upload Masterlist",
      description: "Click to select a CSV file with student information.",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Student Masterlist</CardTitle>
              <CardDescription>Upload and manage student records</CardDescription>
            </div>
            <Button className="bg-gradient-primary" onClick={handleUploadMasterlist}>
              <Upload className="mr-2 h-4 w-4" />
              Upload Masterlist
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-8 border-2 border-dashed rounded-lg text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop your CSV file here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Supports CSV files up to 5MB
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle>Section Reports</CardTitle>
          <CardDescription>Today's attendance summary by section</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-soft transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-lg ${
                    section.reported ? "bg-gradient-accent" : "bg-destructive"
                  } flex items-center justify-center`}>
                    {section.reported ? (
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{section.name}</p>
                    <p className="text-sm text-muted-foreground">{section.students} students</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">{section.attendance}</p>
                    <p className="text-xs text-muted-foreground">Attendance</p>
                  </div>
                  <Badge variant={section.reported ? "default" : "destructive"}>
                    {section.reported ? "Reported" : "Pending"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdviserDashboard;
