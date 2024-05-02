import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};


const CustomModal = ({
  open,
  title,
  description,
  children,
  primaryButtonLabel,
  primaryButtonOnClick,
  secondaryButtonLabel,
  secondaryButtonOnClick,
  handleClose,
}) => {
 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          {!!children && <div >{children}</div>}
          <Box display={'flex'} gap={'5px'} width={'100%'}>
            {!!secondaryButtonLabel && <SecondaryButton sx={{ flex: '1' }} onClick={secondaryButtonOnClick}>{secondaryButtonLabel}</SecondaryButton>}
            {!!primaryButtonLabel && <PrimaryButton sx={{ flex: '1' }} onClick={primaryButtonOnClick}>{primaryButtonLabel}</PrimaryButton>}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal

