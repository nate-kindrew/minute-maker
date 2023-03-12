import { useState } from "react";
import { Grid, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { IndeterminateCheckBox } from "@mui/icons-material";
import members from "../static_data/members";

const membersOnly = members.filter(member => member.isMember);


export default function Attendance() {
    const [present, setPresent] = useState([]);
	const [absent, setAbsent] = useState([]);

	const onPresentChange = (event) => {
		var temp = [...present];
		if(event.target.checked){
			temp.push(event.target.name)
			
		} else {
			temp = temp.filter(member => member !== event.target.name);
		}
		setPresent(temp);
	}

	// const recalcAbsent = () => {
	// 	setAbsent(membersOnly.filter(member => present.indexOf(member.name) < 0));
	// }

    return (
        <Grid container spacing={2}>
            <Grid item container md={6} direction="column">
                {/* <Grid item xs={3}> */}
                    <Typography variant="h5">Present:</Typography>
                {/* </Grid>
                <Grid item xs={9}> */}
                    { membersOnly.map((member, i) => (
                        <div key={i}>
                            <FormControlLabel
                                label={member.name}
                                control={<Checkbox onChange={onPresentChange} name={member.name} />}
                            />
                        </div>
                    ))}
                {/* </Grid>  */}
            </Grid>
            <Grid item container md={6} direction="column">
                {/* <Grid item xs={3}> */}
                    <Typography variant="h5">Absent:</Typography>
                {/* </Grid> */}
                {/* <Grid item xs={9}> */}
                    { absent.map((member, i) => (
                        <div key={i}>
                            <FormControlLabel label={member.name} 
                                control={<IndeterminateCheckBox sx={{ padding: "9px" }} />}
                            />
                            {/* <Typography variant="body1">{member.name}</Typography> */}
                        </div>
                    ))}
                {/* </Grid> */}
            </Grid>
        </Grid>
    )
}