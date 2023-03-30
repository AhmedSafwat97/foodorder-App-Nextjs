import React, { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/Motions";
import {
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "@/Redux/SearchSlice";
import { Phone } from "@mui/icons-material";

const Navbar = () => {
  const paths = [
    { title: "Home", link: "/" },
    { title: "Menu", link: "/Menu" },
    { title: "About", link: "/Aboutpage" },
    { title: "Contact us", link: "/Contact" },
  ];

  const [ShowSearch, setShowSearch] = useState(false);
  const [showmenu, setshowmenu] = useState(false);
  const [Searchv, setSearchv] = useState("");

  const { SelectedProducts } = useSelector((state) => state.Cart);

  const dispatch = useDispatch();

  const router = useRouter();
  const { query } = router;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (Searchv !== "") {
        router.push("/Search");
        dispatch(updateSearch(Searchv));
      }
    }
  };

  return (
    <>
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {paths.map((item, index) => {
              return (
                <Box sx={{ display: "flex" }} key={index}>
                  <List
                    component="nav"
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <ListItemButton
                      sx={{
                        borderBottom:
                          router.pathname === `${item.link}`
                            ? "4px solid green"
                            : null,
                      }}
                      onClick={() => {
                        router.push(`${item.link}`);
                      }}
                    >
                      <ListItemText
                        sx={{ color: "white" }}
                        primary={`${item.title}`}
                      />
                    </ListItemButton>
                  </List>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton>
              <Link href="/Cart">
                <Badge badgeContent={SelectedProducts.length} color="primary">
                  <ShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              </Link>
            </IconButton>
            <IconButton
              onClick={() => {
                setShowSearch(ShowSearch ? false : true);
              }}
            >
              <SearchIcon sx={{ color: "white" }} />
            </IconButton>
            {ShowSearch && (
              <InputBase
                sx={{ bgcolor: "white" }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                onKeyPress={handleKeyPress}
                onChange={(eo) => {
                  setSearchv(eo.target.value);
                }}
              />
            )}
            <Box sx={{ m: "0 5px", display: "flex", alignItems: "center" }}>
              <Phone sx={{ color: "white", mr: "3px" }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                +11187
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Link href="/Cart">
              <Badge badgeContent={SelectedProducts.length} color="primary">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </Badge>
            </Link>
            <IconButton onClick={() => {
              setshowmenu(true)
            }}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </motion.div>
      </Box>

      {/* For mobile */}

{showmenu && 
      <Box
      sx={{
        position: "fixed",
        top: "0",
        right: "0",
        Button: "0",
        width: "75%",
        height: "100vh",
        bgcolor: "red",
        zIndex: "10",
      }}
    >

<Box sx={{display : "flex" , p : "20px"}}>
<Box sx={{flexGrow : 1}} />
        <Box sx={{ display: "flex"}}>
          <IconButton
            onClick={() => {
              setShowSearch(ShowSearch ? false : true);
            }}
          >
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          {ShowSearch && (
            <InputBase
              sx={{ bgcolor: "white" , width : "50%" }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              onKeyPress={handleKeyPress}
              onChange={(eo) => {
                setSearchv(eo.target.value);
              }}
            />
          )}

          <Box>
            <Link href="/Cart">
              <Badge badgeContent={SelectedProducts.length} color="primary">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </Badge>
            </Link>
            <IconButton  onClick={() => {
              setshowmenu(false)
            }}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
</Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {paths.map((item, index) => {
          return (
            <Box sx={{ display: "flex" }} key={index}>
              <List
                component="nav"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <ListItemButton
                  sx={{
                    borderBottom:
                      router.pathname === `${item.link}`
                        ? "4px solid green"
                        : null,
                  }}
                  onClick={() => {
                    router.push(`${item.link}`);
                  }}
                >
                  <ListItemText
                    sx={{ color: "white" }}
                    primary={`${item.title}`}
                  />
                </ListItemButton>
              </List>
            </Box>
          );
        })}
        <Box sx={{ m: "0 5px", display: "flex", alignItems: "center" }}>
              <Phone sx={{ color: "white", mr: "3px" }} />
              <Typography variant="h6" sx={{ color: "white" }}>
                +11187
              </Typography>
            </Box>
      </Box>
    </Box>


}


    </>
  );
};

export default Navbar;
