import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useGetfoodMenuByNameQuery } from "@/Redux/foodMenuApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "@/Redux/Cartslice";
import { Box } from "@mui/system";
import { Badge, CircularProgress, Divider, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from 'react-responsive';


const MenuSwiper = () => {
  const [Category, setCategory] = useState("");
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  const num = isSmallScreen ? 1 : 4;


  const { data, error, isLoading } = useGetfoodMenuByNameQuery("Burger");
  console.log(data);

  const { SelectedProducts, SelectedProductsId } = useSelector(
    (state) => state.Cart
  );


  const dispatch = useDispatch();

  function ProductQuantity(item) {
    const useritem = SelectedProducts.find((userselect) => {
      return userselect.id === item.id;
    });
    return useritem.quantity;
  }

  return (
   
    <Box>
      <Box>
        <h1 className="title" style={{ color: "black" , marginLeft : "50px" }}>
        Burger
        </h1>
        <Box sx={{bgcolor : "black" , height : "3px" , width : "50px", marginLeft : "50px" , marginTop : "5px"}} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            m: "20px",
          }}
        >
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>
              {" "}
              <CircularProgress />
            </>
          ) : data ? (
            <>
              <Swiper
              style={{width : "100%"}}
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={10}
                slidesPerView={num}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Card
                      sx={{
                        cursor: "pointer",
                        width: "300px",
                        m: "20px",
                        bgcolor: "green",
                        borderRadius: "20px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={item.Name}
                        height="180"
                        sx={{ borderBottomLeftRadius: "40px" }}
                        image={item.imageLink}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          color="white"
                          variant="h5"
                          component="div"
                        >
                          {item.Name}
                        </Typography>
                        <Typography variant="body2" color="white">
                          {item.description}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="p" color="white">
                          ${item.price}
                        </Typography>
                        <Box>
                          {SelectedProductsId.includes(item.id) ? (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <IconButton
                                sx={{ m: "0 10px", color: "white" }}
                                onClick={() => {
                                  dispatch(decrement(item));
                                }}
                              >
                                -
                              </IconButton>

                              <Badge
                                badgeContent={ProductQuantity(item)}
                                color="primary"
                              />

                              <IconButton
                                sx={{ m: "0 10px", color: "white" }}
                                onClick={() => {
                                  dispatch(increment(item));
                                }}
                              >
                                +
                              </IconButton>
                            </Box>
                          ) : (
                            <IconButton
                              onClick={() => {
                                dispatch(addToCart(item));
                                console.log("add sucessfully");
                              }}
                              sx={{ bgcolor: "red" }}
                            >
                              <ShoppingCartIcon sx={{ color: "white" }} />
                            </IconButton>
                          )}
                        </Box>
                      </CardActions>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default MenuSwiper;
