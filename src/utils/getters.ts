
export function getTruncateString(str: string): string {
  return (str.length > 20) ? `${str.substring(0, 17).trim()}...` : str;
}