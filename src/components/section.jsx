import { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse, CardHeader, IconButton } from "@mui/material";
import { CardActions } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useEffect } from "react";

export default function Section({ title, children, toggleSection, name, next, current }) {
    const [open, setOpen] = useState(name == current);

    const goNext = () => {
        toggleSection(next);
    }

    const toggle = () => {
        setOpen(!open);
    }

    useEffect(() => {
        setOpen(name == current);
    }, [current]);
    return (
        <Card sx={{ marginBottom: "24px" }}>
            <CardHeader
                title={<Typography variant="overline">{title}</Typography>}
                action={<IconButton color="inherit" onClick={toggle}>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>}
            />
            <Collapse in={open}>
                <CardContent>
                    {children}
                </CardContent>
            </Collapse>
            { open && 
                <CardActions>
                    <Button color="success" onClick={goNext}>Next</Button>
                </CardActions>
            }
        </Card>
    )
}