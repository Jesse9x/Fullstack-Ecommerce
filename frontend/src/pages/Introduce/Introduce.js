import { Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Introduce = () => {
    const [fieldName, setFieldName] = useState(false);

    return (
        <Container>
            <Box sx={{ mt: 5, display: 'flex', gap: '5px' }}>
                <Typography>
                    <Link to='/'>Home</Link>
                </Typography>

                <KeyboardDoubleArrowRightIcon />

                <Typography>About As</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardHeader sx={{ borderBottom: '1px solid #000', bgcolor: '#42a8bf' }} subheader='Introduce' />

                        <CardContent sx={{ display: 'flex' }}>
                            <KeyboardDoubleArrowRightIcon />

                            <Typography onClick={() => setFieldName(false)}>
                                <Link>About Us</Link>
                            </Typography>
                        </CardContent>

                        <CardContent sx={{ display: 'flex' }}>
                            <KeyboardDoubleArrowRightIcon />

                            <Typography onClick={() => setFieldName(true)}>
                                <Link>Field Of Activity</Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Card>
                        <CardContent>
                            {fieldName === false ? (
                                <Typography variant='h5' sx={{ mb: 2, fontWeight: 'bold' }}>
                                    About As
                                </Typography>
                            ) : (
                                <Typography variant='h5' sx={{ mb: 2, fontWeight: 'bold' }}>
                                    Field Of Activity
                                </Typography>
                            )}

                            <Typography>
                                Below is our sample content. This content is for illustrative purposes only: Royal Hotel
                                - Royal Hotel is located in the middle of the main route of the tourist area, on the
                                beautiful Cat Ba Bay, with a convenient location for traffic, only 50 meters from the
                                high-speed pier and 20 meters from the car station. The hotel has 698 rooms which are
                                harmoniously and elegantly designed, equipped with luxurious and modern equipment of
                                5-star international standards. Including 150 special rooms, 200 luxury rooms, 100
                                luxury rooms, 150 standard rooms. The system of luxurious restaurants, airy, fresh and
                                modern space can serve over 10,000 diners. The restaurant located on the 21st floor of
                                the hotel has an ideal view of the resort area, serving European, Chinese and Vietnamese
                                dishes and around the world with delicious dishes made from scratch. Professional
                                kitchen with magnificent natural scenery that nature bestows will surely make you
                                satisfied. The Royal Garden on the 13th floor is the place to organize outdoor parties,
                                gala programs, karaoke at your request. Royal Hotel has a large conference room with an
                                area of ​​nearly 200m2 on the 6th floor with the number of up to 10000 people and 98
                                other meeting rooms with a capacity of 5000 to 8000 people that can be arranged and
                                arranged into multi-function rooms. capacity according to customer requirements. In
                                addition, Royal Hotel has a 10th floor hall with a capacity of 70-100 guests. Arranged
                                in the shape of a classroom or a U-shape at your request, solemnly designed with a
                                modern light and sound system that will meet perfectly for meetings, conferences,
                                parties or special events. of the customer. The health club is located on the 30th floor
                                of the hotel with a system of VIP massage rooms, SPA, Foot massage, ... making you relax
                                after a tiring day. Diverse and rich entertainment and relaxation services to meet all
                                needs of all customers. With enthusiastic and hospitable staff, professional service
                                style will definitely give you a great impression!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Introduce;
