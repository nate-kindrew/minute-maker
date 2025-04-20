import { useState } from "react";
import { Grid, Typography, Hidden, TextField, Box, Button } from "@mui/material";
import { Timeline, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator, TimelineDot, TimelineOppositeContent } from "@mui/lab";
import Attendance from "./sections/attendance";
import ReportReview from "./sections/reportreview";
import Section from "./components/section";
import AddTopic from "./components/addtopic";
import Moment from "moment";


function Meeting() {
	var today = new Date();
	const [title, setTitle] = useState(today.getMonth() + " " + today.getFullYear() + " Minutes");
	const [currentSection, setCurrentSection] = useState("attendance");
	const [timeline, setTimeline] = useState([]);
    const [oldBusinessTopics, setOldBusinessTopics] = useState([]);
    const [newBusinessTopics, setNewBusinessTopics] = useState([]);
    const [attendance, setAttendance] = useState([]);

	const nextSection = (which) => {
		var newTimeline = [...timeline];
		newTimeline.push({ name: which, time: Moment().format('h:mm a')});
		setTimeline(newTimeline);
		setCurrentSection(which);
	}

    const addOldBusinessTopic = (topic) => {
        setOldBusinessTopics(prev => [...prev, topic ]);
        setCurrentSection(topic);
    }

    const addNewBusinessTopic = (topic) => {
        setNewBusinessTopics(prev => [...prev, topic ]);
        setCurrentSection(topic);
    }

	return (
		<form>
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
                        <Attendance setAttendance={setAttendance} />
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

                    <Typography variant="h4" className="mt-4">Old Business</Typography>
                    {oldBusinessTopics.map(topic => (
                        <Section 
                            title={topic} 
                            name={topic} 
                            current={currentSection}
                            hasMotion
                        >
                            <TextField
                                name="notes"
                                multiline
                                label="Notes"
                                rows={4}
                                fullWidth
                            />
                        </Section>
                    ))}
                    <AddTopic onSubmit={addOldBusinessTopic} />

                    <Typography variant="h4" className="mt-4">New Business</Typography>
                    {newBusinessTopics.map(topic => (
                        <Section 
                            title={topic} 
                            name={topic} 
                            current={currentSection}
                            hasMotion
                        >
                            <TextField
                                name="notes"
                                multiline
                                label="Notes"
                                rows={4}
                                fullWidth
                            />
                        </Section>
                    ))}
                    <AddTopic onSubmit={addNewBusinessTopic} />
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
            <Button type="submit">Submit</Button>
		</form>
	);
}

export default Meeting;
