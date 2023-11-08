import classes from "./Footer.module.css";

import { Box, Container, Typography, Divider } from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const footerMainStyles = {
    backgroundColor: "sailorBlue.main",
    color: "white.main",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
};

const logoStyles = {
    fontSize: 25,
    marginLeft: "0.5rem",
    marginBottom: "-0.4rem",
};

const socialIconsStyles = {
    display: "flex",
    justifyContent: "center",
};

function Footer() {
    return (
        <>
            <div className={classes.footer}>
                <Box sx={{ ...footerMainStyles }}>
                    <Container sx={{ fontSize: 20 }} maxWidth="xs" gutterBottom>
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                            Eagle Vision
                            <VisibilityRoundedIcon sx={{ ...logoStyles }} />
                        </Typography>
                        <Typography variant="subtitle2">
                            Redefining Security!
                        </Typography>
                    </Container>

                    <Divider orientation="vertical" flexItem color="white" />

                    <Container maxWidth="xs">
                        <Typography
                            align="center"
                            sx={{ fontSize: 20 }}
                            gutterBottom>
                            Contacts
                        </Typography>
                        <Typography>
                            <h4>Project Team Name - Does Not Matter</h4>
                            Member 1 - Niraj Koli
                        </Typography>
                        <Typography>
                            Member 2 - Vaibhav Pawar
                        </Typography>
                    </Container>

                    <Divider orientation="vertical" flexItem color="white" />

                    <Container maxWidth="xs">
                        <Typography sx={{ ...socialIconsStyles }}>
                            <FacebookIcon fontSize="large" sx={{ margin: 1 }} />
                            <InstagramIcon
                                fontSize="large"
                                sx={{ margin: 1 }}
                            />
                            <TwitterIcon fontSize="large" sx={{ margin: 1 }} />
                            <LinkedInIcon fontSize="large" sx={{ margin: 1 }} />
                        </Typography>
                    </Container>
                </Box>
            </div>
        </>
    );
}

export default Footer;
