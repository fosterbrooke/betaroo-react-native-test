import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { statPill, text } from '../../tokens';

export type StatWindow = 'L5' | 'L10' | 'L20';

type StatPillProps = {
  window: StatWindow;
  percentage: number;
};

export function StatPill({ window: win, percentage }: StatPillProps) {
  return (
    <View style={styles.row}>
      <View style={styles.pill}>
        <Text style={styles.window}>{win}</Text>
      </View>
      <Text style={styles.value}>{percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: statPill.gap,
  },
  pill: {
    backgroundColor: statPill.background,
    borderRadius: statPill.borderRadius,
    height: statPill.height,
    justifyContent: 'center',
    paddingHorizontal: statPill.paddingHorizontal,
    paddingVertical: statPill.paddingVertical,
  },
  window: {
    color: statPill.text,
    fontSize: statPill.fontSize,
    fontWeight: statPill.windowFontWeight,
  },
  value: {
    color: text.primary,
    fontSize: statPill.fontSize,
    fontWeight: statPill.valueFontWeight,
  },
});
