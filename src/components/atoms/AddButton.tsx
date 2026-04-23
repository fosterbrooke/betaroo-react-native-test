import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as tokens from '../../tokens';
import { AddCircleIcon } from '../icons';

const DEFAULT_SIZE = tokens.footer_odds_control_height;
const ICON_SIZE = 14;

type AddButtonProps = {
  onPress: () => void;
  size?: number;
  accessibilityLabel?: string;
};

export function AddButton({
  onPress,
  size = DEFAULT_SIZE,
  accessibilityLabel = 'Add',
}: AddButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      style={[
        styles.button,
        tokens.CUSTOM_SHADOW_XSMALL,
        {
          width: size,
          height: size,
          borderRadius: tokens.radius6,
          padding: tokens.spacing_2,
        },
      ]}
      activeOpacity={0.7}
    >
      <AddCircleIcon size={ICON_SIZE} color={tokens.textPrimary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: tokens.bg_secondary,
    borderWidth: 0,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
