import {makeStyles, Typography, Card, CardMedia, CardContent, CardActions, Button} from '@material-ui/core'
import { Autorenew } from '@material-ui/icons'
import React from 'react'
import me from "../img/fotoCv.png"
import cv from "../img/cv-Ramirez.pdf"
import TypeWriterEffect from "react-typewriter-effect"




const About = ({title, dark, id}) => {
    const classes = useStyles();
    return (
    <div className= {`${classes.section} ${dark && classes.sectionDark}`}>
     
      <div className = {classes.sectionContect} id = {id}>
        
        <Typography variant="h3" align= "center">{title}</Typography>  
               
       

        <Card className= {classes.card}>
          <CardMedia image={me} className= {classes.media} title = "picture"/> 
            <CardContent className= {classes.cardContent}>
                <TypeWriterEffect
                      
        text= "Hi, I'm Lucas Ramirez"
         
         
          textStyle = {{fontSize: "2.5rem", 
                        fontWeight:"1000px", 
                        color: "#4C0946",
                        fontFamily: "Berlin Sans FB",
                        fontWeight: 300
                        }}
         
          startDelay = {85} typeSpeed = {60}              
          cursorColor= "grey"     
              />

                <TypeWriterEffect
                        text= "I am currently a programming student at UTN (Universidad Tecnologíca Nacional)."
                        textStyle = {{
                        fontSize: "1.2rem",
                        fontWeight:"300px",
                        color: "#676",
                        marginTop: "20px"}}

          startDelay = {2100} typeSpeed = {80} 
                        cursorColor= "grey"    
                />

         

           </CardContent>
      
       <CardActions>

             <Button variant = "contained"
             className={classes.cvBotton}>
             <a href= {cv} download>
             Download CV

             </a>
            
             </Button>               

       </CardActions>
       
        </Card>

      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({

   section:{
        minHeight: "100vh",
      },
  sectionDark:{
        backgroundColor: "#333",
        color: "#fff",
  },
  sectionContect:{
    maxWidth: "65vw",
    margin: "0 auto",
    padding: theme.spacing(3)
  },

  card:
  {
    height: "75vh",
    display: "flex",
    marginTop: theme.spacing(5),
    position: "relative",
    borderRadius: "28px",
  
  [theme.breakpoints.down("sm")]:{
          display: "none"
        }


  },
  cardContent :{
    marginTop: theme.spacing(3),
    "& h6": {
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("sm")]:{
          display: "none"
        }
    },
  },

  media :{
      width: "450px",
      padding: "10px",
      height: "auto",
      display: "block",
      borderRadius: "5px",
      elevation: 10,
      clipPath: "circle",
      margin: theme.spacing(5),
  },

  cvBotton:{
    position:"absolute",
    bottom: "3rem",
    right: "3.5rem",
    borderRadius: "50px",
    backgroundColor: "#4C0946",
    padding: theme.spacing(3),
    
    [theme.breakpoints.down("sm")]:{
          bottom: "2rem",
          right: "1rem",

    },
    
    "&:hover":{
      backgroundColor: "#4C0946",
      
     },

     "& a":{
      color: "#ccc",
      textDecoration: "none",
      fontWeight: 600


     },
   
  }
   

  
  }))
  



export default About
