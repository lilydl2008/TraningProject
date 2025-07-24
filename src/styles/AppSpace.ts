// Base spacing unit (8dp)
export const AppSpaceUnit = 8;

// Common spacing values
export const AppSpace = {
  // Tiny spaces
  xs: AppSpaceUnit / 2,    // 4dp
  sm: AppSpaceUnit,        // 8dp
  md: AppSpaceUnit * 2,    // 16dp
  lg: AppSpaceUnit * 3,    // 24dp
  xl: AppSpaceUnit * 4,    // 32dp
  xxl: AppSpaceUnit * 5,   // 40dp

  // Specific use cases
  screenPadding: AppSpaceUnit * 2,    // 16dp - Standard screen padding
  cardPadding: AppSpaceUnit * 1.5,    // 12dp - Card padding
  itemSpacing: AppSpaceUnit * 1.5,    // 12dp - Space between items
  sectionSpacing: AppSpaceUnit * 3,   // 24dp - Space between sections
  buttonPadding: AppSpaceUnit * 1.5,  // 12dp - Button padding
} as const;

// Type for spacing values
export type AppSpaceType = keyof typeof AppSpace;