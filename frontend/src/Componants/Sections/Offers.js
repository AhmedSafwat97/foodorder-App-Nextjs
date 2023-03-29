import { useGetoffersByNameQuery } from "@/Redux/offersApi";
import { Box, Button, CircularProgress, Paper } from "@mui/material";
import React from "react";

const Offers = () => {

  const { data, error, isLoading } = useGetoffersByNameQuery("");


  return (
    <Box sx={{display : "flex" , justifyContent:"center" , flexWrap : "wrap"}}>
                {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>
              {" "}
              <CircularProgress />
            </>
          ) : data ? (
            <>
              {data.map((item) => (
               <Paper key={item.id} sx={{bgcolor : "green" , m : "20px" ,width : "400px" , height : "170px" , display : "flex" , alignItems : "center" , justifyContent : "center" }}>
               <img src={item.imageLink} alt={item.Name} style={{width : "140px" , height : "140px" , border : "3px solid yellow" , borderRadius : "50%" , marginRight : "20px" }} />
                  <Box>
                      <h3 className="title" style={{color : "white"}}>{item.Name}</h3>
                      <h1 className="title" style={{color : "white"}}>{item.offer}% <span className="title" style={{fontSize : "18px"}} >Off</span></h1>
                      <Button variant="contained" sx={{bgcolor : "red"}}>Order Now</Button>
                  </Box>
               </Paper>
              ))}
            </>
          ) : null}
    </Box>
  );
};

export default Offers;
