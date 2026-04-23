import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PlayerCard, PlayerCardData } from '../features/cards/PlayerCard';
import {
  TeamCard,
  TeamCardData,
  TEAM_CARD_HEIGHT,
  TEAM_CARD_WIDTH,
} from '../features/cards/TeamCard';
import * as tokens from '../tokens';

const TEAM_CARD_GAP = tokens.SPACING_12;

const PLAYER_CARD_WIDTH = 358;
const PLAYER_CARD_HEIGHT = 126;

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

const PLAYER_CARDS: PlayerCardData[] = [
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
    playerName: 'Stephen Curry',
    position: 'PG',
    propLine: '+4.5 Threes',
    confidenceLabel: 'ELITE',
    stats: [
      { window: 'L5', percentage: 88 },
      { window: 'L10', percentage: 81 },
      { window: 'L20', percentage: 79 },
    ],
    odds: '+162',
    matchup: 'LAL @ GSW',
    gameTime: 'FRI 7PM',
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

function HomeListHeader() {
  return (
    <>
      <Text style={styles.title}>Teams</Text>
      <FlatList
        data={TEAM_CARDS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => `team-${i}`}
        contentContainerStyle={styles.teamsList}
        snapToInterval={TEAM_CARD_WIDTH + TEAM_CARD_GAP}
        decelerationRate="fast"
        style={styles.teamsRow}
        nestedScrollEnabled
        renderItem={({ item }) => (
          <View style={styles.teamCardWrapper}>
            <TeamCard {...item} />
          </View>
        )}
      />
      <Text style={[styles.title, styles.playersHeading]}>Players</Text>
    </>
  );
}

export function HomeScreen() {
  return (
    <FlatList
      style={styles.screen}
      data={PLAYER_CARDS}
      keyExtractor={(_, i) => `player-${i}`}
      ListHeaderComponent={HomeListHeader}
      ListHeaderComponentStyle={styles.listHeader}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator
      renderItem={({ item }) => (
        <View style={styles.playerCardWrapper}>
          <PlayerCard {...item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: tokens.bg_base,
  },
  listHeader: {
    flexGrow: 0,
  },
  listContent: {
    paddingTop: tokens.spacing16,
    paddingBottom: tokens.SPACING_24,
    paddingHorizontal: tokens.spacing16,
    gap: tokens.SPACING_12,
    alignItems: 'center',
  },
  title: {
    alignSelf: 'stretch',
    color: tokens.colors.gray[0],
    fontSize: 16,
    fontWeight: '700',
    marginBottom: tokens.SPACING_12,
  },
  teamsRow: {
    height: TEAM_CARD_HEIGHT,
    flexGrow: 0,
  },
  teamsList: {
    gap: TEAM_CARD_GAP,
    paddingBottom: 0,
  },
  teamCardWrapper: {
    width: TEAM_CARD_WIDTH,
    height: TEAM_CARD_HEIGHT,
  },
  playersHeading: {
    marginTop: tokens.SPACING_12,
  },
  playerCardWrapper: {
    width: PLAYER_CARD_WIDTH,
    height: PLAYER_CARD_HEIGHT,
  },
});
