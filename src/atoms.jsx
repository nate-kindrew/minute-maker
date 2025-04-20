import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const BlueContainer = styled(Grid)(({ theme }) => ({
    borderColor: "#65b6c2",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "4px",
    padding: "16px",
    position: "relative"
}));

export const GridWrapper = ({ children, ...props}) => {
    return (
        <Box
            padding="24px 16px 0"
            margin="16px 0"
            {...props}
        >
            {children}
        </Box>
    )
}

