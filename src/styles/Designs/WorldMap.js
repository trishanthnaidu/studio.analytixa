import { makeStyles, fade } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {
      },
      states: {
            outline: "none",
            zIndex: 1,
            cursor: "pointer",
            transition: "fill 0.3s ease",
            strokeWidth: 1,
            strokeLinecap: "round",
            stroke: fade(theme.reverse.background[10], 0.25)
      },
      grayStates: {
            outline: "none",
            zIndex: 1,
            cursor: "pointer",
            transition: "fill 0.3s ease",
            strokeWidth: 1,
            strokeLinecap: "round",
            fill: fade(theme.background[30], 0.3)
      },
      toggleContainer: {

      },
      paperWorldMap: {
            height: "64vh",
            width: "75vw"
      }
}))