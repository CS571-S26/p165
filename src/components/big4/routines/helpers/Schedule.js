export function isTaskScheduled(task, dateKey) {
  const startDate = new Date(task.startDate + "T00:00:00");
  const currentDate = new Date(dateKey + "T00:00:00");

  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const diffDays = Math.floor((currentDate - startDate) / MS_PER_DAY);

  return diffDays >= 0 && diffDays % task.repeatInterval === 0;
}