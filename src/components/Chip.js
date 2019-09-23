import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const cardStyles = theme => ({
  root: {
    background: theme.palette.secondary.main,
    marginRight: "1rem"
  },
  label: {
    color: theme.palette.primary.main
  }
});
export default withStyles(cardStyles)(Chip);
