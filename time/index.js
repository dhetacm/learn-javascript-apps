console.log("Date and Time")
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const time = {
  createDateObject: (customDate = null) => {
    if (customDate) {
      return new Date(customDate);
    } else {
      const nowDate = new Date();
      return new Date();
    }
  },
  dateNumber: dateObject => {
    return dateObject.getDate();
  },
  dayString: dateObject => {
    const index = dateObject.getDay() - 1;
    return days[index];
  },
  monthNumber: dateObject => {
    return dateObject.getMonth() + 1;
  },
  monthString: dateObject => {
    const index = dateObject.getMonth();
    return months[index];
  },
  yearNumber: dateObject => {
    return dateObject.getFullYear();
  },
  timeNumber: dateObject => {
    return dateObject.toTimeString();
  },
  displayFullDate: dateObject => {
    const pickedDay = time.dayString(dateObject);
    const pickedDate = time.dateNumber(dateObject);
    const pickedMonth = time.monthString(dateObject);
    const pickedYear = time.yearNumber(dateObject);
    const pickedFull = `${pickedDay} ${pickedDate} ${pickedMonth} ${pickedYear}`;
    return pickedFull;
  }
};

const TODAY = time.createDateObject();
const DAY_CUSTOM = time.createDateObject("1 November 2018");

const todayFull = time.displayFullDate(TODAY);
const todayTime = time.timeNumber(TODAY);
const customFull = time.displayFullDate(DAY_CUSTOM);

console.log(`Today is ${TODAY}`);
console.log(todayFull);
console.log(customFull);
console.log(todayTime);
