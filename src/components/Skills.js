import {makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Technologies from './Technologies'




const Skills = ({title, dark, id}) => {
const classes = useStyles();
  
  return (
    <div className= {`${classes.section} ${dark && classes.sectionDark}`}>
     
      <div className = {classes.sectionContect} id = {id}>
      <Typography variant="h3">  {title}
         
           
          <Technologies className = {classes.tecnologias}/>
     
      </Typography>
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
},





 
 }))
 
