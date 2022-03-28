import {makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Technologies from './Technologies'




const Skills = ({title, dark, id}) => {
const classes = useStyles();
  
  return (
 
      <div className= {`${classes.section} ${dark && classes.sectionDark}`}>
          
          <div className = {classes.sectionContect} id = {id}>
      
      <div className = {classes.text}>
      <Typography variant="h3" align= "center" >  {title}  </Typography>
      </div>
   
  
      
   
      <Technologies className = {classes.tecnologias}/>
  
    
    </div>  
  
   
    </div>
  

  )
}

export default Skills

const useStyles = makeStyles((theme) => ({

  section:{
       minHeight: "100vh",
     },
     
 sectionDark:{
       backgroundColor: "#333",
       color: "#fff",
 },
 
 sectionContect:{
  maxWidth: "80vw",
  margin: "0 auto",
  padding: theme.spacing(3)
},




 
 }))
 
