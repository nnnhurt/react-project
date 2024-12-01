import {Theme, presetGpnDefault} from "@consta/uikit/Theme"

const DefaultLayout = ({children}) => {
    return (
        <Theme preset={presetGpnDefault}>{children}</Theme>
    )
}
export default DefaultLayout