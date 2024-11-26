import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Button } from "@consta/uikit/Button";
import { Badge } from "@consta/uikit/Badge";

const App = () => (
  <Theme preset={presetGpnDefault}>
    <Button label="Кнопка" />,
    <Badge status="warning" label="Бэдж" />
  </Theme>
);
export default App;
