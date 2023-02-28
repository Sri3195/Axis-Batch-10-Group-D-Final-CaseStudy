
import Grid from "@mui/material/Grid";


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "styles/style.css"

function Mainnews() {

    const [news, setNews] = useState([])

    const url = new URL('http://127.0.0.1:4000/newsfeed/all');



    useEffect(() => {

        axios.get(url).then(res => {
            //console.log(res)
            setNews(res.data);
        })
    }, []);
    console.log(news);

    return (
        <>
             <SoftTypography variant="h5" fontWeight="bold" gutterBottom id="news" mb={2}>
                    <u>News/Updates</u>
            </SoftTypography>
            
            <div id="news-card-div">
                    <SoftBox p={3} key="main-news">
                        <Grid container spacing={3}>
                            {news.map(n =>
                                <Grid item xs={12} lg={12} key="main-news-grid-item">
                                    <SoftBox display="flex" flexDirection="column" height="100%">
                                        <SoftBox pt={1} mb={0.5} display="flex">
                                            <SoftTypography variant="body2" mr={10} color="#344767" fontWeight="medium" >
                                                <Link style={{ color: "#344767" }} to="/news-feed" state={n.title}>{n.title}</Link>
                                            </SoftTypography>
                                            <SoftBox>
                                                <SoftTypography variant="body2" ml={20} color="#344767">
                                                    {n.dateCreated}
                                                </SoftTypography>

                                            </SoftBox>
                                        </SoftBox>
                                        <hr />
                                    </SoftBox >
                                </Grid>
                            )}
                        </Grid>
                    </SoftBox>

                </div>
             </>

    )
}

export default Mainnews;