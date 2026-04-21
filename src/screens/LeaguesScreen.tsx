import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { League, LeagueSelect } from '../features/leagues/LeagueSelect';
import { background, fontSize, spacing, text } from '../tokens';

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
    backgroundColor: background.base,
  },
  content: {
    padding: spacing[24],
    paddingTop: spacing[32],
  },
  heading: {
    color: text.primary,
    fontSize: fontSize[24],
    fontWeight: '700',
    marginBottom: spacing[6],
  },
  subheading: {
    color: text.secondary,
    fontSize: fontSize[14],
    lineHeight: 20,
    marginBottom: spacing[32],
  },
  formGroup: {
    gap: spacing[8],
  },
});
