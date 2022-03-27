import React, { useState } from 'react'
import mockData from "../mockData"
import {makeStyles, Paper, Typography, Radio, TextField, Button} from '@material-ui/core'





const Contact = ({title, dark, id}) => {
 
  const classes = useStyles();
  const [value, setValue] = useState("Say Hi");
  
  
  const handleChange = (e) => {
      setValue(e.target.value);
  };
  
  return (
   
   
   <div className= {`${classes.section} ${dark && classes.sectionDark}`}>
        
          
           <Typography variant="h3">{title}</Typography>
   
   
     <div className = {classes.sectionContect} id = {id}>    
            

    <Paper className = {classes.root}>
              
      <div className={classes.tittleAndChoices}>
              
                <Typography variant="h4"> <span style={{ color: '#9D33C2' }}> LR</span>amirez</Typography>
                
                <Typography className= {classes.contactme} variant="h6"  style={{ color: '#959' }}> CONTACT ME </Typography>
                <div className = {classes.choices}>
                  
                  <span>Say Hello</span>
                  
                  <Radio
                    value= "Say Hi"
                    checked = {value === "Say Hi"}
                    color = "primary"
                    onChange = {handleChange}          
                  />


                  
                  <span>Get a Quote</span>
                  
                  <Radio
                    value= "Get a Quote"
                    checked = {value === "Get a Quote"}
                    color = "primary"
                    onChange = {handleChange}          
                  />

                </div>

      </div>
      
      <form classeName = {classes.form} noValidate autoComplete = "off">

          <TextField label= "Your Name"/>
          <TextField label= "Your E-Mail"/>
           
            {
                value === "Get a Quote" ? (
                 
                  <>    
                  <TextField label= "Needed Service"/>
                  <TextField label= "Estimated Budget"/>
                  </>

                ) : null
            }

          <TextField label= "Write a message"/>
     
      </form>
      
      <Button variant="contained">Submit</Button>
             
  </Paper>
            
           
            

      </div>
      </div>
    )
}



export default Contact




const useStyles = makeStyles((theme) => ({

  section:{
       minHeight: "100vh",
       flexDirection: "column",
       display: "flex",
       justifyContent: "flex-start",
       alignItems: "center",
      },

  sectionDark:{
        backgroundColor: "#333",
        color: "#fff",
  },
  root: {
      marginTop: theme.spacing(3),
      background: "#FEF",
      color: "#333",
      maxWidth: "700px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: theme.spacing(3),

      "& button": {
        backgroundColor: "#E9C7FA",
        marginTop: theme.spacing(4),
        fontWeight: 900,
        fontSize: "0.8rem",
      }
  },


 sectionContect:{
    
    maxWidth: "80vw",
    padding: theme.spacing(3),

 },

 tittleAndChoices:{
    "& h4": {
        marginTop: theme.spacing(4),
        display: "flex"
    }
 
  },

  
  form: {
    display: "flex",
    flexDirection: "column",

    "& input":{
    marginBottom: theme.spacing(1)
  }}


}))
 
