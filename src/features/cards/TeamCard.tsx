import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AddButton } from '../../components/atoms/AddButton';
import {
  ConfidenceBadge,
  type ConfidenceLabel,
} from '../../components/atoms/ConfidenceBadge';
import { OddsDisplay } from '../../components/atoms/OddsDisplay';
import { StatPill, StatWindow } from '../../components/atoms/StatPill';
import * as tokens from '../../tokens';
import ArrowRightSvg from '../../assets/svgs/first_tab/arrow_right.svg';
import InfoIcoSvg from '../../assets/svgs/first_tab/info_ico.svg';
import UploadIcoSvg from '../../assets/svgs/first_tab/upload_ico.svg';

const teamLogo = require('../../assets/svgs/first_tab/team-logo-at-center.png');

/** Horizontal team card outer size — keep in sync with list `snapToInterval` wrappers. */
export const TEAM_CARD_WIDTH = 196;
export const TEAM_CARD_HEIGHT = 216;

export type TeamCardData = {
  teamName: string;
  betType: string;
  confidenceLabel: ConfidenceLabel;
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

const HEADER_ICON_DRAW_SIZE = 8.75;
const HEADER_ICON_COLOR = tokens.colors.gray[400];

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
        <View style={styles.matchupRow}>
          <Text style={[styles.matchupText, styles.matchupTeam]} numberOfLines={1}>
            {matchup.split(' ')[0]}
          </Text>
          <Text
            style={[styles.matchupText, styles.matchupRest]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {matchup.slice(matchup.indexOf(' ') + 1)} · {gameTime}
          </Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={onInfo}
            style={styles.iconWrap}
            accessibilityLabel="Info"
          >
            <InfoIcoSvg
              width={HEADER_ICON_DRAW_SIZE}
              height={HEADER_ICON_DRAW_SIZE}
              color={HEADER_ICON_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onShare}
            style={styles.iconWrap}
            accessibilityLabel="Share"
          >
            <UploadIcoSvg
              width={HEADER_ICON_DRAW_SIZE}
              height={HEADER_ICON_DRAW_SIZE}
              color={HEADER_ICON_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrap} accessibilityLabel="Next">
            <ArrowRightSvg
              width={HEADER_ICON_DRAW_SIZE}
              height={HEADER_ICON_DRAW_SIZE}
              color={HEADER_ICON_COLOR}
            />
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
          <View style={styles.statsLeft}>
            <StatPill window={statWindow} percentage={statPercentage} />
          </View>
          <View style={styles.statsRight}>
            <OddsDisplay odds={odds} />
            <AddButton onPress={onAdd ?? (() => {})} accessibilityLabel={`Add ${teamName}`} />
          </View>
        </View>
      </View>
    </View>
  );
}

const LOGO_SIZE = 56;

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg_primary,
    borderRadius: tokens.radius_8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: tokens.borderDark,
    width: TEAM_CARD_WIDTH,
    height: TEAM_CARD_HEIGHT,
    ...tokens.cardShadowLarge,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: tokens.SPACING_12,
    paddingRight: tokens.spacing_8,
    paddingTop: tokens.SPACING_6,
    paddingBottom: tokens.SPACING_6,
    borderBottomWidth: 1,
    borderBottomColor: tokens.borderDark,
  },
  matchupRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing4,
    minWidth: 0,
  },
  matchupText: {
    fontSize: 10,
    fontWeight: '500',
  },
  matchupTeam: {
    flexShrink: 0,
    color: tokens.content_tertiary,
  },
  matchupRest: {
    flex: 1,
    minWidth: 0,
    color: tokens.content_disabled,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.SPACING_0,
  },
  iconWrap: {
    width: tokens.spacing_14,
    height: tokens.spacing_14,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.SPACING_12,
    gap: tokens.spacing_8,
  },
  logoCircle: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    backgroundColor: '#0D2240',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: tokens.colors.slate[800],
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
  },
  teamName: {
    ...tokens.typographyStyles.labelXTiny,
    color: tokens.colors.gray[0],
    textAlign: 'center',
  },
  betType: {
    ...tokens.typographyStyles.paragraphTiny,
    color: tokens.colors.slate[400],
    textAlign: 'center',
    marginTop: tokens.spacing4,
  },
  badgeRow: {
    marginTop: tokens.spacing4,
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: tokens.borderDark,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: 36,
    gap: tokens.spacing4,
    paddingHorizontal: tokens.SPACING_12,
    justifyContent: 'space-between',
  },
  statsLeft: {
    justifyContent: 'center',
    flexShrink: 1,
  },
  statsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacing4,
  },
});
