const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const longToDate = (timeInLong) => {
  let date = new Date(timeInLong);
  return `${date.getDate()}th ${monthNames[date.getMonth()]} ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
};
