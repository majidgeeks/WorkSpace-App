import React, {FC, PropsWithChildren} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface SvgScaleViewProps {
  size: number;
  style?: ViewStyle;
}

export const SvgScaleView: FC<PropsWithChildren<SvgScaleViewProps>> = ({
  size,
  children,
  style,
}) => {
  return (
    <View style={[styles.container, {width: size}, style]}>{children}</View>
  );
};

export default SvgScaleView;

const styles = StyleSheet.create({
  container: {aspectRatio: 1},
});