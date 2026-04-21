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
import { border, fontSize, leagueSelect, spacing, text } from '../../tokens';
import { typographyStyles } from '../../tokens/tokens';

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

const ITEM_HEIGHT = leagueSelect.item.height;

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
          <ChevronUpIcon size={20} color={text.primary} />
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
    color: text.primary,
    fontSize: fontSize[13],
    fontWeight: '500',
    marginBottom: spacing[8],
  },
  required: {
    color: text.accent,
  },
  trigger: {
    backgroundColor: leagueSelect.background,
    borderRadius: leagueSelect.borderRadius,
    height: leagueSelect.height,
    paddingHorizontal: leagueSelect.paddingHorizontal,
    paddingVertical: leagueSelect.paddingVertical,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: border.subtle,
  },
  triggerOpen: {
    borderColor: text.primary,
  },
  triggerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[10],
  },
  sportIcon: {
    fontSize: fontSize[18],
  },
  triggerText: {
    color: leagueSelect.text,
    ...typographyStyles.paragraphSmall,
  },
  placeholderText: {
    color: leagueSelect.placeholderText,
  },
  dropdown: {
    backgroundColor: leagueSelect.background,
    marginTop: spacing[6],
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: border.subtle,
    borderRadius: leagueSelect.borderRadius,
    shadowColor: leagueSelect.shadowColor,
    shadowOffset: leagueSelect.shadowOffset,
    shadowOpacity: leagueSelect.shadowOpacity,
    shadowRadius: leagueSelect.shadowRadius,
    elevation: leagueSelect.elevation,
  },
  dropdownClosed: {
    marginTop: 0,
    borderWidth: 0,
  },
  divider: {
    height: 1,
    backgroundColor: border.subtle,
    marginHorizontal: 0,
  },
  item: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: leagueSelect.item.paddingHorizontal,
    gap: spacing[12],
    backgroundColor: leagueSelect.item.defaultBackground,
  },
  itemSelected: {
    backgroundColor: leagueSelect.item.selectedBackground,
  },
  leagueIcon: {
    fontSize: fontSize[16],
    color: text.primary,
  },
  leagueName: {
    flex: 1,
    color: leagueSelect.item.text,
    fontSize: leagueSelect.item.fontSize,
    fontWeight: leagueSelect.item.fontWeight,
  },
  checkmark: {
    color: text.primary,
    fontSize: fontSize[16],
    fontWeight: '700',
  },
});
