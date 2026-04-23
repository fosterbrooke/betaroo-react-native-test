import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  TeamCard,
  TeamCardData,
  TEAM_CARD_HEIGHT,
  TEAM_CARD_WIDTH,
} from '../features/cards/TeamCard';
import * as tokens from '../tokens';

const HORIZONTAL_PADDING = tokens.spacing16;
const CARD_GAP = tokens.SPACING_12;

const TEAM_CARDS: TeamCardData[] = [
  {
    teamName: 'Denver Nuggets',
    betType: 'Moneyline',
    confidenceLabel: 'ELITE',
    statWindow: 'L5',
    statPercentage: 85,
    odds: '+172',
    matchup: 'CFC @ MIA',
    gameTime: 'FRI 10AM',
  },
  {
    teamName: 'Los Angeles Lakers',
    betType: 'Moneyline',
    confidenceLabel: 'FAIR',
    statWindow: 'L10',
    statPercentage: 78,
    odds: '-115',
    matchup: 'LAL @ GSW',
    gameTime: 'FRI 7PM',
  },
  {
    teamName: 'Boston Celtics',
    betType: 'Spread -4.5',
    confidenceLabel: 'ELITE',
    statWindow: 'L20',
    statPercentage: 72,
    odds: '+140',
    matchup: 'BOS @ MIL',
    gameTime: 'SAT 3PM',
  },
  {
    teamName: 'Golden State Warriors',
    betType: 'Moneyline',
    confidenceLabel: 'RISKY',
    statWindow: 'L5',
    statPercentage: 68,
    odds: '+195',
    matchup: 'LAL @ GSW',
    gameTime: 'FRI 7PM',
  },
  {
    teamName: 'Miami Heat',
    betType: 'Total Over 214.5',
    confidenceLabel: 'STRONG',
    statWindow: 'L10',
    statPercentage: 80,
    odds: '-108',
    matchup: 'CFC @ MIA',
    gameTime: 'FRI 10AM',
  },
];

export function TeamCardsScreen() {
  return (
    <View style={styles.screen}>
      <FlatList
        data={TEAM_CARDS}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={TEAM_CARD_WIDTH + CARD_GAP}
        snapToAlignment="start"
        decelerationRate="fast"
        contentContainerStyle={styles.list}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <TeamCard {...item} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: tokens.bg_base,
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: tokens.SPACING_24,
    gap: CARD_GAP,
  },
  cardWrapper: {
    width: TEAM_CARD_WIDTH,
    height: TEAM_CARD_HEIGHT,
  },
});
