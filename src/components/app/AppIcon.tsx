import React from "react";
import {StyleSheet} from "react-native";

import {Icon, IconProps} from "@ui-kitten/components";

import {AppIconName} from "../../values/AssetIcons.tsx";

export interface IconComponentProps extends Partial<IconProps> {
  size?: number;
  color?: string;
}

const AppIcon: React.FC<IconComponentProps & { name: AppIconName }> = ({
                                                                         name,
                                                                         size = 24,
                                                                         color,
                                                                         style,
                                                                         ...props
                                                                       }) => (
    <Icon
        name={name}
        pack="eva"
        style={[
          styles.icon,
          {width: size, height: size},
          color && {tintColor: color},
          style
        ]}
        {...props}
    />
);

const styles = StyleSheet.create({
  icon: {
    // Add any default styles here
  }
});

export default AppIcon;