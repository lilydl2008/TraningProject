import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  
  headerBody: {
    marginLeft: 8,
  },

  currentWeatherContainer: {
    flexDirection: 'column',
    height: 192,
    backgroundColor: '#4F7FFA',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
  },


  currentWeatherTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },

  currentWeatherCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  currentWeatherBottom: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

})