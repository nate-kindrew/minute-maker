import { useState } from "react";
import { TextField, ListItem, Avatar, Tooltip, Button } from "@mui/material";
import members from "../static_data/members";

export default function VotingMemberSelect({ fieldName }) {
    const [selectedMember, setSelectedMember] = useState(null);
    return (
        <div style={{display: "flex"}}>
            {members.filter(m => m.canVote).map(member =>
                <Tooltip 
                    title={member.name} 
                    key={member.justFirst}
                > 
                    <Avatar 
                        // component={Button}
                        
                        variant="outlined"
                        onClick={() => setSelectedMember(member.justFirst)}
                        classes={{
                            root: "Avatar-button",
                            colorDefault: selectedMember == member.justFirst ? "Avatar-selected" : ""
                        }}
                        >
                            {member.name.substring(0, 1).toUpperCase()}
                    </Avatar>
                </Tooltip> 
            )}            
        </div>
        // <TextField
        //     select
        //     name={fieldName}
        //     fullWidth
        //     label="Select member"
        //     size="small"
        //     variant="standard"
        // >
        //     {members.filter(m => m.canVote).map(member => (
        //         <ListItem key={member.justFirst}>{member.justFirst}</ListItem>
        //     ))}
        // </TextField>
    )
}