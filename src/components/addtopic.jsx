import { useState } from "react";
import { Grid, Button, TextField } from "@mui/material"

export default function AddTopic({ onSubmit }) {
    const [topic, setTopic] = useState("");

    const addTopic = () => {
        onSubmit(topic);
        setTopic("");
    }

    return (
        <Grid container spacing={2} className="add-topic-container">
            <Grid item sm={9}>
                <TextField 
                    value={topic} 
                    variant="standard"
                    fullWidth
                    onChange={event => setTopic(event.target.value)} 
                    label="New Topic" 
                />
            </Grid>
            <Grid item sm={3}>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={addTopic}
                >Add Topic</Button>
            </Grid>
        </Grid>
    )
}