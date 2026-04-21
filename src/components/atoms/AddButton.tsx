import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { addButton } from '../../tokens';
import { AddCircleIcon } from '../icons';

type AddButtonProps = {
  onPress: () => void;
  size?: number;
  accessibilityLabel?: string;
};

export function AddButton({
  onPress,
  size = addButton.size,
  accessibilityLabel = 'Add',
}: AddButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      style={[styles.button, { width: size, height: size, borderRadius: size / 2 }]}
      activeOpacity={0.7}
    >
      <AddCircleIcon size={addButton.iconSize} color={addButton.iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: addButton.background,
    borderWidth: addButton.borderWidth,
    borderColor: addButton.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
