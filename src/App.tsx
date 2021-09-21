import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";
import GlobalProvider from "./context/GlobalProvider";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <GlobalProvider>
        <SideBar />
        <Content />
      </GlobalProvider>
    </div>
  );
}
