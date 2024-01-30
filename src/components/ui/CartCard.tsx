import Card from "@mui/material/Card";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { CardProps } from "@/src/interfaces";

const ClothesCard = ({ title, description, image }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 345, background: "none", boxShadow: "none" }}>
      <CardMedia
        component="img"
        height="371"
        image={image}
        alt="clothe"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" lineHeight="0" marginBottom={3}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ClothesCard;
