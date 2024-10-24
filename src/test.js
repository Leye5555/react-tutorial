export const checkLateness = (time) => {
  // named export
  const date = new Date(time);
  const classStartTime = "2024-10-24T17:00:00Z";
  const classStartTimeInMilliSeconds = new Date(classStartTime).getTime();

  const timeInMilliSeconds = date.getTime();

  if (timeInMilliSeconds > classStartTimeInMilliSeconds) {
    return "You are late";
  } else {
    return "Welcome! Thanks for being early!";
  }
};

export const checkTime = (time) => {
  // named export
  const date = new Date(time);
  const classStartTime = "2024-10-24T17:00:00Z";
  const classStartTimeInMilliSeconds = new Date(classStartTime).getTime();

  const timeInMilliSeconds = date.getTime();

  if (timeInMilliSeconds > classStartTimeInMilliSeconds) {
    return "You are late";
  } else {
    return "Welcome! Thanks for being early!";
  }
};

// const checkLateness = (time) => {
//   // named export
//   const date = new Date(time);
//   const classStartTime = "2024-10-24T17:00:00Z";
//   const classStartTimeInMilliSeconds = new Date(classStartTime).getTime();

//   const timeInMilliSeconds = date.getTime();

//   if (timeInMilliSeconds > classStartTimeInMilliSeconds) {
//     return "You are late";
//   } else {
//     return "Welcome! Thanks for being early!";
//   }
// };

// export default checkLateness;

// export default {
//   checkLateness,
//   checkTime,
// };

// export { checkLateness, checkTime };
