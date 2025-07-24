import { StatusBar, StatusBarStyle } from 'react-native';

export class StatusBarService {
  private static currentStyle: StatusBarStyle = 'default';

  /**
   * Set StatusBar style
   * @param style - StatusBar style
   */
  static setBarStyle(style: StatusBarStyle) {
    this.currentStyle = style;
    StatusBar.setBarStyle(style);
  }

  /**
   * Get current StatusBar style
   */
  static getCurrentStyle(): StatusBarStyle {
    return this.currentStyle;
  }

  /**
   * Set StatusBar to dark content (for light backgrounds)
   */
  static setDarkContent() {
    this.setBarStyle('dark-content');
  }

  /**
   * Set StatusBar to light content (for dark backgrounds)
   */
  static setLightContent() {
    this.setBarStyle('light-content');
  }

  /**
   * Set StatusBar to default style
   */
  static setDefault() {
    this.setBarStyle('default');
  }

  /**
   * Restore StatusBar to its previous style
   */
  static restore() {
    StatusBar.setBarStyle(this.currentStyle);
  }
} 