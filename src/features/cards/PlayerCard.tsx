import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { AddButton } from '../../components/atoms/AddButton';
import {
  ConfidenceBadge,
  type ConfidenceLabel,
} from '../../components/atoms/ConfidenceBadge';
import { OddsDisplay } from '../../components/atoms/OddsDisplay';
import { StatPill, StatWindow } from '../../components/atoms/StatPill';
import * as tokens from '../../tokens';
import NBASvg from '../../assets/svgs/first_tab/NBA.svg';
import ArrowRightSvg from '../../assets/svgs/first_tab/arrow_right.svg';
import InfoIcoSvg from '../../assets/svgs/first_tab/info_ico.svg';
import UploadIcoSvg from '../../assets/svgs/first_tab/upload_ico.svg';

const playerLogo = require('../../assets/svgs/second_tab/player_logo.png');

/** Team badge fill (NBA); ring uses inset linear white stroke per spec. */
const TEAM_LOGO_FILL = '#008348';
const TEAM_LOGO_RING_STROKE = 0.44;

function TeamLogoBadge() {
  const gradId = React.useId().replace(/:/g, '_');
  const cx = 50;
  const cy = 50;
  const rFill = 50 - TEAM_LOGO_RING_STROKE;
  const rStroke = 50 - TEAM_LOGO_RING_STROKE / 2;
  return (
    <View style={styles.teamLogoCircle}>
      <Svg
        width="100%"
        height="100%"
        style={StyleSheet.absoluteFill}
        viewBox="0 0 100 100"
      >
        <Defs>
          <LinearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#FFFFFF" />
            <Stop offset="100%" stopColor="#FFFFFF" />
          </LinearGradient>
        </Defs>
        <Circle cx={cx} cy={cy} r={rFill} fill={TEAM_LOGO_FILL} />
        <Circle
          cx={cx}
          cy={cy}
          r={rStroke}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={TEAM_LOGO_RING_STROKE}
          vectorEffect="nonScalingStroke"
        />
      </Svg>
      <View style={styles.teamLogoSvgLayer} pointerEvents="none">
        <NBASvg width="100%" height="100%" />
      </View>
    </View>
  );
}

export type PlayerCardData = {
  playerName: string;
  position: string;
  propLine: string;
  confidenceLabel: ConfidenceLabel;
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

const CARD_WIDTH = 358;
const CARD_HEIGHT = 126;
const PLAYER_AVATAR_SIZE = 34;
/** Match `TeamCard` header icon draw size. */
const HEADER_ICON_DRAW_SIZE = 8.75;
const HEADER_ICON_COLOR = tokens.colors.gray[400];

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
          <TouchableOpacity onPress={onInfo} style={styles.iconWrap} accessibilityLabel="Info">
            <InfoIcoSvg
              width={HEADER_ICON_DRAW_SIZE}
              height={HEADER_ICON_DRAW_SIZE}
              color={HEADER_ICON_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare} style={styles.iconWrap} accessibilityLabel="Share">
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

      {/* Main body */}
      <View style={styles.body}>
        {/* Avatar block with overlapping team logo */}
        <View style={styles.avatarBlock}>
          {/* Player avatar */}
          <View style={styles.playerAvatarCircle}>
            <Image source={playerLogo} style={styles.playerImage} resizeMode="cover" />
          </View>
          {/* Team logo — absolute positioned at bottom-right */}
          <TeamLogoBadge />
        </View>

        {/* Player info */}
        <View style={styles.playerInfo}>
          <View style={styles.nameRow}>
            <Text style={[tokens.typographyStyles.labelSmall, styles.playerNameColor]}>{playerName}</Text>
            <View style={styles.positionBadge}>
              <Text style={styles.positionText}>{position}</Text>
            </View>
            <View style={styles.badgePushed}>
              <ConfidenceBadge label={confidenceLabel} />
            </View>
          </View>
          <Text style={[tokens.typographyStyles.paragraphTiny, styles.propLineColor]}>{propLine}</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.statsRow}>
          <View style={styles.statsLeft}>
            {stats.map((stat, index) => (
              <React.Fragment key={stat.window}>
                <StatPill window={stat.window} percentage={stat.percentage} />
                {index < stats.length - 1 ? <View style={styles.statSeparator} /> : null}
              </React.Fragment>
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
    backgroundColor: tokens.bg_primary,
    borderRadius: tokens.radius_8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: tokens.borderDark,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.SPACING_12,
    gap: tokens.spacing_8,
  },
  avatarBlock: {
    width: PLAYER_AVATAR_SIZE,
    height: PLAYER_AVATAR_SIZE,
    position: 'relative',
    overflow: 'visible',
  },
  playerAvatarCircle: {
    width: PLAYER_AVATAR_SIZE,
    height: PLAYER_AVATAR_SIZE,
    borderRadius: PLAYER_AVATAR_SIZE / 2,
    backgroundColor: '#BB9753',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: tokens.colors.slate[800],
  },
  playerImage: {
    width: '100%',
    height: '100%',
  },
  teamLogoCircle: {
    position: 'absolute',
    left: '62.5%',
    right: '-6.25%',
    top: '59.38%',
    bottom: '-3.12%',
    borderRadius: tokens.RADIUS_FULL,
    overflow: 'hidden',
  },
  teamLogoSvgLayer: {
    ...StyleSheet.absoluteFill,
  },
  playerInfo: {
    flex: 1,
    gap: tokens.spacing_2,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing4,
    flexWrap: 'wrap',
  },
  playerNameColor: {
    color: tokens.colors.gray[0],
  },
  positionBadge: {
    backgroundColor: tokens.state_faded_lighter,
    borderRadius: tokens.RADIUS_4,
    paddingHorizontal: tokens.spacing_2,
    paddingVertical: tokens.spacing_2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  positionText: {
    fontFamily: Platform.select({
      ios: 'DMMono-Regular',
      android: 'DMMono-Regular',
      default: 'DMMono-Regular',
    }),
    fontSize: 9,
    lineHeight: 10,
    fontWeight: '500',
    letterSpacing: 9 * 0.02,
    color: tokens.stateFadedBase,
    textAlign: 'center',
  },
  badgePushed: {
    marginLeft: 'auto',
  },
  propLineColor: {
    color: tokens.colors.gray[0],
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
  },
  statSeparator: {
    width: 1,
    height: 16,
    alignSelf: 'center',
    marginHorizontal: tokens.SPACING_6,
    backgroundColor: tokens.bg_secondary,
  },
  statsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacing4,
  },
});
