export const StringUtils = {

  /**
   * Get weather description based on weather code
   * @param code - Weather code (e.g., "100", "101", etc.)
   * @returns Weather description in Chinese
   */
  getWeatherByCode(code: string): string {
    switch (code) {
      case "CLEAR_DAY":
      case "CLEAR_NIGHT":
        return "Sunny";

      case "PARTLY_CLOUDY_DAY":
      case "PARTLY_CLOUDY_NIGHT":
        return "Partly cloudy";

      case "CLOUDY":
        return "Cloudy";

      case "LIGHT_RAIN":
      case "MODERATE_RAIN":
      case "HEAVY_RAIN":
      case "STORM_RAIN":
        return "Rain";

      case "LIGHT_SNOW":
      case "MODERATE_SNOW":
      case "HEAVY_SNOW":
      case "STORM_SNOW":
        return "Snow";

      default:
        return "unknown";
    }
  },

}