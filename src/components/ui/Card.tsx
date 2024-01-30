import Card from "@mui/material/Card";
import { CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { ClothesCardProps } from "@/src/interfaces";

const ClothesCard = ({ title, description, image, addToTheCart } : ClothesCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, background: "none", boxShadow: "none" }}>
      <CardMedia
        component="img"
        height="371"
        image={image}
        alt="clothe"
      />
      <CardContent>
        <Box sx={{display:'flex'}} justifyContent='space-between' alignItems='center' paddingBottom={1}>
          <Typography gutterBottom variant="h5" lineHeight='0'>
            {title}
          </Typography>
          <Button variant="text" sx={{fontWeight: 800}} onClick={() => addToTheCart({ title, description, image })}>BUY</Button>
        </Box>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ClothesCard;