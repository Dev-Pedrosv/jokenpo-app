import { Flex, Typography } from "../../styles";
import { Action } from "./style";

export const ActionsGame = ({ actions, disabled, onClick }) => {
  return (
    <Flex>
      {actions.map((action) => (
        <Action
          key={action.value}
          disabled={disabled}
          onClick={() => onClick(action)}
        >
          <Typography size="32px">{action.label}</Typography>
        </Action>
      ))}
    </Flex>
  );
};
