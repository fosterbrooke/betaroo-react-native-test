import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { badge } from '../../tokens';

const eliteBg = require('../../assets/svgs/first_tab/elite_bg.png');

type ConfidenceBadgeProps = {
  label: 'ELITE' | 'STRONG';
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
  return (
    <View style={styles.strongPill}>
      <Text style={styles.strongText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  elitePill: {
    borderRadius: badge.elite.borderRadius,
    height: badge.elite.height,
    justifyContent: 'center',
    paddingHorizontal: badge.elite.paddingHorizontal,
    paddingVertical: badge.elite.paddingVertical,
    alignSelf: 'flex-start',
  },
  eliteImage: {
    borderRadius: badge.elite.borderRadius,
  },
  eliteText: {
    color: badge.elite.text,
    fontSize: badge.elite.fontSize,
    fontWeight: badge.elite.fontWeight,
    letterSpacing: badge.elite.letterSpacing,
  },
  strongPill: {
    backgroundColor: badge.strong.background,
    borderRadius: badge.strong.borderRadius,
    height: badge.strong.height,
    justifyContent: 'center',
    paddingHorizontal: badge.strong.paddingHorizontal,
    paddingVertical: badge.strong.paddingVertical,
    alignSelf: 'flex-start',
  },
  strongText: {
    color: badge.strong.text,
    fontSize: badge.strong.fontSize,
    fontWeight: badge.strong.fontWeight,
    letterSpacing: badge.strong.letterSpacing,
  },
});
