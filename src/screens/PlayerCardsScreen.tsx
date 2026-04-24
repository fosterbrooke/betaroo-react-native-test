import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PlayerCard, PlayerCardData } from '../features/cards/PlayerCard';
import * as tokens from '../tokens';

const CARD_WIDTH = 358;
const CARD_HEIGHT = 126;

/** Viewport ≈ 3 player card heights so the list scrolls (layout QA). */
const VERTICAL_LIST_HEIGHT = 3 * CARD_HEIGHT;

/** One player card per confidence tier (vertical list QA). */
const PLAYER_CARDS: PlayerCardData[] = [
  {
    playerName: 'Nikola Jokic',
    position: 'C',
    propLine: '+25 Points',
    confidenceLabel: 'ELITE',
    stats: [
      { window: 'L5', percentage: 90 },
      { window: 'L10', percentage: 85 },
      { window: 'L20', percentage: 82 },
    ],
    odds: '-115',
    matchup: 'DEN @ OKC',
    gameTime: 'FRI 8PM',
  },
  {
    playerName: 'Derrick White',
    position: 'SG',
    propLine: '+6 Assists',
    confidenceLabel: 'STRONG',
    stats: [
      { window: 'L5', percentage: 75 },
      { window: 'L10', percentage: 72 },
      { window: 'L20', percentage: 71 },
    ],
    odds: '+172',
    matchup: 'CEL @ GSW',
    gameTime: 'FRI 10AM',
  },
  {
    playerName: 'LeBron James',
    position: 'SF',
    propLine: '+8 Rebounds',
    confidenceLabel: 'FAIR',
    stats: [
      { window: 'L5', percentage: 70 },
      { window: 'L10', percentage: 68 },
      { window: 'L20', percentage: 65 },
    ],
    odds: '+145',
    matchup: 'LAL @ DAL',
    gameTime: 'SAT 6PM',
  },
  {
    playerName: 'Jayson Tatum',
    position: 'SF',
    propLine: '+30 Points',
    confidenceLabel: 'RISKY',
    stats: [
      { window: 'L5', percentage: 77 },
      { window: 'L10', percentage: 74 },
      { window: 'L20', percentage: 70 },
    ],
    odds: '+118',
    matchup: 'BOS @ MIL',
    gameTime: 'SAT 3PM',
  },
];

function PlayerListSeparator() {
  return <View style={styles.playerListSeparator} />;
}

export function PlayerCardsScreen() {
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.verticalList}
        data={PLAYER_CARDS}
        showsVerticalScrollIndicator
        scrollEnabled
        nestedScrollEnabled
        removeClippedSubviews={false}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={PlayerListSeparator}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <PlayerCard {...item} />
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
  },
  verticalList: {
    height: VERTICAL_LIST_HEIGHT,
    width: '100%',
  },
  list: {
    padding: tokens.spacing16,
    alignItems: 'center',
    flexGrow: 0,
  },
  playerListSeparator: {
    height: tokens.SPACING_12,
    alignSelf: 'stretch',
  },
  cardWrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});
