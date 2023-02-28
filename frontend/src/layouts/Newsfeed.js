const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "layouts/Footer";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Card from "@mui/material/Card";
import { useLocation } from "react-router-dom";
import "styles/style.css"

import Grid from "@mui/material/Grid";

import InputEmoji from 'react-input-emoji';
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";


function Newsfeed() {

  const [ text, setText ] = useState('')

      function handleOnEnter (text) {
        console.log('enter', text)
      }
      const handleEmoji=()=>{
        console.log(text)
      }

  const [news, setNews] = useState({});
  const url = new URL('http://127.0.0.1:4000/newsfeed/title');

  const location = useLocation();
  const newstitle = location.state;
  console.log(newstitle);

  const params = {
    title: newstitle
  }
  url.search = new URLSearchParams(params).toString();

  useEffect(() => {
    axios.get(url).then(res => {
      //console.log(res)
      setNews(res.data);
    })

  }, []);
  console.log(news)

  const [com, setComment] = useState('');
  console.log(com)

  var date = new Date();
  var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  console.log(today);

  let data = {
    title: newstitle,
    username: localStorage.getItem('email'),
    comment: text
  }

  console.log(data);
  const addComment = () => {
    if (text === "") {
      window.alert("Please give comment to submit!");
    }
    else {
      fetch('http://localhost:4000/comments/create', {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      }).then(response => response.text())
        .then((text) => {
          if (text === "added") {
            window.alert("Comment Added Successfully!!!");
            window.location.reload(true);

          }
          else {
            window.alert("Comment addition failed, please try again !")
          }

        });
    }

  }

  const [commentlist, setCommentList] = useState([])
  const url1 = new URL('http://127.0.0.1:4000/comments/allbytitle');
  url1.search = new URLSearchParams(params).toString();
  useEffect(() => {
    axios.get(url1).then(res => {
      //console.log(res)
      setCommentList(res.data);
    })

  }, []);
  console.log(commentlist);

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
                <Link to="/dashboard" color="#343B5C" mt={2} mb={3}>
                    <SoftTypography variant="body2" fontWeight="bold" gutterBottom mt={3} >
                        <Icon>home</Icon>/Home
                    </SoftTypography></Link>
      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <h2>{news.title}</h2>
      </SoftTypography>

      <h6>{news.dateCreated}</h6>
      <br />
      {/* {news.map(n=> */}
      <img src={news.img} className="product-image" key="forex-card-image" />
      <SoftTypography variant="body2" fontWeight="bold" gutterBottom >
        <p>{news.subTitle}</p>
      </SoftTypography>
      <hr />
      <br />
      <SoftTypography variant="body2" gutterBottom >
        <p>{news.content}</p>
      </SoftTypography>

      {/* )} */}
      <br />

      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Comment
            </SoftTypography>
          </SoftBox>
          <SoftBox display="flex" alignItems="center">
            <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handleOnEnter}
              placeholder="Comment here ..."
            />
            {/* <SoftInput type="text" placeholder="Comment here..." onChange={(e) => setComment(e.target.value)} /> */}
            <SoftButton variant="gradient" id="submit-comment" color="info" onClick={addComment}>
              Submit
            </SoftButton>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <div id="news-card-div">
        <SoftBox p={3} key="main-news">
          <Grid container spacing={3}>
            {commentlist.map(c =>
              <Grid item xs={12} lg={12} key="main-news-grid-item">
                <SoftBox display="flex" flexDirection="column" height="100%">
                  <SoftBox pt={1} mb={0.5} display="flex">
                    <SoftTypography variant="body2" color="#344767" gutterBottom >
                      {c.username}--{c.createdDate}
                      <SoftTypography variant="body2" color="#344767">
                        Comment: {c.comment}
                      </SoftTypography>

                    </SoftTypography>
                  </SoftBox>

                </SoftBox >
              </Grid>
            )}
          </Grid>
        </SoftBox>

      </div>

      <br />
      <br />
      <br />
      <Footer />
    </DashboardLayout>
  )
}
export default Newsfeed;