import { HorizontalMenu } from "@features/HorizontalMenu/ui";

import "../src/shared/styles/global.scss";
import { Navigation } from "@widgets/Navigation/ui";
import { ChatWindow } from "@widgets/ChatWindow/ui";

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <ChatWindow />
    </div>
  );
};

export default MainPage;
