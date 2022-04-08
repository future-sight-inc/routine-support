import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { storiesOf } from "@storybook/react";

import { NavigationLink } from "./NavigationLink";

storiesOf("Components/NavigationLink", module).add("Active", () => (
  <NavigationLink isActive icon={<CalendarTodayIcon />}>
    Calendar
  </NavigationLink>
));
storiesOf("Components/NavigationLink", module).add("Inactive", () => (
  <NavigationLink icon={<CalendarTodayIcon />}>Calendar</NavigationLink>
));
storiesOf("Components/NavigationLink", module).add("Without icon", () => (
  <NavigationLink>Link</NavigationLink>
));
