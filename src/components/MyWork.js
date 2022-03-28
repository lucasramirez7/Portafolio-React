import {Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import mockData from "../mockData"




const MyWork = ({title, dark, id}) => {
const classes = useStyles();
 
  return (
    <div className= {`${classes.section} ${dark && classes.sectionDark}`}>
    
    <div className = {classes.sectionContect} id = {id} >
        <Typography variant="h3" align='center'>{title}</Typography>
      
            <Grid container className= {classes.grid}>

                {
                   mockData.map(({title, image, link, text}, index)=>(
                   
                    <Grid item key= {index} xs={12} sm = {6} md = {4} >
                      
                      <Card className = {classes.card}>
                       
                       
                        <CardMedia className = {classes.caratula} image= {image}  alt= "caratula"/>
                       
                          <CardContent className = {classes.title}>
                             
                              <Link href ={link} color = "grey" target = "_blank" rel="noopener noreferrer" >
                                {title} 
                              </Link>
                          <Typography  >  {text} </Typography>
                          </CardContent>
                      
                      </Card>
                    </Grid>

                   ))
                }

            </Grid>
      
      </div>
     </div>
  )
}

export default MyWork

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

  grid:{
        marginTop: theme.spacing(8),
      },

  card:{
        maxWidth: 345,
        minHeight: 250,
        margin: theme.spacing(3),
        borderRadius: "30px",
        textDecoration: "none"
      },
    
  caratula: {

      height: 0,
      paddingTop:"50%"
    },

    title: {
      textDecoration: "none",
    }


  
  

 
 }))
 