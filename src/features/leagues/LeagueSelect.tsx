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
    const targetHeight = ITEM_HEIGHT * leagues.length;

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
    ]).start(() => setIsOpen(false));
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
          <Text style={[styles.triggerText, displayCount === 0 && styles.placeholderText]}>
            {triggerLabel}
          </Text>
        </View>

        {/* Chevron */}
        <Animated.View style={{ transform: [{ rotate: chevronRotate }] }}>
          <ChevronUpIcon size={20} color={tokens.colors.gray[0]} />
        </Animated.View>
      </TouchableOpacity>

      {/* Dropdown list */}
      <Animated.View
        style={[
          styles.dropdown,
          !isOpen && styles.dropdownClosed,
          { height: animatedHeight },
        ]}
      >
        <View style={styles.divider} />
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
              <Text style={styles.leagueIcon}>⊕</Text>
              <Text style={styles.leagueName}>{league.name}</Text>
              {isSelected && <Text style={styles.checkmark}>✓</Text>}
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
    height: ITEM_HEIGHT,
    paddingHorizontal: tokens.spacing16,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: tokens.colors.slate[800],
  },
  triggerOpen: {
    borderColor: tokens.colors.gray[0],
  },
  triggerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing10,
  },
  sportIcon: {
    fontSize: 18,
  },
  triggerText: {
    color: tokens.colors.gray[0],
    ...tokens.typographyStyles.paragraphSmall,
  },
  placeholderText: {
    color: tokens.colors.gray[0],
  },
  dropdown: {
    backgroundColor: tokens.bg_base,
    marginTop: tokens.SPACING_6,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: tokens.colors.slate[800],
    borderRadius: tokens.radius_8,
    ...tokens.selectDropdownShadow,
  },
  dropdownClosed: {
    marginTop: 0,
    borderWidth: 0,
  },
  divider: {
    height: 1,
    backgroundColor: tokens.colors.slate[800],
    marginHorizontal: 0,
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
    backgroundColor: tokens.colors.alpha.green.alpha10,
  },
  leagueIcon: {
    fontSize: 16,
    color: tokens.colors.gray[0],
  },
  leagueName: {
    flex: 1,
    color: tokens.colors.gray[0],
    fontSize: 14,
    fontWeight: '500',
  },
  checkmark: {
    color: tokens.colors.gray[0],
    fontSize: 16,
    fontWeight: '700',
  },
});
