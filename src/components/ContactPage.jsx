import { Typography, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function ContactPage() {
  return (
    <div 
    className="ContactPage"
    id='contact-page'
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: "15vh",
      paddingBottom: '10vh',
    }}
  >
    <Typography variant="h2"><b>Contact</b></Typography>
    <p>Want to get in touch? Contact me via the form below.</p>
    <div style={{maxWidth: '50%'}}>
    <TextField 
      required
      fullWidth
      margin="dense"
      variant="outlined" 
      placeholder="Name"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
      }}
    />
    <TextField 
      required
      fullWidth
      margin="dense"
      variant="outlined" 
      placeholder="Email" 
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
      }}
    />
    <TextField 
      required
      fullWidth
      multiline
      rows={5}
      margin="dense"
      variant="outlined" 
      placeholder="Your Message"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
      }}
    />
    <Button 
      variant="contained" 
      endIcon={<SendIcon />}
      sx={{
        textTransform: "none", // Prevents uppercase
        backgroundColor: "black",
        boxShadow: "none",
      }}
    >
        Send
    </Button>
    </div>
  </div>
  );
}

export default ContactPage;