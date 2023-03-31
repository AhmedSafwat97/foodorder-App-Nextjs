import Layout from "@/Componants/Layout";
import { useGetfoodMenuByNameQuery } from "@/Redux/foodMenuApi";
import { Badge, Card, CardContent,CardMedia, CircularProgress, IconButton, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "@/Redux/Cartslice";


const Search = ({ title }) => {

    const { value } = useSelector((state) => state.Searchh);

    const { SelectedProducts, SelectedProductsId } = useSelector(
        (state) => state.Cart
      );
    
      const { data, error, isLoading } = useGetfoodMenuByNameQuery("");

      const dispatch = useDispatch();
    
      function ProductQuantity(item) {
        const useritem = SelectedProducts.find((userselect) => {
          return userselect.id === item.id;
        });
        return useritem.quantity;
      }


  return (
    <Layout title="Search">
      <Box sx={{ width: "100%", height: "90px", bgcolor: "black" }} />
      <Typography variant="h4" sx={{textAlign : "center"}}> Search For {value} </Typography>
      <Box sx={{minHeight : "70vh"}}>
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

                {data.filter((item) => {        
                return item.Name.toLowerCase().startsWith(value.toLowerCase());
                }).map((item) => (
                    <Card
                    key={item.id}
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
                ))}
            </>
          ) : null}
        </Box>
      </Box>
    </Layout>
  );
};

export default Search;
