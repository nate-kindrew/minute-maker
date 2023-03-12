import { useState } from "react";
import { AppBar, Container, Grid, IconButton, Typography, Toolbar, Hidden, TextField, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Timeline, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator, TimelineDot, TimelineOppositeContent } from "@mui/lab";
// import { GridWrapper } from "./atoms";
import Attendance from "./sections/attendance";
import ReportReview from "./sections/reportreview";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.jsx";
import Section from "./components/section";
import Moment from "moment";


function Meeting() {
	var today = new Date();
	const [title, setTitle] = useState(today.getMonth() + " " + today.getFullYear() + " Minutes");
	const [currentSection, setCurrentSection] = useState("attendance");
	const [timeline, setTimeline] = useState([]);

	const nextSection = (which) => {
		var newTimeline = [...timeline];
		newTimeline.push({ name: which, time: Moment().format('h:mm a')});
		setTimeline(newTimeline);
		setCurrentSection(which);
	}

	return (
		<>
            <Box margin="16px 0">
                <Grid container spacing={2}>
                    <Grid item sm={9}>
                        <TextField
                            name="title"
                            label="Meeting Title"
                            value={title}
                            variant="standard"
                            onBlur={evt => setTitle(evt.target.value)}
                        />
                    </Grid>
                    <Grid item sm={3}>
                        <Typography variant="h5">{new Date().toDateString()}</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Section 
                        title="Attendance" 
                        name="attendance" 
                        next="treasurer"
                        current={currentSection}
                        toggleSection={nextSection}
                    >
                        <Attendance />
                    </Section>
                    <Section 
                        title="Treasurer's Report" 
                        name="treasurer"
                        next="secretary"
                        current={currentSection}
                        toggleSection={nextSection}
                    >
                        <ReportReview title="Treasurer's Report" />
                    </Section>
                    <Section 
                        title="Secretary's Report"
                        name="secretary"
                        next="oldBusiness"
                        current={currentSection}
                        toggleSection={nextSection}
                    >
                        <ReportReview title="Secretary's Report" />
                    </Section>

                    <Typography variant="h4">Old Business</Typography>

                    <Typography variant="h4">New Business</Typography>
                </Grid>
                <Hidden mdDown>
                    <Grid item md={4}>
                        <Timeline>
                            <TimelineItem>
                                <TimelineOppositeContent color="primary">6:30pm</TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Call to Order</TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Hidden>
            </Grid>
		</>
	);
}

export default Meeting;
