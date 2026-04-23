import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { League, LeagueSelect } from '../features/leagues/LeagueSelect';
import * as tokens from '../tokens';

const LEAGUES: League[] = [
  { id: 'nba', name: 'NBA' },
  { id: 'nfl', name: 'NFL' },
  { id: 'mlb', name: 'MLB' },
  { id: 'nhl', name: 'NHL' },
  { id: 'mls', name: 'MLS' },
];

export function LeaguesScreen() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.heading}>Preferences</Text>
      <Text style={styles.subheading}>Choose your favourite leagues to personalise your feed.</Text>

      <View style={styles.formGroup}>
        <LeagueSelect
          leagues={LEAGUES}
          selectedIds={selectedIds}
          onChange={setSelectedIds}
          label="Preferred Leagues"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: tokens.bg_base,
  },
  content: {
    padding: tokens.SPACING_24,
    paddingTop: tokens.spacing_32,
  },
  heading: {
    color: tokens.colors.gray[0],
    fontSize: 24,
    fontWeight: '700',
    marginBottom: tokens.SPACING_6,
  },
  subheading: {
    color: tokens.colors.slate[400],
    fontSize: 14,
    lineHeight: 20,
    marginBottom: tokens.spacing_32,
  },
  formGroup: {
    gap: tokens.spacing_8,
  },
});
