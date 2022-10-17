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
import BaseLayout from "../layout/BaseLayout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { fontSize } from "@mui/joy/styles/styleFunctionSx";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// const Item = styled(Paper)(({ theme }) => ({
// 	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// 	...theme.typography.body2,
// 	padding: theme.spacing(1),
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// }));
const theme = createTheme({
	typography: {
		fontSize:50,
		h5: { fontSize: '1.2rem' },
	},
});

// const theme = createTheme();

// theme.typography.h5 = {
// 	fontSize: "2rem",
// 	"@media (min-width:600px)": {
// 		fontSize: "1.5rem",
// 	},
// 	[theme.breakpoints.up("md")]: {
// 		fontSize: "2rem",
// 	},
// };
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

			{/* <p>yes</p> */}
			<CardContent>
				<Typography
					variant='h5'
					// component='h5'
					// sx={{ fontSize: { xs: 15, sm: 25, md: 25 } }}
					>
					Sep.21 Fri 12'00
				</Typography>
				<Grid container spacing={2} alignItems='center' sx={{ marginTop: 2 }}>
					<Grid
						item
						xs={12}
						container
						alignItems={"center"}
						justifyContent={"center"}
					>
						<Box>
							<AccountCircleIcon
								// sx={{ fontSize: { xs: 30, sm: 40, md: 45 } }}
							/>
						</Box>
						<Box>
							<Typography
								variant='h6'
								component='div'
								// sx={{ fontSize: { xs: 15, sm: 20, md: 30 } }}
							>
								Atsuya Tanaka
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Button size='small'>See Detail</Button>
			</CardActions>
		</React.Fragment>
);
const myReviewCard = (
	<React.Fragment>
		<CardContent>
			<Grid container spacing={1} alignItems='center'>
				<Grid item xs={12}>
					<Grid container alignItems={"center"}>
						<Box>
							<AccountCircleIcon
								sx={{ fontSize: { xs: 30, sm: 40, md: 45 } }}
							/>
						</Box>
						<Box>
							<Typography
								variant='subtitle1'
								component='div'
								sx={{ fontSize: { xs: 15, sm: 25, md: 25 } }}
							>
								Atsuya Tanaka
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Typography variant='body2' textAlign='center' sx={{ marginTop: 2 }}>
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size='small'>****</Button>
		</CardActions>
	</React.Fragment>
);
const Profile = () => {
	return (
		<ThemeProvider theme={theme}>
			<BaseLayout>
				<Container sx={{ marginBottom: 5 }}>
					<h1>John Costoco</h1>
					<p>costco@gmail.com</p>
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item xs={2} md={2}>
								<TwitterIcon />
							</Grid>
							<Grid item xs={2} md={2}>
								<FacebookIcon />
							</Grid>
							<Grid item xs={2} md={2}>
								<InstagramIcon />
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
								<Card variant='outlined'>{myReviewCard}</Card>
							</Box>
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Box sx={{ minWidth: 275 }}>
								<Card variant='outlined'>{myReviewCard}</Card>
							</Box>
						</SwiperSlide>
					</Swiper>
				</Container>
			</BaseLayout>
		</ThemeProvider>
	);
};

export default Profile;
