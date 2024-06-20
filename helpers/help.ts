const helpers = {
  extractDateFromTimestamp: (timestamp: string): string => {
    const date = new Date(timestamp);

    // Extract date components
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() returns 0-based index (0 = January)
    const day = date.getDate();

    // Format the date as needed
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    return formattedDate;
  },
};


export default helpers