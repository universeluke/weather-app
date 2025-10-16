export default function formatLocalTime(isoTime: string) {
  const date = new Date(isoTime);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
