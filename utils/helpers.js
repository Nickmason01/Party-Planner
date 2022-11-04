// helpers for date and time formatting. 
module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_time: (date) => {
    return date.toLocaleTimeString();
  }
};
