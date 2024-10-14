export const formatDateTime = ( dateTime: string ) : { date: string; time: string } => {
  const [date, time] = dateTime.split("T");
  return { date, time };
};
