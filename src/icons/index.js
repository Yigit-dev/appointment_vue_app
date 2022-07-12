import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCalendarCheck,
  faHouse,
  faMoon,
  faPlus,
  faUser,
  faSun,
  faBell,
  faAngleDown,
  faMagnifyingGlass,
  faClock,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default () => {
  library.add(
    faPlus,
    faHouse,
    faCalendarCheck,
    faUser,
    faMoon,
    faSun,
    faBell,
    faAngleDown,
    faMagnifyingGlass,
    faClock,
    faPen,
    faTrash
  );
};
