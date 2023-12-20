import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ ChannelDetail, marginTop }) => (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '320px' },
            height: '326',
            margin: 'auto',
            marginTop
        }}>
        <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                <CardMedia
                    image={ChannelDetail?.snippet?.thumbnail?.high?.url || demoProfilePicture}
                    alt={ChannelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />

                <Typography variant='h6'>
                    {ChannelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
                </Typography>
                {ChannelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}

            </CardContent>
        </Link>
    </Box>
)
export default ChannelCard
