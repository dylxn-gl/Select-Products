import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import colors from "@/src/utils/colors";

const Navbar = () => {
  const router = useRouter();

  return (
    <AppBar
      position="static"
      elevation={0}
      component="header"
      sx={{
        backgroundColor: colors.background,
        paddingY: 2,
        paddingX: {xs:2, md: 26},
      }}
    >
      <Toolbar
        component="nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" onClick={() => { return router.push('/') }}>LOGO</Typography>
        <IconButton color="inherit" onClick={() => { return router.push('/cart') }}>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
