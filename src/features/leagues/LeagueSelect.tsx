import React, { useCallback, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ChevronUpIcon } from '../../components/icons';
import * as tokens from '../../tokens';

export type League = {
  id: string;
  name: string;
};

type LeagueSelectProps = {
  leagues: League[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  label?: string;
};

const ITEM_HEIGHT = 36;

export function LeagueSelect({
  leagues,
  selectedIds,
  onChange,
  label = 'Preferred Leagues',
}: LeagueSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  // height animation — must use useNativeDriver:false for layout props
  const animatedHeight = useRef(new Animated.Value(0)).current;

  // chevron rotation — can use native driver
  const chevronAnim = useRef(new Animated.Value(0)).current;

  const open = useCallback(() => {
    setIsOpen(true);
    const panelPadV = tokens.spacing4 * 2;
    const targetHeight = panelPadV + ITEM_HEIGHT * leagues.length;

    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: targetHeight,
        duration: 280,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(chevronAnim, {
        toValue: 1,
        duration: 220,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [animatedHeight, chevronAnim, leagues.length]);

  const close = useCallback(() => {
    setIsOpen(false);
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 220,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: false,
      }),
      Animated.timing(chevronAnim, {
        toValue: 0,
        duration: 180,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [animatedHeight, chevronAnim]);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  const toggleItem = useCallback(
    (id: string) => {
      const next = selectedIds.includes(id)
        ? selectedIds.filter(s => s !== id)
        : [...selectedIds, id];
      onChange(next);
    },
    [selectedIds, onChange],
  );

  const chevronRotate = chevronAnim.interpolate({
    inputRange: [0, 1],
    // Closed: rotate 180° so "up" chevron points down
    outputRange: ['180deg', '0deg'],
  });

  const displayCount = selectedIds.length;
  const triggerLabel =
    displayCount === 0
      ? '0 Leagues Selected'
      : `${displayCount} League${displayCount === 1 ? '' : 's'} Selected`;

  return (
    <View>
      {/* Label */}
      <Text style={styles.label}>
        {label}
        <Text style={styles.required}> *</Text>
      </Text>

      {/* Trigger row */}
      <TouchableOpacity
        onPress={toggle}
        activeOpacity={0.85}
        style={[styles.trigger, isOpen && styles.triggerOpen]}
        accessibilityRole="button"
        accessibilityLabel={triggerLabel}
        accessibilityState={{ expanded: isOpen }}
      >
        <View style={styles.triggerLeft}>
          <Text style={styles.sportIcon}>🏀</Text>
          <Text
            style={[styles.triggerText, displayCount === 0 && styles.placeholderText]}
            numberOfLines={1}
          >
            {triggerLabel}
          </Text>
        </View>

        <View style={styles.chevronWrap}>
          <Animated.View style={{ transform: [{ rotate: chevronRotate }] }}>
            <ChevronUpIcon size={20} color={tokens.border_inverse} />
          </Animated.View>
        </View>
      </TouchableOpacity>

      {/* Dropdown list */}
      <Animated.View
        style={[
          styles.dropdown,
          !isOpen && styles.dropdownClosed,
          { height: animatedHeight },
        ]}
      >
        {leagues.map(league => {
          const isSelected = selectedIds.includes(league.id);
          return (
            <TouchableOpacity
              key={league.id}
              onPress={() => toggleItem(league.id)}
              activeOpacity={0.75}
              style={[
                styles.item,
                isSelected && styles.itemSelected,
              ]}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: isSelected }}
              accessibilityLabel={league.name}
            >
              <Text style={[styles.leagueIcon, isSelected && styles.leagueRowSelected]}>
                ⊕
              </Text>
              <Text style={[styles.leagueName, isSelected && styles.leagueRowSelected]}>
                {league.name}
              </Text>
              {isSelected ? <Text style={styles.checkmark}>✓</Text> : null}
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: tokens.colors.gray[0],
    fontSize: 13,
    fontWeight: '500',
    marginBottom: tokens.spacing_8,
  },
  required: {
    color: tokens.colors.green[400],
  },
  trigger: {
    backgroundColor: tokens.bg_base,
    borderRadius: tokens.radius_8,
    paddingLeft: tokens.spacing10,
    paddingRight: tokens.spacing_8,
    paddingVertical: tokens.spacing_8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing_8,
    borderWidth: 1,
    borderColor: tokens.borderPrimary,
  },
  triggerOpen: {
    borderColor: tokens.border_inverse,
  },
  triggerLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing_8,
  },
  chevronWrap: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sportIcon: {
    fontSize: 18,
  },
  triggerText: {
    ...tokens.typographyStyles.paragraphSmall,
    flexShrink: 1,
    color: tokens.border_inverse,
  },
  placeholderText: {
    color: tokens.text_secondary,
  },
  dropdown: {
    backgroundColor: tokens.bg_base,
    marginTop: tokens.SPACING_6,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: tokens.borderPrimary,
    borderRadius: tokens.radius_8,
    paddingVertical: tokens.spacing4,
    paddingHorizontal: tokens.spacing4,
    ...tokens.selectDropdownShadow,
  },
  dropdownClosed: {
    marginTop: 0,
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
  },
  item: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing16,
    gap: tokens.SPACING_12,
    backgroundColor: 'transparent',
  },
  itemSelected: {
    backgroundColor: tokens.bg_base,
  },
  leagueIcon: {
    fontSize: 16,
    color: tokens.textPrimary,
  },
  leagueName: {
    flex: 1,
    color: tokens.textPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
  leagueRowSelected: {
    color: tokens.border_inverse,
  },
  checkmark: {
    color: tokens.border_inverse,
    fontSize: 16,
    fontWeight: '700',
  },
});
