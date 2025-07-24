import React, {ReactNode} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {AppText, TEXT_TYPES} from './AppText.tsx';
import AppIcon from './AppIcon.tsx';

import {AppIconName} from "../../values/AssetIcons.ts";

import {AppColor} from '../../styles/AppColor.ts';

interface AppListItemProps {
  title: string;
  subtitle?: string;
  icon?: AppIconName;
  image?: ReactNode;
  description?: string;
  onPress?: () => void;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  showArrow?: boolean;
  rightIcon?: ReactNode;
  style?: ViewStyle;
}

const defaultStyles = {
  title: {
    color: AppColor.textPrimary,
    fontSize: 16,
  },
  subtitle: {
    color: AppColor.textSecondary,
    fontSize: 14,
  },
  description: {
    color: AppColor.textPrimary,
    fontSize: 12,
  },
};

const AppListItem: React.FC<AppListItemProps> = ({
                                                   title,
                                                   subtitle,
                                                   icon,
                                                   image,
                                                   description,
                                                   onPress,
                                                   titleStyle,
                                                   subtitleStyle,
                                                   descriptionStyle,
                                                   showArrow = true,
                                                   rightIcon,
                                                   style,
                                                 }) => {
  return (
      <TouchableOpacity style={[styles.container, style]} activeOpacity={0.7} onPress={onPress}>
        {(icon || image) && (
            <View style={styles.iconContainer}>
              {icon ? (
                  <AppIcon name={icon} size={24} color={AppColor.textSecondary}/>
              ) : image ? (
                  image
              ) : null}
            </View>
        )}
        <View style={styles.contentContainer}>
          <AppText type={TEXT_TYPES.BODY} style={[defaultStyles.title, titleStyle]} numberOfLines={1}>{title}</AppText>
          {subtitle && <AppText type={TEXT_TYPES.CAPTION} style={[defaultStyles.subtitle, subtitleStyle]} numberOfLines={1}>{subtitle}</AppText>}
        </View>
        <View style={styles.rightContainer}>
          {description && <AppText type={TEXT_TYPES.CAPTION} style={[defaultStyles.description, descriptionStyle]}>{description}</AppText>}
          {showArrow && (rightIcon || <AppIcon name="arrow-right" size={20} color={AppColor.textPrimary}/>)}
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: AppColor.backgroundLight,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: AppColor.borderLight,
  },
  iconContainer: {
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
});

export default AppListItem;