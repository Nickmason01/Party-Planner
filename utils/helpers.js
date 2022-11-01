// // flatpickr is a node module for a built in calendar feature with date and time.

module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_time: (date) => {
    return date.toLocaleTimeString();
  }
};
