const getMonthName = (month: number): string => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month - 1];
};

export const DateUtils = {
  /**
   * Format date to English format
   * @param {Date} [date] - Date to format, defaults to current date if not provided
   * @returns {string} Formatted date string (e.g., "March 21, 2024")
   */
  formatDateToEnglish(date?: Date): string {
    const targetDate = date || new Date();
    const day = targetDate.getDate();
    const month = getMonthName(targetDate.getMonth() + 1);
    const year = targetDate.getFullYear();

    return `${month} ${day}, ${year}`;
  },

  /**
   * Get current hour and minutes
   * @returns {string} Current time in format: HH:mm
   */
  getCurrentHourMinute(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  },

  /**
   * Convert ISO time string to HH:mm format
   * @param {string} isoString - ISO 8601 format time string (e.g., "2025-06-03T10:00+08:00")
   * @returns {string} Time in HH:mm format
   */
  convertISOToHourMinute(isoString: string): string {
    const date = new Date(isoString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  },
  
    /**
   * Convert ISO time string to weekday name
   * @param {string} isoString - ISO 8601 format time string (e.g., "2025-06-03T00:00+08:00")
   * @returns {string} Weekday name (e.g., "Monday", "Tuesday", etc.)
   */
  convertISOToWeekday(isoString: string): string {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(isoString);
    return weekdays[date.getDay()];
  },
}