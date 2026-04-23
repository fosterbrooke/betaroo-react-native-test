import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as tokens from '../../tokens';

const eliteBg = require('../../assets/svgs/first_tab/elite_bg.png');

const ELITE_BADGE_WIDTH = 45;
const ELITE_BADGE_HEIGHT = 18;

export type ConfidenceLabel = 'ELITE' | 'STRONG' | 'FAIR' | 'RISKY';

type ConfidenceBadgeProps = {
  label: ConfidenceLabel;
};

export function ConfidenceBadge({ label }: ConfidenceBadgeProps) {
  if (label === 'ELITE') {
    return (
      <ImageBackground
        source={eliteBg}
        resizeMode="cover"
        style={styles.elitePill}
        imageStyle={styles.eliteImage}
      >
        <Text style={styles.eliteText}>{label}</Text>
      </ImageBackground>
    );
  }
  if (label === 'STRONG') {
    return (
      <View style={[styles.tonalPill, styles.strongPillBg]}>
        <Text style={[tokens.typographyStyles.monoCompact, styles.strongTextColor]}>{label}</Text>
      </View>
    );
  }
  if (label === 'FAIR') {
    return (
      <View style={[styles.tonalPill, styles.fairPillBg]}>
        <Text style={[tokens.typographyStyles.monoCompact, styles.fairTextColor]}>{label}</Text>
      </View>
    );
  }
  return (
    <View style={[styles.tonalPill, styles.riskyPillBg]}>
      <Text style={[tokens.typographyStyles.monoCompact, styles.riskyTextColor]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  elitePill: {
    width: ELITE_BADGE_WIDTH,
    height: ELITE_BADGE_HEIGHT,
    borderRadius: tokens.RADIUS_4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignSelf: 'center',
  },
  eliteImage: {
    borderRadius: tokens.RADIUS_4,
  },
  eliteText: {
    ...tokens.typographyStyles.monoCompact,
    color: tokens.colors.gray[0],
    textAlign: 'center',
  },
  tonalPill: {
    borderRadius: tokens.RADIUS_4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing4,
    paddingVertical: tokens.spacing4,
    alignSelf: 'flex-start',
  },
  strongPillBg: {
    backgroundColor: tokens.state_success_lighter,
  },
  strongTextColor: {
    color: tokens.state_success_dark,
  },
  fairPillBg: {
    backgroundColor: tokens.stateAwayLight,
  },
  fairTextColor: {
    color: tokens.stateAwayDark,
  },
  riskyPillBg: {
    backgroundColor: tokens.stateErrorLight,
  },
  riskyTextColor: {
    color: tokens.stateErrorDark,
  },
});
