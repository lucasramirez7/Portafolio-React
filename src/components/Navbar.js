
import { AppBar, Toolbar, makeStyles, List, IconButton, Drawer , Divider, ListItemIcon, ListItem, Typography} from '@material-ui/core'
import  InfoTwoToneIcon  from '@material-ui/icons/InfoTwoTone'
import { Link, animateScroll as scroll } from "react-scroll"
import  EmojiObjectsTwoToneIcon  from '@material-ui/icons/EmojiObjectsTwoTone'
import  BuildTwoToneIcon  from '@material-ui/icons/BuildTwoTone'
import  CancelIcon  from '@material-ui/icons/Cancel'
import  ContactMailTwoToneIcon  from '@material-ui/icons/ContactMailTwoTone'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import  {useState } from 'react'


const Navbar = () => {
  
 
  const classes = useStyles();
  const [open, setOpen] = useState (false);
  
  const links = [
    {
      id: "about",
      text: "About me",
      icon:  <InfoTwoToneIcon fontSize='large'/> 
    },

  
    {
      id: "skills",
      text: "Skills",
      icon:  <EmojiObjectsTwoToneIcon fontSize='large'/> 
    },
    

    {
      id: "work",
      text: "My Work",
      icon:  <BuildTwoToneIcon fontSize='large'/> 
    },

    {
      id: "contact",
      text: "Get in touch",
      icon:  <ContactMailTwoToneIcon fontSize='large'/> 
    },
  ];

    const scrollToTop = () => {
      scroll.scrollToTop()
    };

  
  return (
    <>
    <AppBar position = "sticky" className= {classes.root}>
        <Toolbar classname = {classes.toolbar}>
       
        <Typography onClick= {scrollToTop} style={{ color: '#232' }} className= {classes.logo}>
          
                <span style={{ color: '#9D33C2' }}> LR</span>amirez </Typography> 
          
          <List className= {classes.menu}>
            {
              
              links.map(({id, text}, index)=> (
              
              <Link key={index}  
              to={id}
              spy={true} 
              activeClass= "active" 
              smooth={true} 
              duration = {500}  
              offset = {-70}> 
              
              {text} </Link>
             
              ))
            
            }

          </List>
           
          <IconButton edge ="end"
            className = {classes.menuButton} 
            onClick = {()=>setOpen(!open)}>
          
          
          <MenuOpenIcon fontSize = "large" />  
          </IconButton> 
        
        </Toolbar>

    </AppBar>
    <Drawer anchor ="right" open = {open} onClose= {()=>setOpen(!open)}>
            
            <IconButton className= {classes.cancelIcon} onClick = {()=>setOpen(!open)}>
              

              <CancelIcon fontSize="large" />
              </IconButton>
              

              <Divider/>  
             
            
            {
              
              links.map(({id, text, icon}, index)=> (
              
              <Link key={index} 
               className= {classes.sidebar}
               to={id}
               spy={true} 
               activeClass= "active" 
               smooth={true} 
               duration = {500}  
               offset = {-70}>   <ListItem component= "h5">

                <span>
                <ListItemIcon> 
                    {icon}
                </ListItemIcon>
                </span> {text}

               </ListItem>  </Link>
             
              ))
            
            }

      
            

    </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({

  root :{
    backgroundColor: "#DDD",
    top: 0,
    left: 0,
    right: 0,
    
  },

  toolbar: {
    display :"flex",
    justifyContent: "contain",
    alignItems: "center",

  },

  logo: {
      fontSize: theme.spacing(4),
      cursor: "pointer"



  },

  menu: {
    
    [theme.breakpoints.down("sm")]: {
     display: "none",
    
   },
   
    "& a": {
      color: "#333",
      fontSize: "1.3rem",
      fontWeight: "bold", 
      fontFamily: "Segoe UI",
      marginLeft: theme.spacing(7),
      marginBotton: theme.spacing(4),
    },



    "& a:hover" : {
      cursor: "pointer",
      color : "#9D33C2",
      borderBottom: "2px solid #000"
    }


  },
  

  menuButton :{
     
    display: "none",
      
      [theme.breakpoints.down("sm")]: {
        display: "block",
        color: "#9D33C2",
        position:"absolute",
        top: 0,
        right: 10,
      }




  },

  cancelIcon: {
      color: "#979",
      position:"absolute",
      top: 0,
      right: 10
  },

  sidebar:{
    width: "45vw",
    [theme.breakpoints.down("sm")]: {
      width: "35vh"
    },
    "& h5":
    {
      margin: theme.spacing(8, 0, 0, 4),
      fontSize: "1rem",
      cursor: "pointer",
      color: "#979",
      fontWeight: "bold"
    },

    "& h5:hover" :
    {
      cursor: "pointer",
      color : "#9D33C2",

    }
    


  },





 }))
 

export default Navbar
