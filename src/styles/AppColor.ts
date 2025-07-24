import {ThemeColors} from './AppTheme';

// 主题相关颜色
export {ThemeColors};

// 基础颜色
export const AppColor = {
  // 主题色
  primary: ThemeColors.primary[500],
  primaryLight: ThemeColors.primary[400],
  primaryDark: ThemeColors.primary[600],
  primaryHover: ThemeColors.primary[100],
  primaryActive: ThemeColors.primary[200],

  // 基础色
  white: ThemeColors.basic[100],
  black: ThemeColors.basic[1100],
  gray: ThemeColors.basic[600],
  lightGray: ThemeColors.basic[300],
  darkGray: ThemeColors.basic[700],

  // 功能色
  success: ThemeColors.success[500],
  successLight: ThemeColors.success[100],
  successDark: ThemeColors.success[700],

  warning: ThemeColors.warning[500],
  warningLight: ThemeColors.warning[100],
  warningDark: ThemeColors.warning[700],

  error: ThemeColors.error[500],
  errorLight: ThemeColors.error[100],
  errorDark: ThemeColors.error[700],

  // 文本颜色
  textPrimary: ThemeColors.basic[700],
  textSecondary: ThemeColors.basic[600],
  textDisabled: ThemeColors.basic[500],
  textInverse: ThemeColors.basic[100],

  // 背景色
  background: ThemeColors.basic[200],
  backgroundLight: ThemeColors.basic[100],
  backgroundDark: ThemeColors.basic[300],
  backgroundInverse: ThemeColors.basic[800],

  // 边框颜色
  border: ThemeColors.basic[400],
  borderLight: ThemeColors.basic[300],
  borderDark: ThemeColors.basic[500],
  borderInverse: ThemeColors.basic[600],

  // 状态颜色
  hover: ThemeColors.primary[100],
  active: ThemeColors.primary[200],
  disabled: ThemeColors.basic[300],
  selected: ThemeColors.primary[100],
  focused: ThemeColors.primary[200],

  // 阴影颜色
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.2)',
  shadowLight: 'rgba(0, 0, 0, 0.05)',
};