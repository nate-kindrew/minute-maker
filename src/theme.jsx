import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#65b6c2"
        }
    },
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
                    backgroundColor: "#65b6c2",
                    color: "#fff"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    color: "#fff"
                }
            }
        }
    }
})

export default theme;