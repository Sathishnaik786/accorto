export interface MetricItem {
  value: number | string;
  suffix?: string;
  label: string;
}

export const COMPANY_METRICS = [
  { value: 60, suffix: "+", label: "ERP Programs" },
  { value: 312, suffix: "%", label: "Average ROI" },
  { value: 47, suffix: "%", label: "Faster Close" },
  { value: 18, suffix: "", label: "Countries" },
] as const;

export const HERO_TRUST_METRICS = {
  activeUsers: { value: 10, suffix: "k+" },
  growingBusinesses: { value: 100, suffix: "+" },
} as const;

export const ACADEMY_METRICS: MetricItem[] = [
  { value: "500+", label: "Learners Trained" },
  { value: "20+", label: "Production Projects" },
  { value: "10+", label: "Target Certifications" },
  { value: "100%", label: "Hands-on Practical" },
];
