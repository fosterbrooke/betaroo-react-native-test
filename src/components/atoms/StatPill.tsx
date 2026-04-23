import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as tokens from '../../tokens';

export type StatWindow = 'L5' | 'L10' | 'L20';

type StatPillProps = {
  window: StatWindow;
  percentage: number;
};

const textVerticalCenter =
  Platform.OS === 'android'
    ? ({ includeFontPadding: false, textAlignVertical: 'center' as const })
    : undefined;

export function StatPill({ window: win, percentage }: StatPillProps) {
  return (
    <View style={styles.row}>
      <View style={styles.pill}>
        <Text style={[tokens.typographyStyles.monoCompact, styles.windowColor, textVerticalCenter]}>
          {win}
        </Text>
      </View>
      <Text style={[tokens.typographyStyles.paragraphTiny, styles.valueColor, textVerticalCenter]}>
        {percentage}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.SPACING_6,
  },
  pill: {
    backgroundColor: tokens.state_success_lighter,
    borderRadius: tokens.RADIUS_4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing4,
    paddingVertical: tokens.spacing4,
  },
  windowColor: {
    color: tokens.state_success_dark,
  },
  valueColor: {
    color: tokens.colors.gray[0],
  },
});
