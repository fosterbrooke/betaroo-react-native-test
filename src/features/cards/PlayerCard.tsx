import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AddButton } from '../../components/atoms/AddButton';
import { ConfidenceBadge } from '../../components/atoms/ConfidenceBadge';
import { OddsDisplay } from '../../components/atoms/OddsDisplay';
import { StatPill, StatWindow } from '../../components/atoms/StatPill';
import { ArrowRightIcon, InfoIcon, ShareIcon } from '../../components/icons';
import { background, border, card, fontSize, positionBadge, spacing, text } from '../../tokens';
import { typographyStyles } from '../../tokens/tokens';

const playerLogo = require('../../assets/svgs/second_tab/player_logo.png');
const teamLogo = require('../../assets/svgs/second_tab/team-logo.png');

export type PlayerCardData = {
  playerName: string;
  position: string;
  propLine: string;
  confidenceLabel: 'ELITE' | 'STRONG';
  stats: Array<{ window: StatWindow; percentage: number }>;
  odds: string;
  matchup: string;
  gameTime: string;
};

type PlayerCardProps = PlayerCardData & {
  onAdd?: () => void;
  onInfo?: () => void;
  onShare?: () => void;
};

// Avatar sizes matching the SVG proportions (player r=17, team r=7.4 → ratio ~2.3x)
const CARD_WIDTH = 358;
const CARD_HEIGHT = 126;
const PLAYER_AVATAR_SIZE = 36;
const TEAM_LOGO_SIZE = 16;
// Overlap offset: team logo positioned at bottom-right of player circle
const TEAM_LOGO_OFFSET = PLAYER_AVATAR_SIZE - TEAM_LOGO_SIZE + 4;
const HEADER_ICON_SIZE = 14;

export function PlayerCard({
  playerName,
  position,
  propLine,
  confidenceLabel,
  stats,
  odds,
  matchup,
  gameTime,
  onAdd,
  onInfo,
  onShare,
}: PlayerCardProps) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.matchupText} numberOfLines={1}>
          <Text style={styles.matchupTeam}>{matchup.split(' ')[0]}</Text>
          <Text style={styles.matchupRest}>
            {' '}
            {matchup.slice(matchup.indexOf(' ') + 1)} · {gameTime}
          </Text>
        </Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={onInfo} style={styles.iconBtn} accessibilityLabel="Info">
            <InfoIcon size={HEADER_ICON_SIZE} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare} style={styles.iconBtn} accessibilityLabel="Share">
            <ShareIcon size={HEADER_ICON_SIZE} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} accessibilityLabel="Next">
            <ArrowRightIcon size={HEADER_ICON_SIZE} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main body */}
      <View style={styles.body}>
        {/* Avatar block with overlapping team logo */}
        <View style={styles.avatarBlock}>
          {/* Player avatar */}
          <View style={styles.playerAvatarCircle}>
            <Image source={playerLogo} style={styles.playerImage} resizeMode="cover" />
          </View>
          {/* Team logo — absolute positioned at bottom-right */}
          <View style={[styles.teamLogoCircle, { top: TEAM_LOGO_OFFSET, left: TEAM_LOGO_OFFSET }]}>
            <Image source={teamLogo} style={styles.teamLogoImage} resizeMode="cover" />
          </View>
        </View>

        {/* Player info */}
        <View style={styles.playerInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.playerName}>{playerName}</Text>
            <View style={styles.positionBadge}>
              <Text style={styles.positionText}>{position}</Text>
            </View>
            <View style={styles.badgePushed}>
              <ConfidenceBadge label={confidenceLabel} />
            </View>
          </View>
          <Text style={styles.propLine}>{propLine}</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <View style={styles.statsLeft}>
            {stats.map(stat => (
              <StatPill key={stat.window} window={stat.window} percentage={stat.percentage} />
            ))}
          </View>
          <View style={styles.statsRight}>
            <OddsDisplay odds={odds} />
            <AddButton onPress={onAdd ?? (() => {})} accessibilityLabel={`Add ${playerName}`} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: background.primary,
    borderRadius: card.borderRadius,
    overflow: 'hidden',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    shadowColor: card.shadowColor,
    shadowOffset: card.shadowOffset,
    shadowOpacity: card.shadowOpacity,
    shadowRadius: card.shadowRadius,
    elevation: card.elevation,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[10],
    paddingVertical: spacing[8],
    borderBottomWidth: 1,
    borderBottomColor: '#202020',
  },
  matchupText: {
    color: text.secondary,
    fontSize: fontSize[11],
    fontWeight: '500',
  },
  matchupTeam: {
    color: text.tertiary,
  },
  matchupRest: {
    color: text.disabled,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[0],
  },
  iconBtn: {
    padding: 0,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[6],
    gap: spacing[10],
  },
  avatarBlock: {
    width: PLAYER_AVATAR_SIZE,
    height: PLAYER_AVATAR_SIZE,
    position: 'relative',
  },
  playerAvatarCircle: {
    width: PLAYER_AVATAR_SIZE,
    height: PLAYER_AVATAR_SIZE,
    borderRadius: PLAYER_AVATAR_SIZE / 2,
    backgroundColor: '#BB9753',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: border.subtle,
  },
  playerImage: {
    width: '100%',
    height: '100%',
  },
  teamLogoCircle: {
    position: 'absolute',
    width: TEAM_LOGO_SIZE,
    height: TEAM_LOGO_SIZE,
    borderRadius: TEAM_LOGO_SIZE / 2,
    backgroundColor: '#008348',
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: card.background,
  },
  teamLogoImage: {
    width: '100%',
    height: '100%',
  },
  playerInfo: {
    flex: 1,
    gap: spacing[2],
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
    flexWrap: 'wrap',
  },
  playerName: {
    color: text.primary,
    ...typographyStyles.labelSmall,
  },
  positionBadge: {
    backgroundColor: positionBadge.background,
    borderRadius: positionBadge.borderRadius,
    paddingHorizontal: positionBadge.paddingHorizontal,
    paddingVertical: positionBadge.paddingVertical,
  },
  positionText: {
    color: positionBadge.text,
    fontSize: positionBadge.fontSize,
    fontWeight: positionBadge.fontWeight,
  },
  badgePushed: {
    marginLeft: 'auto',
  },
  propLine: {
    color: text.primary,
    ...typographyStyles.paragraphTiny,
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#202020',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[12],
    paddingTop: spacing[8],
    paddingBottom: spacing[8],
    justifyContent: 'space-between',
  },
  statsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
    flexShrink: 1,
  },
  statsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
  },
});
