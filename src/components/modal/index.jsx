import { Flex, Spacer, Typography } from "../../styles";
import { ModalStyled, CloseModal } from "./style";

export const Modal = ({ open, handleOpenModal, titleModal, messageModal }) => {
  return (
    <ModalStyled open={open}>
      <Flex direction="column">
        <Typography primary>{titleModal}</Typography>
        <Spacer margin="8px" />
        <CloseModal onClick={() => handleOpenModal()}>X</CloseModal>
        <Typography primary>{messageModal}</Typography>
      </Flex>
    </ModalStyled>
  );
};
