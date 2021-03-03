import { extendTheme } from "@chakra-ui/react"

interface config {
  initialColorMode: any
  useSystemColorMode: boolean
}

const config: config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({ config })
export default theme