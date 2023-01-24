import React, { useEffect, useState } from "react";

import { parseTime, stringifyTime } from "@routine-support/utils";
import { Typography } from "apps/mobile/src/components/Typography";
import { Theme } from "apps/mobile/src/theme";
import { getTimeInHours } from "apps/mobile/src/utils/getTimeInHours";
import moment from "moment";
import { StyleSheet, View } from "react-native";

interface CurrentTimeLineProps {
  rowHeight: number;
  columnsGap: number;
  timeColumnWidth: number;
}

export const CurrentTimeLine: React.FC<CurrentTimeLineProps> = ({
  rowHeight,
  timeColumnWidth,
  columnsGap,
}) => {
  const [currentTime, setCurrentTime] = useState(stringifyTime(moment()));
  const timeInHours = getTimeInHours(parseTime(currentTime));
  const offsetTop = timeInHours * rowHeight + (timeInHours % 1);

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
        style={[
          styles.currentTimeLine,
          {
            top: offsetTop,
            left: timeColumnWidth + columnsGap - 4,
          },
        ]}
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
    backgroundColor: Theme.palette.primary.main,
    position: "absolute",
    borderRadius: Theme.borderRadius.s,
    zIndex: 4,
  },
  currentTimeLine: {
    zIndex: 4,
    height: 20,
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: Theme.palette.primary.main,
    borderRadius: 5,
  },
  line: {
    height: 2,
    width: "100%",
    backgroundColor: Theme.palette.primary.main,
    marginLeft: -4,
  },
});
