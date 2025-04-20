import { useState } from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import members from "../static_data/members";

const membersOnly = members.filter(member => member.isMember);

export default function Attendance() {
    const [present, setPresent] = useState([]);

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
        <>
            <Typography variant="h5">Present:</Typography>
            { membersOnly.map((member, i) => (
                <div key={i}>
                    <FormControlLabel
                        label={member.name}
                        control={<Checkbox onChange={onPresentChange} name={member.name} />}
                    />
                </div>
            ))}
        </>
    )
}