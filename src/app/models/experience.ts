export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: JSX.Element;
  employmentType?: "Full-Time" | "Part-Time" | undefined;
  locationType?: "Remote" | "Onsite" | undefined;
}
