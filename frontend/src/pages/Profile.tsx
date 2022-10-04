import { Container } from "@mui/system";
import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// const Item = styled(Paper)(({ theme }) => ({
// 	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// 	...theme.typography.body2,
// 	padding: theme.spacing(1),
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// }));
const bull = (
	<Box
		component='span'
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);
const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);
const Profile = () => {
	return (
		<div>
			<Header />
			<Container sx={{ marginBottom: 5 }}>
				<h1>John Costoco</h1>
				<p>costco@gmail.com</p>
				<Box sx={{ flexGrow: 1, }}>
					<Grid container spacing={2}>
            <Grid item xs={2} md={2}>
              <TwitterIcon/>
						</Grid>
            <Grid item xs={2} md={2}>
              <FacebookIcon/>
						</Grid>
            <Grid item xs={2} md={2}>
              <InstagramIcon/>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ flexGrow: 1, marginTop: 5 }}>
					<Grid container spacing={2}>
						<Grid item xs={4} md={4}>
							<div>
								<h1>4.3</h1>
								<p>stars</p>
							</div>
						</Grid>
						<Grid item xs={4} md={4}>
							<div>
								<h1>30</h1>
								<p>users</p>
							</div>
						</Grid>
						<Grid item xs={4} md={4}>
							<div>
								<h1>5</h1>
								<p>followers</p>
							</div>
						</Grid>
					</Grid>
				</Box>
				<h2 style={{ marginBottom: "10px" }}>Next schdule</h2>
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>
				</Swiper>
				<h2 style={{ marginBottom: "10px" }}>My review</h2>
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className='mySwiper'
				>
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>{" "}
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>{" "}
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>{" "}
					<SwiperSlide>
						{" "}
						<Box sx={{ minWidth: 275 }}>
							<Card variant='outlined'>{card}</Card>
						</Box>
					</SwiperSlide>
				</Swiper>
			</Container>
		</div>
	);
};

export default Profile;
