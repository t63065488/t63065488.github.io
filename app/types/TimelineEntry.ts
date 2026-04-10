export type TimelineEntry = Readonly<{
  date: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
}>;
