import React, { useEffect, useState } from "react";

import { parseTime, stringifyTime } from "@routine-support/utils";
import { Typography } from "apps/mobile/src/components/Typography";
import { MobileTheme } from "apps/mobile/src/theme";
import moment from "moment";
import { StyleSheet, View } from "react-native";

import { getTimeInHours } from "../../utils";

interface CurrentTimeLineProps {
  rowHeight: number;
  timeColumnWidth: number;
}

export const CurrentTimeLine: React.FC<CurrentTimeLineProps> = ({ rowHeight, timeColumnWidth }) => {
  const [currentTime, setCurrentTime] = useState(stringifyTime(moment()));
  const offsetTop = getTimeInHours(parseTime(currentTime)) * rowHeight - 10;

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(stringifyTime(moment())), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <View style={{ ...styles.currentTime, top: offsetTop }}>
        <Typography variant="text3" color="white">
          {currentTime}
        </Typography>
      </View>
      <View
        style={{
          ...styles.currentTimeLine,
          top: offsetTop,
          left: timeColumnWidth + 18,
        }}
      >
        <View style={styles.circle} />
        <View style={styles.line} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  currentTime: {
    width: 40,
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MobileTheme.palette.primary.main,
    position: "absolute",
    borderRadius: MobileTheme.borderRadius.s,
  },
  currentTimeLine: {
    height: 20,
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: MobileTheme.palette.primary.main,
    borderRadius: 5,
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: MobileTheme.palette.primary.main,
    marginLeft: -4,
  },
});
