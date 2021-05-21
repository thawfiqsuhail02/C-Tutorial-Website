import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

var code = [
  '<code>string name = "Johnny Depp"; <br> int myNum = 15; <br> double myDoubleNum = 5.99D; <br> char myLetter = "D"; <br> bool myBool = true;<br> Console.WriteLine(name);<br>Console.WriteLine(myNum);<br>Console.WriteLine(myDoubleNum);<br>Console.WriteLine(myLetter);<br>Console.WriteLine(myBool);</code>',
  '<code>int i = 0;<br/>while (i < 5)<br>{<br>&nbsp Console.WriteLine(i);<br>&nbsp i++;<br>}<br>do<br>{<br>&nbsp Console.WriteLine(i);<br>&nbsp i++;<br>}while (i < 5);</code>',
  '<code>static void MyMethod()<br>{<br>&nbsp Console.WriteLine("I just got executed!");<br>}<br>static void Main(string[] args)<br>{<br>&nbsp MyMethod();<br>}</code>',
  '<code>class Car <br>{<br>&nbsp string color = "red";<br>&nbsp static void Main(string[] args),<br>&nbsp {<br>&nbsp&nbsp&nbsp Car myObj = new Car();<br>&nbsp&nbsp&nbsp Console.WriteLine(myObj.color);<br>&nbsp&nbsp}<br>}</code>']
var output = ["Johnny Depp <br> 15 <br> 5.99 <br> D <br> true",'0<br />1<br />2<br />3<br />4<br />0<br />1<br />2<br />3<br />4<br />','I just got executed!','red']

var code2=[
  '<code>string welcome="welcome to C# Tutorial";<br>console.WriteLine("the length of the welcome string is:"+welcome.length);<br>console.WriteLine(welcome.ToUpper());<br>console.Write(welcome.ToLower());</code>',
  '<code>string[] cars={"Benz","Ferrari","Rolls Royce","Bentley"}<br>console.WriteLine(cars[0]);<br>console.WriteLine(cars[1]);<br>console.WriteLine(cars[2]);<br>console.WriteLine(cars.length);</code> ',
  '<code>int x=10;<br>int y=9;<br>console.WriteLine(x>y);<br>console.WriteLine(y>x);</code>'
]
var output2 =["the length of the welcome string is:22<br>WELCOME TO C# Tutorial<br>welcome to c# tutorial","Benz <br>Ferrari<br>Rolls Royce <br> 4","true<br>false"]

function clickHander(text,index){
  document.getElementById("code").innerHTML= code[index]
  document.getElementById("output").innerHTML= output[index]  
}
function clickHander2(text,index){
  document.getElementById("code").innerHTML= code2[index]
  document.getElementById("output").innerHTML= output2[index]  
}

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            C# Tutorial
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Variables', 'loops', 'methods', 'classes'].map((text, index) => (
            <ListItem onClick={clickHander.bind(this,text,index)} button key={text} >
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['strings', 'Arrays', 'Bool'].map((text, index) => (
            <ListItem  onClick={clickHander2.bind(this,text,index)} button key={text}>
              
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <h4>Code :</h4>

        <Typography id = "code" paragraph style={{
            color:"brown"
        }}>
        
        </Typography>
        <h4>Output :</h4>

        <Typography id ="output" paragraph style={{
            color:"rgb(128,128,0)"
        }}>,
          
        </Typography>
      </main>
    </div>
  );
}