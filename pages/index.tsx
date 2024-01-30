import Head from "next/head";
import { Stack, Typography } from "@mui/material";
import Navbar from "@/src/components/ui/Nav";
import colors from "@/src/utils/colors";
import { CardsInfo } from "./api/Info";
import ClothesCard from "@/src/components/ui/Card";
import { ClothesCardProps } from "@/src/interfaces";

const Home = ({addToTheCart} : ClothesCardProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack alignItems="center" spacing={2}>
        <Navbar />
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h4" color={colors.white}>
            Clothes
          </Typography>
          <Stack flexDirection={{xs: 'column', md: 'row'}} justifyContent="space-between" gap={2}>
            {CardsInfo.map(({ title, description, image }) => {
              return (
                <ClothesCard
                  title={title}
                  image={image}
                  description={description}
                  key={title}
                  addToTheCart={addToTheCart}
                />
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Home