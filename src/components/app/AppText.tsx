import React from 'react';
import { Text, TextProps } from '@ui-kitten/components';
import { TextStyle } from 'react-native';
import { AppColor } from '../../styles/AppColor.ts';

// Define all available text types
export const TEXT_TYPES = {
  // Header series
  HEADER_LARGE: 'headerLarge',
  HEADER: 'header',
  HEADER_SMALL: 'headerSmall',
  // Body series
  BODY_LARGE: 'bodyLarge',
  BODY: 'body',
  BODY_SMALL: 'bodySmall',
  // Navigation series
  NAVIGATOR: 'navigator',
  LINK: 'link',
  // Others
  CAPTION: 'caption',
  LABEL: 'label',
} as const;

// Get type using typeof and keyof
export type TextType = typeof TEXT_TYPES[keyof typeof TEXT_TYPES];

interface AppTextProps extends TextProps {
  type?: TextType;
}

// Text style mapping
const textStyles: Record<TextType, TextStyle> = {
  [TEXT_TYPES.HEADER_LARGE]: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Montserrat-Bold",
    marginBottom: 16,
    color: AppColor.textPrimary,
  },
  [TEXT_TYPES.HEADER]: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Montserrat-Bold",
    marginBottom: 12,
    color: AppColor.textPrimary,
  },
  [TEXT_TYPES.HEADER_SMALL]: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Montserrat-Bold",
    marginBottom: 12,
    color: AppColor.textPrimary,
  },
  [TEXT_TYPES.BODY_LARGE]: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: "Montserrat-Regular",
    color: AppColor.textPrimary,
  },
  [TEXT_TYPES.BODY]: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Montserrat-Regular",
    color: AppColor.textPrimary,
  },
  [TEXT_TYPES.BODY_SMALL]: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Montserrat-Regular",
    color: AppColor.textPrimary,
  },
  [TEXT_TYPES.NAVIGATOR]: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Montserrat-Medium",
    color: AppColor.textPrimary,
  },
  [TEXT_TYPES.LINK]: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    color: AppColor.primary,
    textDecorationLine: "underline",
  },
  [TEXT_TYPES.CAPTION]: {
    fontSize: 12,
    fontFamily: "Montserrat-Light",
    color: AppColor.textSecondary,
  },
  [TEXT_TYPES.LABEL]: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat-Medium",
    color: AppColor.textPrimary,
  },
};

// Base component
const BaseAppText: React.FC<AppTextProps> = ({
  type = TEXT_TYPES.BODY,
  style,
  ...props
}) => {
  return (
    <Text
      style={[textStyles[type], style]}
      {...props}
    />
  );
};

// Create typed components for each text type
const HeaderLarge: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.HEADER_LARGE} {...props} />
);

const Header: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.HEADER} {...props} />
);

const HeaderSmall: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.HEADER_SMALL} {...props} />
);

const BodyLarge: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.BODY_LARGE} {...props} />
);

const Body: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.BODY} {...props} />
);

const BodySmall: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.BODY_SMALL} {...props} />
);

const Navigator: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.NAVIGATOR} {...props} />
);

const Link: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.LINK} {...props} />
);

const Caption: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.CAPTION} {...props} />
);

const Label: React.FC<Omit<AppTextProps, 'type'>> = (props) => (
  <BaseAppText type={TEXT_TYPES.LABEL} {...props} />
);

// Export the main component with all variants
export const AppText = Object.assign(BaseAppText, {
  HeaderLarge,
  Header,
  HeaderSmall,
  BodyLarge,
  Body,
  BodySmall,
  Navigator,
  Link,
  Caption,
  Label,
});