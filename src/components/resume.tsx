"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  FileText,
  Award,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const ResumePage: React.FC = () => {
  const documents: { [key: string]: string } = {
    CV: "/resume-two.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "BSC Degree Certificate":
      "/educational-docs/bsc.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 12 Certificate":
      "/educational-docs/grade12Matric.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 10 Certificate":
      "/educational-docs/grade10Matric.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 8 Certificate":
      "/educational-docs/grade8.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
  };

  const documentIcons: { [key: string]: React.ReactNode } = {
    CV: <FileText className="h-4 w-4" />,
    "BSC Degree Certificate": <GraduationCap className="h-4 w-4" />,
    "Grade 12 Certificate": <Award className="h-4 w-4" />,
    "Grade 10 Certificate": <Award className="h-4 w-4" />,
    "Grade 8 Certificate": <BookOpen className="h-4 w-4" />,
  };

  const documentDescriptions: { [key: string]: string } = {
    CV: "Professional resume detailing work experience, skills, and qualifications",
    "BSC Degree Certificate":
      "Bachelor's degree in Information Technology from Addis Ababa University",
    "Grade 12 Certificate": "Preparatory education completion certificate",
    "Grade 10 Certificate": "Secondary education matriculation certificate",
    "Grade 8 Certificate": "Primary education completion certificate",
  };

  const [selectedDocument, setSelectedDocument] =
    useState<keyof typeof documents>("CV");

  const handleDocumentChange = (value: string) => {
    setSelectedDocument(value as keyof typeof documents);
  };

  return (
    <div className="bg-background py-6 md:py-8">
      <div className="w-full px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-8"
        >
          <Badge variant="outline" className="mb-3">
            Documents & Certificates
          </Badge>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Professional Documents
          </h1>
          <p className="text-muted-foreground mt-1 max-w-2xl mx-auto text-sm md:text-base">
            View and download my professional documents, including resume,
            educational certificates, and qualifications.
          </p>
        </motion.div>

        {/* Document Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <Card className="bg-card border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base md:text-lg">
                Select Document to View
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start lg:items-center">
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">
                    Currently viewing:
                  </p>
                  <div className="flex items-center gap-2">
                    {documentIcons[selectedDocument]}
                    <span className="font-medium text-sm md:text-base truncate">
                      {selectedDocument}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1 md:line-clamp-2">
                    {documentDescriptions[selectedDocument]}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto shrink-0">
                  <Select
                    value={selectedDocument as any}
                    onValueChange={handleDocumentChange}
                  >
                    <SelectTrigger className="w-full sm:w-[180px] md:w-[220px] text-sm">
                      <SelectValue placeholder="Select document" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(documents).map((document) => (
                        <SelectItem
                          key={document}
                          value={document}
                          className="text-sm"
                        >
                          <div className="flex items-center gap-2">
                            {documentIcons[document]}
                            {document}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button asChild className="w-full sm:w-auto shrink-0 text-sm">
                    <a
                      href={documents[selectedDocument]}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Download className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      <span className="hidden sm:inline">Download</span>
                      <span className="sm:hidden">DL</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Document Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <Card className="bg-card border-border shadow-sm">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-3 border-b">
                <div className="flex items-center gap-2">
                  {documentIcons[selectedDocument]}
                  <h3 className="font-medium text-sm md:text-base">
                    {selectedDocument}
                  </h3>
                </div>
                <Badge variant="outline" className="text-xs">
                  Preview
                </Badge>
              </div>

              <div className="w-full h-[60vh] min-h-[400px] max-h-[80vh] overflow-auto bg-gray-50 dark:bg-gray-900">
                <iframe
                  src={documents[selectedDocument]}
                  title={selectedDocument as any}
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Access Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Object.keys(documents).map((doc) => (
              <Card
                key={doc}
                className={`cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] ${
                  selectedDocument === doc
                    ? "ring-2 ring-primary border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() =>
                  setSelectedDocument(doc as keyof typeof documents)
                }
              >
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="p-1.5 rounded-full bg-primary/10 mb-2">
                    {documentIcons[doc]}
                  </div>
                  <h3 className="font-medium text-xs mb-1 line-clamp-1">
                    {doc}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {documentDescriptions[doc]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 md:mt-8 text-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            Need a specific document? Feel free to{" "}
            <a href="#contact" className="text-primary hover:underline">
              contact me
            </a>{" "}
            for additional information.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
