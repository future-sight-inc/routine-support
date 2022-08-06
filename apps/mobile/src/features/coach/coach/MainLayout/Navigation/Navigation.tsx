import React, { ReactNode } from "react";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Coach } from "@routine-support/domains";
import { Button } from "apps/mobile/src/components/Button";
import { Modal } from "apps/mobile/src/components/Modal";
import { Typography } from "apps/mobile/src/components/Typography";
import { LinkService } from "apps/mobile/src/services/LinkService";
import { MobileTheme } from "apps/mobile/src/theme";
import { StyleSheet, View } from "react-native";

import { Link } from "./components/Link";

interface NavigationProps {
  coach: Coach;
  pressElement: ReactNode;
  onLogout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ pressElement, coach, onLogout }) => {
  return (
    <Modal
      pressElement={pressElement}
      title="Меню"
      footer={<Button text="Выйти" fullWidth onPress={onLogout} />}
      footerStyle={styles.footer}
    >
      <View style={styles.wrapper}>
        <View style={styles.userWrapper}>
          <View style={styles.userIcon} />
          <View style={styles.userNameWrapper}>
            <Typography variant="caption4Normal" style={styles.userName}>
              {coach.name}
            </Typography>
            <MaterialIcons name="edit" size={14} />
          </View>
          <Typography variant="text2Bold" color="secondary">
            {coach.email}
          </Typography>
        </View>
        <View style={styles.linksWrapper}>
          <Link
            text="Календарь"
            path={LinkService.coach.day()}
            iconName="calendar-month"
            IconComponent={MaterialCommunityIcons}
          />
          <Link
            text="Дети"
            path={LinkService.coach.students()}
            iconName="people-alt"
            IconComponent={MaterialIcons}
          />
          <Link
            text="Уведомления"
            path={LinkService.coach.notifications()}
            iconName="bell"
            IconComponent={MaterialCommunityIcons}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
  userWrapper: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 16,
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "grey",
  },
  userNameWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    marginRight: 4,
  },
  linksWrapper: {
    marginTop: 16,
  },
  linkWrapper: {
    height: 30,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  linkIconWrapper: {
    width: 30,
    height: 30,
    backgroundColor: MobileTheme.palette.secondary.main,
    borderRadius: MobileTheme.borderRadius.s,
    marginRight: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    marginTop: "auto",
  },
  footer: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
});
