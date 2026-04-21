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
import { border, card, fontSize, spacing, text } from '../../tokens';

const teamLogo = require('../../assets/svgs/first_tab/team-logo-at-center.png');

export type TeamCardData = {
  teamName: string;
  betType: string;
  confidenceLabel: 'ELITE' | 'STRONG';
  statWindow: StatWindow;
  statPercentage: number;
  odds: string;
  matchup: string;
  gameTime: string;
};

type TeamCardProps = TeamCardData & {
  onAdd?: () => void;
  onInfo?: () => void;
  onShare?: () => void;
};

const HEADER_ICON_SIZE = 14;

export function TeamCard({
  teamName,
  betType,
  confidenceLabel,
  statWindow,
  statPercentage,
  odds,
  matchup,
  gameTime,
  onAdd,
  onInfo,
  onShare,
}: TeamCardProps) {
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
          <TouchableOpacity
            onPress={onInfo}
            style={styles.iconBtn}
            accessibilityLabel="Info"
          >
            <InfoIcon size={HEADER_ICON_SIZE} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onShare}
            style={styles.iconBtn}
            accessibilityLabel="Share"
          >
            <ShareIcon size={HEADER_ICON_SIZE} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} accessibilityLabel="Next">
            <ArrowRightIcon size={HEADER_ICON_SIZE} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.logoCircle}>
          <Image source={teamLogo} style={styles.logoImage} resizeMode="cover" />
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.teamName}>{teamName}</Text>
          <Text style={styles.betType}>{betType}</Text>
          <View style={styles.badgeRow}>
            <ConfidenceBadge label={confidenceLabel} />
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <StatPill window={statWindow} percentage={statPercentage} />
          <View style={styles.statsRight}>
            <OddsDisplay odds={odds} />
            <AddButton onPress={onAdd ?? (() => {})} accessibilityLabel={`Add ${teamName}`} />
          </View>
        </View>
      </View>
    </View>
  );
}

const CARD_WIDTH = 196;
const CARD_HEIGHT = 200;
const LOGO_SIZE = 54;

const styles = StyleSheet.create({
  card: {
    backgroundColor: card.background,
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
    fontSize: fontSize[10],
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[8],
    gap: spacing[6],
  },
  logoCircle: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: '#0D2240',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: border.subtle,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  infoBlock: {
    alignItems: 'center',
    gap: spacing[2],
  },
  teamName: {
    color: text.primary,
    fontSize: fontSize[14],
    fontWeight: '700',
    textAlign: 'center',
  },
  betType: {
    color: text.secondary,
    fontSize: fontSize[11],
    textAlign: 'center',
  },
  badgeRow: {
    marginTop: spacing[2],
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#202020',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[8],
    justifyContent: 'space-between',
  },
  statsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
  },
});
