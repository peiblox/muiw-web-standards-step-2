"use client";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  description,
}: ProductCardProps) {

  return (
    <Card sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}>
      <CardHeader title={`${id} ${title}`} subheader={price && `${price} €`} sx={{
        minHeight: "120px",
        alignItems: "flex-start",
      }}/>
      <div style={{
        backgroundColor: "#f2f2f2",
      }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{
            objectFit: "contain",
            padding: "1em",
            mixBlendMode: "multiply"
          }}
        />
      </div>
      <CardContent sx={{
        flexGrow: 1,
      }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon color={'action'} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ImageOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
