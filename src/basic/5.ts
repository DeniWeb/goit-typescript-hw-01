enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

//! ====================================================================

// enum DayOfWeek {
//   Monday = 'Monday',
//   Tuesday = 'Tuesday',
//   Wednesday = 'Wednesday',
//   Thursday = 'Thursday',
//   Friday = 'Friday',
//   Saturday = 'Saturday',
//   Sunday = 'Sunday',
// }

// const isWeekend = (day: DayOfWeek): string => {
//   return `If it's ${day}, weekend: ${
//     day === DayOfWeek.Saturday || day === DayOfWeek.Sunday
//   }`;
// };

// console.log(isWeekend(DayOfWeek.Sunday));
