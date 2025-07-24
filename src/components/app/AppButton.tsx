import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle, TextStyle, ActivityIndicator, View} from 'react-native';
import {AppText, TEXT_TYPES} from './AppText.tsx';
import {AppColor} from '../../styles/AppColor.ts';
import {AppSpace} from '../../styles/AppSpace.ts';
import AppIcon from './AppIcon.tsx';
import {AppIconName} from '../../values/AssetIcons.tsx';

interface AppButtonProps {
  title?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  type?: 'primary' | 'secondary' | 'ghost' | 'iconTextUpDown' | 'icon';
  icon?: AppIconName | React.ReactNode;
  iconPosition?: 'left' | 'right';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const AppButtonComponent: React.FC<AppButtonProps> = ({
                                                        title,
                                                        children,
                                                        onPress,
                                                        disabled = false,
                                                        loading = false,
                                                        style,
                                                        textStyle,
                                                        type = 'primary',
                                                        icon,
                                                        iconPosition = 'right',
                                                        leftIcon,
                                                        rightIcon,
                                                      }) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'primary':
        return [
          styles.button,
          styles.primaryButton,
          disabled && styles.disabledButton,
          style,
        ];
      case 'secondary':
        return [
          styles.button,
          styles.secondaryButton,
          disabled && styles.disabledButton,
          style,
        ];
      case 'ghost':
        return [
          styles.button,
          styles.ghostButton,
          disabled && styles.disabledGhostButton,
          style,
        ];
      case 'iconTextUpDown':
        return [
          styles.button,
          styles.primaryButton,
          styles.iconTextUpDownButton,
          disabled && styles.disabledButton,
          style,
        ];
      case 'icon':
        return [
          styles.button,
          styles.iconButton,
          disabled && styles.disabledButton,
          style,
        ];
      default:
        return [styles.button, style];
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'primary':
        return [styles.primaryText, disabled && styles.disabledText, textStyle];
      case 'secondary':
        return [styles.secondaryText, disabled && styles.disabledText, textStyle];
      case 'ghost':
        return [styles.ghostText, disabled && styles.disabledGhostText, textStyle];
      default:
        return [styles.primaryText, textStyle];
    }
  };

  const getIconColor = () => {
    if (disabled) return AppColor.textDisabled;
    if (type === 'ghost') return AppColor.primary;
    return AppColor.white;
  };

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === 'string') {
      return <AppIcon name={icon as AppIconName} size={20} color={getIconColor()}/>;
    }
    return icon;
  };

  // 兼容 icon 旧用法
  const renderLeftIcon = () => {
    if (type === 'iconTextUpDown' && icon) return renderIcon();
    if (leftIcon) return leftIcon;
    if (icon && iconPosition === 'left') return renderIcon();
    return null;
  };
  const renderRightIcon = () => {
    if (rightIcon) return rightIcon;
    if (icon && iconPosition === 'right') return renderIcon();
    return null;
  };

  let content;
  if (loading) {
    content = (
        <ActivityIndicator
            size="small"
            color={type === 'ghost' ? AppColor.primary : AppColor.white}
        />
    );
  } else if (type === 'iconTextUpDown') {
    content = (
        <View style={styles.column}>
          <View style={[styles.iconBox, styles.iconTextUpDownIconBox]}>{renderLeftIcon()}</View>
          <View style={[styles.textBox, styles.iconTextUpDownTextBox]}>
            <AppText type={TEXT_TYPES.BODY} style={getTextStyle()}>
              {children || title}
            </AppText>
          </View>
        </View>
    );
  } else if (type === 'icon') {
    content = (
        <View style={styles.iconBox}>
          {renderIcon()}
        </View>
    );
  } else {
    content = (
        <View style={styles.row}>
          <View style={styles.iconBox}>{renderLeftIcon()}</View>
          <View style={styles.textBox}>
            <AppText type={TEXT_TYPES.BODY} style={getTextStyle()}>
              {children || title}
            </AppText>
          </View>
          <View style={styles.iconBox}>{renderRightIcon()}</View>
        </View>
    );
  }

  return (
      <TouchableOpacity
          style={getButtonStyle()}
          onPress={onPress}
          disabled={disabled || loading}
          activeOpacity={0.7}
      >
        {content}
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: AppSpace.md,
  },
  primaryButton: {
    backgroundColor: AppColor.primary,
  },
  secondaryButton: {
    backgroundColor: AppColor.white,
    borderWidth: 1,
    borderColor: AppColor.primary,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  disabledButton: {
    backgroundColor: AppColor.disabled,
    borderColor: AppColor.disabled,
  },
  disabledGhostButton: {
    backgroundColor: 'transparent',
  },
  primaryText: {
    color: AppColor.white,
    fontWeight: '600',
  },
  secondaryText: {
    color: AppColor.primary,
    fontWeight: '600',
  },
  ghostText: {
    color: AppColor.primary,
    fontWeight: '600',
  },
  disabledText: {
    color: AppColor.textDisabled,
  },
  disabledGhostText: {
    color: AppColor.textDisabled,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  iconBox: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconTextUpDownTextBox: {
    flex: undefined,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  iconTextUpDownButton: {
    height: 64,
    paddingVertical: AppSpace.sm,
  },
  iconTextUpDownIconBox: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -6,
  },
  iconButton: {
    backgroundColor: AppColor.primary,
    width: 44,
    paddingHorizontal: 0,
  },
});

// 创建静态组件
const AppButton = Object.assign(AppButtonComponent, {
  Primary: (props: Omit<AppButtonProps, 'type'>) => (
      <AppButtonComponent type="primary" {...props} />
  ),
  Secondary: (props: Omit<AppButtonProps, 'type'>) => (
      <AppButtonComponent type="secondary" {...props} />
  ),
  Ghost: (props: Omit<AppButtonProps, 'type'>) => (
      <AppButtonComponent type="ghost" {...props} />
  ),
  IconText: (props: Omit<AppButtonProps, 'type'> & { icon: AppIconName | React.ReactNode; iconPosition?: 'left' | 'right' }) => (
      <AppButtonComponent type="primary" {...props} />
  ),
  Icon: (props: Omit<AppButtonProps, 'type'> & { icon: AppIconName | React.ReactNode }) => (
      <AppButtonComponent type="icon" {...props} />
  ),
  IconTextUpDown: (props: Omit<AppButtonProps, 'type'> & { icon: AppIconName | React.ReactNode }) => (
      <AppButtonComponent type="iconTextUpDown" {...props} />
  ),
});

export default AppButton;