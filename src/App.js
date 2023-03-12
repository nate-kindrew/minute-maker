import { useState } from "react";
import { AppBar, Container, IconButton, Typography, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.jsx";
import Meeting from "./meeting";


function App() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							sx={{ mr: 2 }}
						>
							<Menu />
						</IconButton>
						<Typography variant="h6">Minute Maker</Typography>
					</Toolbar>
				</AppBar>
				<Meeting />
			</Container>
		</ThemeProvider>
	);
}

export default App;
