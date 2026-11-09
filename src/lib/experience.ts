export interface LogEntry {
  key: string;
  hash: string;
  ref?: string;
  head?: boolean;
}

export const CAREER_LOG: LogEntry[] = [
  { key: "fontys", hash: "a91f3c2", ref: "HEAD -> main", head: true },
  { key: "graduated", hash: "7d04be1", ref: "tag: diploma" },
  { key: "cheapcargoJob", hash: "52ce8a0" },
  { key: "cheapcargoIntern", hash: "1b7e94d" },
  { key: "rocStart", hash: "0e3a6f8", ref: "initial commit" },
];
