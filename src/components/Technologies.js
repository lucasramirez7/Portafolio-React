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

      <Timeline aling = "right">
              {
                 skill.map(({src,title,stars},index) => (
                    <TimelineItem className = {classes.container} key = {index}>
                    
                      
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
       )
   


    }

export default Technologies


const useStyles = makeStyles((theme) => ({ 
    

container:{
   position: "relative",
   left: "20px"
},

customLogo: {
    width: "45px"

},
paper: {
    padding: "6px 16px",
    maxWidth: "370px",

}


}))