import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    background: "#65b6c2",
                    color: "#fff"
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#65b6c2"
                }
            }
        }
    }
})

export default theme;