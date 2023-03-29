import React, { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/Motions";
import { Badge, Box, Button, IconButton, InputBase, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [ShowSearch, setShowSearch] = useState(false);

  const {SelectedProducts} = useSelector((state) => state.Cart)

  const router = useRouter();
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
      }}
    >
      <motion.div
        className="Navp"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <h1 className="title" style={{ color: "white", fontWeight: "800" }}>
            FoodEase
          </h1>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Link className="Link" href="/">
            Home
          </Link>
          <Link className="Link" href="/Menu">
            Menu
          </Link>
          <Link className="Link" href="/Aboutpage">
            About
          </Link>
          <Link className="Link" href="/Contact">
            Contact Us
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <IconButton>
            <Link href="/Cart">
              <Badge badgeContent={SelectedProducts.length} color="primary">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </Badge>
            </Link>
          </IconButton>
          <IconButton>
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
        {true && 
          <InputBase
          sx={{bgcolor :"white"}}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
        }
          <Button sx={{ m: "0 5px", bgcolor: "green" }} variant="contained">
            Order Now
          </Button>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Link href="/Cart">
          <Badge badgeContent={SelectedProducts.length} color="primary">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </Badge>
              </Link>
              <IconButton>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Navbar;
