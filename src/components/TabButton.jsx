import Typography from '@mui/material/Typography';

function TabButton({text, onClick}) {
  return (
    <div onClick={onClick}>
      <Typography variant="subtitle1" className="tab-button">
          {text}
      </Typography>
    </div>
  );
}

export default TabButton;
