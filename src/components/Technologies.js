import cProgramming from "../img/c-sharp.png"
import html5 from "../img/html5.png"
import css from "../img/css.png"
import js from "../img/js.png"
import react from "../img/react.png"
import  React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent} from "@material-ui/lab"
import { Typography, makeStyles, classes, Paper } from "@material-ui/core"
import StarRating from "./StarRating"




const Technologies = () => {
 
    const classes = useStyles();
   
    const skill =[
        {
        src: cProgramming,
        title: "C# Logic",
        stars: 4},

        {
        src: html5,
        title: "HTML5",
        stars: 4},
        
        {
        src: css,
        title: "CSS",
        stars: 3},

        {
        src: js,
        title: "JS",
        stars: 3},
      
        {
        src: react,
        title: "React",
        stars: 3},
    ];    

    return (
    
    <div className = {classes.container}>

    <Timeline className= {classes.Technologies} >
      
    
              {
                 skill.map(({src,title,stars},index) => (
                  
                    <TimelineItem   key = {index} align = "center" >
                    
                        <TimelineSeparator>
                        <img src={src} alt = {title} className= {classes.customLogo}></img>
                        <TimelineConnector/>
                    
                    </TimelineSeparator>
                    <TimelineContent>
                   
                        
                    
                    <Paper elevation={4} className = {classes.paper}>

                      <Typography variant= "h5" component= "h1"> 
                      
                      {title}
                      
                      </Typography> 
                    
                        <StarRating stars= {stars}/>

                      </Paper>
                    </TimelineContent>
                    </TimelineItem>
                   
                 ))
             }

             </Timeline>
             <Paper className = {classes.paperText} elevation={4} >
            
             <Typography className = {classes.text}> I'm looking for a job which help me earning experience
              and make me a professional on this beautiful career and I already have projects carried out effectively</Typography>
            </Paper>
            </div>

        

     
       )
   


    }

export default Technologies


const useStyles = makeStyles((theme) => ({ 
    

container:{
  display: "flex",
  marginTop: "70px",
},
paperText : {
    background: "#FEF"
},
text: {
    padding: "25px",
    fontSize: "1.5rem",
    flexBasis: "70%",
    marginTop: "100px",
    fontFamily: "monospace",
    
    [theme.breakpoints.down("sm")]:{
    display: "none"

  },

},

Technologies: {
    flexBasis: "30%",
    [theme.breakpoints.down("sm")]:{
        alignContent: "Center",
        flexBasis: "100%",
        marginRight: "70px"
      },

},

paper: {
    padding: "4px 16px",
    maxWidth: "370px",
    color: "#333"
},

customLogo: {
    width: "45px",
    
    

},

}))