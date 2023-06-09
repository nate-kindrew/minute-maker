import { Grid, TextField, FormControlLabel, Radio, RadioGroup, Hidden } from "@mui/material";
import VotingMemberSelect from "./votingmemberselect";
import { BlueContainer, GridWrapper } from "../atoms";


export default function Motion ({ action }) {
    return (
        <GridWrapper>
            <BlueContainer container spacing={1} alignItems="flex-end">
                <Grid item xs={12} sm={5} lg={3}>
                    <VotingMemberSelect fieldName="first" />
                </Grid>
                <Grid item xs={12} sm={7} lg={9}>
                    made a motion to {action}.
                </Grid>
                <Grid item xs={12} sm={5} lg={3}>
                    <VotingMemberSelect fieldName="second" />
                </Grid>
                <Grid item xs={12} sm={7} lg={9}>
                    seconded.
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        name="notes"
                        multiline
                        label="Notes"
                        rows={4}
                        fullWidth
                    />
                </Grid>
                {/* <Grid item sm={3}>
                    <Typography variant="body2">In Favor</Typography>
                </Grid> */}
                    <Grid container item xs={6} sm={3} spacing={2}>
                        <Grid item sm={12}>
                            <TextField
                                name="inFavor"
                                fullWidth
                                size="small"
                                label="In favor"
                                inputProps={{
                                    type: "number"
                                }}
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <TextField
                                name="opposed"
                                fullWidth
                                size="small"
                                label="Opposed"
                                inputProps={{
                                    type: "number"
                                }}
                            />
                        </Grid>

                    </Grid>
                    <Hidden smDown>
                        <Grid item sm={1} />
                    </Hidden>
                    <Grid item xs={6} sm={8}>
                        <RadioGroup name="allInFavor">
                            <Grid container spacing={2}>
                                    <Grid item sm={12}>
                                        <FormControlLabel
                                            label="All in favor"
                                            name="allInFavor"
                                            value="allInFavor"
                                            control={<Radio />}
                                        />
                                    </Grid>
                                    <Grid item sm={12}>
                                        <FormControlLabel
                                            label="All opposed"
                                            name="allOpposed"
                                            value="allOpposed"
                                            control={<Radio />}
                                        />
                                    </Grid>
                                
                            </Grid>
                        </RadioGroup>
                    </Grid>
                {/* </Grid> */}
                {/* <Grid item sm={3}>
                    <Typography variant="body2">Opposed</Typography>
                </Grid> */}
                
                <Grid item sm={10}>
                    
                </Grid>
            </BlueContainer>
        </GridWrapper>
    )
}