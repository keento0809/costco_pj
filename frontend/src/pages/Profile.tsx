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

const card = (
	<>
		<CardContent>
			<Typography
				variant='h3'
				component='h5'

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
						<AccountCircleIcon sx={{ fontSize: { xs: 30, sm: 40, md: 45 } }} />
					</Box>
					<Box>
						<Typography variant='h4' component='div'>
							Atsuya Tanaka
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</CardContent>
		<CardActions>
			<Button size='small'>See Detail</Button>
		</CardActions>
	</>
);
const myReviewCard = (
	<>
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
								variant='h3'
								component='div'
							>
								Atsuya Tanaka
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Typography variant='h5' textAlign='center' sx={{ marginTop: 2 }}>
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size='small'>****</Button>
		</CardActions>
	</>
);
const Profile = () => {
	return (
		<BaseLayout>
			<Container sx={{ marginBottom: 5 }}>
				<Typography variant='h3' sx={{ marginTop: 2 }} color={"secondary"}>
					John Costoco
				</Typography>
				<Typography variant='h5' sx={{ marginTop: 2 }}>
					costco@gmail.com
				</Typography>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2} sx={{ marginTop: 2 }}>
						<Grid item xs={2} md={2}>
							<TwitterIcon sx={{ fontSize: { xs: 30, sm: 40, md: 45 } }} />
						</Grid>
						<Grid item xs={2} md={2}>
							<FacebookIcon sx={{ fontSize: { xs: 30, sm: 40, md: 45 } }} />
						</Grid>
						<Grid item xs={2} md={2}>
							<InstagramIcon sx={{ fontSize: { xs: 30, sm: 40, md: 45 } }} />
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ flexGrow: 1, marginTop: 5 }} textAlign={"center"}>
					<Grid container spacing={2}>
						<Grid item xs={4} md={4}>
							<div>
								<Typography variant='h1'>4.3</Typography>
								<Typography variant='body1'>starts</Typography>
							</div>
						</Grid>
						<Grid item xs={4} md={4}>
							<div>
								<Typography variant='h1'>30</Typography>
								<Typography variant='body1'>users</Typography>
							</div>
						</Grid>
						<Grid item xs={4} md={4}>
							<div>
								<Typography variant='h1'>5</Typography>
								<Typography variant='body1'>followers</Typography>
							</div>
						</Grid>
					</Grid>
				</Box>
				<Typography variant='h3' sx={{ marginTop: 2, marginBottom: 2 }}>
					Next schdule
				</Typography>
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
				<Typography variant='h3' sx={{ marginTop: 2, marginBottom: 2 }}>
					My review
				</Typography>
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
	);
};

export default Profile;
