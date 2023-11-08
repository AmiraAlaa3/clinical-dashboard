import { Box, Grid } from "@mui/material"
import CustomerGrowth from "../../components/CustomerGrowth/CustomerGrowth.jsx"
import Rating from "../../components/Rating/Rating.jsx"
import PopularCategories from "../../components/PopularCategories/PopularCategories.jsx"
import CustomerSatisfaction from "../../components/CustomerSatisfaction/CustomerSatisfaction.jsx"
const Analytics = () => {
    return (
        <Box component="section" className="container-fluid">
            <Grid container spacing={4}>
                <Grid  item  xs={12} xl={6}>
                    <CustomerGrowth />
                </Grid>
                <Grid item  xs={12} xl={6}>
                    <Rating />
                </Grid>
                <Grid item xs={12} xl={6}>
                    <PopularCategories />
                </Grid>
                <Grid item xs={12} xl={6} >
                    <CustomerSatisfaction />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Analytics
