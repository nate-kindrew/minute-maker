import { TextField, ListItem, Avatar, Tooltip, Button } from "@mui/material";
import members from "../static_data/members";

export default function VotingMemberSelect({ fieldName }) {
    return (
        <div style={{display: "flex"}}>
            {members.filter(m => m.canVote).map(member =>
                <Tooltip title={member.name}> 
                    <Button 
                        key={member.justFirst}
                        variant="outlined"
                        >
                            {member.name.substring(0, 1).toUpperCase()}
                    </Button>
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