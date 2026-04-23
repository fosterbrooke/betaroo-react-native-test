import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as tokens from '../../tokens';
import { KingIcon } from '../icons';

const KING_ICON_SIZE = 12;

type OddsDisplayProps = {
  odds: string;
  showFire?: boolean;
};

const textVerticalCenter =
  Platform.OS === 'android'
    ? ({ includeFontPadding: false, textAlignVertical: 'center' as const })
    : undefined;

export function OddsDisplay({ odds, showFire = true }: OddsDisplayProps) {
  return (
    <View style={styles.pill}>
      {showFire && <KingIcon size={KING_ICON_SIZE} />}
      <Text style={[tokens.typographyStyles.monoCompact, styles.odds, textVerticalCenter]}>{odds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: tokens.footer_odds_control_height,
    backgroundColor: tokens.bg_secondary,
    borderRadius: tokens.radius6,
    padding: tokens.spacing4,
    gap: tokens.spacing_2,
  },
  odds: {
    color: tokens.colors.gray[0],
  },
});
