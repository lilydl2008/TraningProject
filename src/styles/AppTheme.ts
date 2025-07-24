import { light as lightTheme } from "@eva-design/eva";

// 定义颜色类型
type ColorScale = {
  [key: string]: string;
};

type ThemeColors = {
  primary: ColorScale;
  basic: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale;
};

// 定义主题颜色 - Material Design 颜色系统
const ThemeColors: ThemeColors = {
  primary: {
    100: "#E3F2FD", // Blue 50
    200: "#BBDEFB", // Blue 100
    300: "#90CAF9", // Blue 200
    400: "#64B5F6", // Blue 300
    500: "#42A5F5", // Blue 400
    600: "#2196F3", // Blue 500
    700: "#1E88E5", // Blue 600
    800: "#1976D2", // Blue 700
    900: "#1565C0", // Blue 800
  },
  basic: {
    100: "#FFFFFF", // White
    200: "#FAFAFA", // Grey 50
    300: "#F5F5F5", // Grey 100
    400: "#EEEEEE", // Grey 200
    500: "#E0E0E0", // Grey 300
    600: "#BDBDBD", // Grey 400
    700: "#757575", // Grey 600
    800: "#616161", // Grey 700
    900: "#424242", // Grey 800
    1000: "#212121", // Grey 900
    1100: "#000000", // Black
  },
  success: {
    100: "#E8F5E9", // Green 50
    500: "#4CAF50", // Green 500
    700: "#388E3C", // Green 700
  },
  warning: {
    100: "#FFF3E0", // Orange 50
    500: "#FF9800", // Orange 500
    700: "#F57C00", // Orange 700
  },
  error: {
    100: "#FFEBEE", // Red 50
    500: "#F44336", // Red 500
    700: "#D32F2F", // Red 700
  },
};

// 将颜色映射到 UI Kitten 主题格式
const mapColorsToTheme = (colors: ThemeColors) => {
  const themeColors: Record<string, string> = {};

  // 映射 primary 颜色
  Object.entries(colors.primary).forEach(([key, value]) => {
    themeColors[`color-primary-${key}`] = value;
  });

  // 映射 basic 颜色
  Object.entries(colors.basic).forEach(([key, value]) => {
    themeColors[`color-basic-${key}`] = value;
  });

  // 映射其他颜色系列
  Object.entries(colors).forEach(([series, values]) => {
    if (series !== 'primary' && series !== 'basic') {
      Object.entries(values).forEach(([key, value]) => {
        themeColors[`color-${series}-${key}`] = value;
      });
    }
  });

  return themeColors;
};

// 导出主题
export const AppTheme = {
  ...lightTheme,
  ...mapColorsToTheme(ThemeColors),

  // 文本颜色
  "text-basic-color": ThemeColors.basic[700],
  "text-disabled-color": ThemeColors.basic[600],

  // 背景颜色
  "background-basic-color-1": ThemeColors.basic[100],
  "background-basic-color-2": ThemeColors.basic[200],
  "background-basic-color-3": ThemeColors.basic[300],
  "background-basic-color-4": ThemeColors.basic[400],
};

// 导出颜色对象供直接使用
export { ThemeColors };