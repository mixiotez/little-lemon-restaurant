import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ReviewCard = ({ avatarColor, name, rating, review }) => {
  return (
    <Card elevation={0} component="article" sx={{ height: "100%" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: avatarColor }}>{name[0]}</Avatar>}
        title={name}
        subheader={<Rating value={rating} readOnly />}
        sx={{ px: { xs: 3, md: 2 }, pt: { xs: 3, md: 2 }, pb: 0 }}
      />
      <CardContent sx={{ px: { xs: 3, md: 2 } }}>
        <Typography textAlign="justify" variant="body2">
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
