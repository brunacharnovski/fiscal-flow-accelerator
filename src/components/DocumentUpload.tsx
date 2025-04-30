
import React, { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { File, Upload, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface DocumentUploadProps {
  className?: string;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ className = "" }) => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<{ name: string; progress: number; status: string }[]>([
    { name: "invoice-april-2025.pdf", progress: 100, status: "complete" },
    { name: "employee-expenses.xlsx", progress: 65, status: "uploading" }
  ]);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  
  const handleDragLeave = () => {
    setDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    // In a real app, we would process the dropped files here
    console.log("Files dropped:", e.dataTransfer.files);
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // In a real app, we would process the selected files here
      console.log("Files selected:", e.target.files);
    }
  };
  
  return (
    <DashboardCard 
      title="Document Upload" 
      icon={<File size={18} />}
      actionText="Upload History"
      onActionClick={() => console.log("View upload history")}
      className={className}
    >
      <div className="space-y-4">
        <div 
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            dragging ? "border-accounting-primary bg-accounting-primary/5" : "border-gray-200"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <h3 className="text-lg font-medium mb-1">Drop files here</h3>
            <p className="text-sm text-gray-500 mb-4">or click to browse</p>
            <label className="cursor-pointer">
              <Button variant="outline">Select Files</Button>
              <input 
                type="file" 
                className="hidden" 
                multiple 
                onChange={handleFileSelect} 
              />
            </label>
            <p className="text-xs text-gray-400 mt-4">
              Accepted formats: PDF, XLSX, CSV, JPG, PNG (max 10MB)
            </p>
          </div>
        </div>
        
        {files.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-2">Recent Uploads</h3>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                >
                  <div className="flex items-center">
                    <File className="h-4 w-4 text-accounting-primary mr-2" />
                    <span className="text-sm">{file.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {file.status === "uploading" ? (
                      <div className="w-24">
                        <Progress value={file.progress} className="h-2" />
                      </div>
                    ) : file.status === "complete" ? (
                      <Check className="h-4 w-4 text-accounting-success" />
                    ) : (
                      <X className="h-4 w-4 text-accounting-danger" />
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6 text-gray-500 hover:text-accounting-danger"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardCard>
  );
};

export default DocumentUpload;
