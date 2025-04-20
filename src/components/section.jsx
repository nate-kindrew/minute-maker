import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button, Collapse, CardHeader, IconButton } from "@mui/material";
import { CardActions } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import Motion from "../components/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Section({ title, children, toggleSection, name, next, current, hasMotion }) {
    const [open, setOpen] = useState(name === current);
    const [showMotion, setShowMotion] = useState(false);

    const goNext = () => {
        toggleSection(next);
    }

    const toggle = () => {
        setOpen(!open);
    }

    useEffect(() => {
        setOpen(name === current);
    }, [current, name]);
    return (
        <Card className="section">
            <CardHeader
                title={<Typography variant="overline">{title}</Typography>}
                action={<IconButton color="inherit" onClick={toggle}>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>}
            />
            <Collapse in={open}>
                <CardContent>
                    {children}
                    {showMotion && <Motion onClose={() => setShowMotion(false)} />}
                </CardContent>
            </Collapse>
            { open &&
                <CardActions>
                    { next && <Button color="success" onClick={goNext}>Next</Button> }
                    { hasMotion && !showMotion && 
                        <Button color="success" onClick={() => { setShowMotion(true) }}>
                            <FontAwesomeIcon icon={faPlus} className="mr-1" /> Motion 
                        </Button>
                    }
                </CardActions>
            }
        </Card>
    )
}