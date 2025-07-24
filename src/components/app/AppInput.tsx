import React, {forwardRef, useState} from 'react';
import {ViewStyle, TextStyle, TouchableOpacity, View} from 'react-native';
import {AppText, TEXT_TYPES} from './AppText';
import {Icon, Input, InputProps} from "@ui-kitten/components";

export const INPUT_TYPES = {
  DEFAULT: 'default',
  OUTLINED: 'outlined',
  FILLED: 'filled',
  ROUNDED: 'rounded',
} as const;

export type InputType = typeof INPUT_TYPES[keyof typeof INPUT_TYPES];

export const INPUT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type InputSize = typeof INPUT_SIZES[keyof typeof INPUT_SIZES];

interface AppTextInputProps extends Omit<InputProps, 'style'> {
  /** 输入框类型：default | outlined | filled | rounded */
  type?: InputType;
  /** 输入框尺寸：small | medium | large */
  size?: InputSize;
  /** 输入框标签文本 */
  label?: string;
  /** 错误信息文本，显示时会覆盖 helperText */
  error?: string;
  /** 帮助提示文本 */
  helperText?: string;
  /** 容器样式 */
  containerStyle?: ViewStyle;
  /** 输入框文本样式 */
  inputStyle?: TextStyle;
  /** 标签文本样式 */
  labelStyle?: TextStyle;
  /** 错误文本样式 */
  errorStyle?: TextStyle;
  /** 帮助文本样式 */
  helperStyle?: TextStyle;
  /** 是否禁用输入框 */
  disabled?: boolean;
  /** 是否为必填字段，true 时会在 label 后显示红色星号 */
  required?: boolean;
}

const AppTextInputComponent = forwardRef<any, AppTextInputProps>(
    (
        {
          type = INPUT_TYPES.DEFAULT,
          size = INPUT_SIZES.MEDIUM,
          label,
          error,
          helperText,
          containerStyle,
          inputStyle,
          labelStyle,
          errorStyle,
          helperStyle,
          disabled = false,
          required = false,
          placeholder,
          value,
          onChangeText,
          onFocus,
          onBlur,
          secureTextEntry,
          accessoryLeft,
          accessoryRight,
          ...props
        },
        ref
    ) => {
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);

      const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
      };

      // 自定义caption渲染，增加marginTop
      const renderCaption = () => {
        if (error) {
          return (
              <View style={{marginTop: 6}}>
                <AppText
                    type={TEXT_TYPES.CAPTION}
                    style={[{color: '#FF3366'}, errorStyle]}
                >
                  {error}
                </AppText>
              </View>
          );
        }
        if (helperText) {
          return (
              <View style={{marginTop: 6}}>
                <AppText
                    type={TEXT_TYPES.CAPTION}
                    style={[{color: '#999'}, helperStyle]}
                >
                  {helperText}
                </AppText>
              </View>
          );
        }
        return null;
      };

      const getInputProps = (): InputProps => {
        const inputProps: InputProps = {
          placeholder,
          value,
          onChangeText,
          onFocus,
          onBlur,
          secureTextEntry: secureTextEntry && !isPasswordVisible,
          disabled,
          ...props,
        };

        // Add label with required indicator
        if (label) {
          if (required) {
            inputProps.label = (props: any) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AppText style={props.style}>{label}</AppText>
                <AppText style={[props.style, { color: '#FF3366', marginLeft: 2 }]}>*</AppText>
              </View>
            );
          } else {
            inputProps.label = label;
          }
        }

        // Add caption (helper text or error)
        if (error || helperText) {
          inputProps.caption = renderCaption();
          inputProps.status = error ? 'danger' : undefined;
        }

        // Add accessories
        if (accessoryLeft) {
          inputProps.accessoryLeft = accessoryLeft;
        }

        if (secureTextEntry) {
          inputProps.accessoryRight = (props: any) => (
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Icon
                    {...props}
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
          );
        } else if (accessoryRight) {
          inputProps.accessoryRight = accessoryRight;
        }

        return inputProps;
      };

      const getInputStyle = (): ViewStyle => {
        const baseStyle: ViewStyle = {};

        // Size styles
        switch (size) {
          case INPUT_SIZES.SMALL:
            baseStyle.minHeight = 36;
            break;
          case INPUT_SIZES.MEDIUM:
            baseStyle.minHeight = 44;
            break;
          case INPUT_SIZES.LARGE:
            baseStyle.minHeight = 52;
            break;
        }

        // Type styles
        switch (type) {
          case INPUT_TYPES.ROUNDED:
            baseStyle.borderRadius = 24;
            break;
          case INPUT_TYPES.FILLED:
            baseStyle.backgroundColor = 'rgba(0, 0, 0, 0.05)';
            break;
        }

        return containerStyle ? {...baseStyle, ...containerStyle} : baseStyle;
      };

      return (
          <Input
              ref={ref}
              style={getInputStyle()}
              textStyle={inputStyle}
              {...getInputProps()}
          />
      );
    }
);

// Create typed components for each input type
const DefaultTextInput = forwardRef<any, Omit<AppTextInputProps, 'type'>>((props, ref) => (
    <AppTextInputComponent ref={ref} type={INPUT_TYPES.DEFAULT} {...props} />
));

const OutlinedTextInput = forwardRef<any, Omit<AppTextInputProps, 'type'>>((props, ref) => (
    <AppTextInputComponent ref={ref} type={INPUT_TYPES.OUTLINED} {...props} />
));

const FilledTextInput = forwardRef<any, Omit<AppTextInputProps, 'type'>>((props, ref) => (
    <AppTextInputComponent ref={ref} type={INPUT_TYPES.FILLED} {...props} />
));

const RoundedTextInput = forwardRef<any, Omit<AppTextInputProps, 'type'>>((props, ref) => (
    <AppTextInputComponent ref={ref} type={INPUT_TYPES.ROUNDED} {...props} />
));

// Export the main component with all variants
export const AppInput = Object.assign(AppTextInputComponent, {
  Default: DefaultTextInput,
  Outlined: OutlinedTextInput,
  Filled: FilledTextInput,
  Rounded: RoundedTextInput,
});