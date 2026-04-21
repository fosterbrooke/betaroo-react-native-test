import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { oddsDisplay } from '../../tokens';
import { KingIcon } from '../icons';

type OddsDisplayProps = {
  odds: string;
  showFire?: boolean;
};

export function OddsDisplay({ odds, showFire = true }: OddsDisplayProps) {
  return (
    <View style={styles.pill}>
      {showFire && <KingIcon size={oddsDisplay.iconSize} />}
      <Text style={styles.odds}>{odds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: oddsDisplay.background,
    borderRadius: oddsDisplay.borderRadius,
    height: oddsDisplay.height,
    justifyContent: 'center',
    paddingHorizontal: oddsDisplay.paddingHorizontal,
    paddingVertical: oddsDisplay.paddingVertical,
    gap: oddsDisplay.gap,
  },
  odds: {
    color: oddsDisplay.text,
    fontSize: oddsDisplay.fontSize,
    fontWeight: oddsDisplay.fontWeight,
  },
});
