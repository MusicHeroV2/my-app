import { Chat } from "./Components/ChatComponents/Chat";
import Login from "./Components/LoginPage";
import { LOGIN_ROUTE, CHAT_ROUTE } from "./utils/consts";

export const guestRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const userRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
