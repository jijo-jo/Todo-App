export function calculateDaysDifference(givenDate) {
    const currentDate = new Date();
    const parsedDate = new Date(givenDate);
    const differenceInTime = currentDate.getTime()-parsedDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  
    return differenceInDays;
  }