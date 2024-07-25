import { Link } from "@/contexts/links";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type CompanyTypes = "github" | "frontend mentor" | "twitter" | "linkedin" | "youtube" | "facebook" | "twitch" | "dev.to" | "codewars" | "codepen" | "freecodecamp" | "gitlab" | "hashnode" | "stack overflow";
interface CompanyProps {
  name: CompanyTypes
  pattern: RegExp
}

export type LinkProps = Omit<Link, 'title'> & { title: CompanyTypes };

export const companies: CompanyProps[] = [
  { name: 'github', pattern: /github\.com/ },
  { name: 'frontend mentor', pattern: /frontendmentor\.io/ },
  { name: 'twitter', pattern: /twitter\.com/ },
  { name: 'linkedin', pattern: /linkedin\.com/ },
  { name: 'youtube', pattern: /youtube\.com/ },
  { name: 'facebook', pattern: /facebook\.com/ },
  { name: 'twitch', pattern: /twitch\.tv/ },
  { name: 'dev.to', pattern: /dev\.to/ },
  { name: 'codewars', pattern: /codewars\.com/ },
  { name: 'codepen', pattern: /codepen\.io/ },
  { name: 'freecodecamp', pattern: /freecodecamp\.org/ },
  { name: 'gitlab', pattern: /gitlab\.com/ },
  { name: 'hashnode', pattern: /hashnode\.com/ },
  { name: 'stack overflow', pattern: /stackoverflow\.com/ }
];

export function parseProfileLink(url: string) {

  for (const company of companies) {
    if (company.pattern.test(url)) {
      return company.name;
    }
  }

  return 'unknown';
}