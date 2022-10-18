import React from "react";
import BasicCard from "../components/BasicCard";
import BaseLayout from "../layout/BaseLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const History = () => {
	return (
    <BaseLayout>
			<Box sx={{ marginTop: 3, marginBottom: 5 }}>
			<Typography variant='h2' sx={{ marginTop: 2 }}>
				History
			</Typography>
			<Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2 }}>
				To borrow
			</Typography>
			<BasicCard
				username={"koki"}
				discription={"koki description"}
				place={"Chinatown"}
				rate={3}
        />
        </Box>
			<Box sx={{ marginTop: 5, marginBottom: 5 }}>
				<BasicCard
					username={"koki"}
					discription={"koki description"}
					place={"Chinatown"}
					rate={3}
				/>
			</Box>
			<Box sx={{ marginTop: 5, marginBottom: 5 }}>
				<BasicCard
					username={"koki"}
					discription={"koki description"}
					place={"Chinatown"}
					rate={3}
				/>
			</Box>
		</BaseLayout>
	);
};

export default History;
