import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PlayerCard, PlayerCardData } from '../features/cards/PlayerCard';
import { TeamCard, TeamCardData } from '../features/cards/TeamCard';
import { background, fontSize, spacing, text } from '../tokens';

const TEAM_CARD_WIDTH = 196;
const TEAM_CARD_HEIGHT = 200;
const TEAM_CARD_GAP = spacing[12];

const PLAYER_CARD_WIDTH = 358;
const PLAYER_CARD_HEIGHT = 126;
const PLAYER_LIST_HEIGHT = 420;

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
    confidenceLabel: 'STRONG',
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
    confidenceLabel: 'STRONG',
    statWindow: 'L5',
    statPercentage: 68,
    odds: '+195',
    matchup: 'LAL @ GSW',
    gameTime: 'FRI 7PM',
  },
  {
    teamName: 'Miami Heat',
    betType: 'Total Over 214.5',
    confidenceLabel: 'ELITE',
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
    confidenceLabel: 'STRONG',
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
    confidenceLabel: 'STRONG',
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

export function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Teams</Text>

      <FlatList
        data={TEAM_CARDS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => `team-${i}`}
        contentContainerStyle={styles.teamsList}
        snapToInterval={TEAM_CARD_WIDTH + TEAM_CARD_GAP}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={styles.teamCardWrapper}>
            <TeamCard {...item} />
          </View>
        )}
      />

      <View style={styles.sectionSpacer} />

      <Text style={styles.title}>Players</Text>

      <FlatList
        data={PLAYER_CARDS}
        keyExtractor={(_, i) => `player-${i}`}
        style={styles.playersList}
        contentContainerStyle={styles.playersListContent}
        showsVerticalScrollIndicator
        nestedScrollEnabled
        renderItem={({ item }) => (
          <View style={styles.playerCardWrapper}>
            <PlayerCard {...item} />
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: background.base,
  },
  content: {
    paddingTop: spacing[16],
    paddingBottom: spacing[24],
  },
  title: {
    color: text.primary,
    fontSize: fontSize[16],
    fontWeight: '700',
    paddingHorizontal: spacing[16],
    marginBottom: spacing[12],
  },
  teamsList: {
    paddingHorizontal: spacing[16],
    gap: TEAM_CARD_GAP,
  },
  teamCardWrapper: {
    width: TEAM_CARD_WIDTH,
    height: TEAM_CARD_HEIGHT,
  },
  sectionSpacer: {
    height: spacing[24],
  },
  playersList: {
    height: PLAYER_LIST_HEIGHT,
    paddingHorizontal: spacing[16],
  },
  playersListContent: {
    gap: spacing[12],
    alignItems: 'center',
    paddingBottom: spacing[24],
  },
  playerCardWrapper: {
    width: PLAYER_CARD_WIDTH,
    height: PLAYER_CARD_HEIGHT,
  },
});

