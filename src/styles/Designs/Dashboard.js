import { makeStyles, fade } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {
            marginTop: 15,
            justifyContent: "center"
      },
      labels: {
            color: theme.text[40],
            display: "inline-flex",
            alignItems: "center"
      },
      toggleButtonGroup: {
            backgroundColor: "transparent",

            "& button": {
                  padding: "0px 15px",
                  height: 32,
                  fontSize: theme.typography.body1.fontSize,
                  backgroundColor: fade(theme.text[70], 0.3),
                  color: theme.text[50],
                  border: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  boderLeft: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  borderRight: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  textTransform: "capitalize",
            },
            "& .Mui-selected": {
                  backgroundColor: theme.background["00"],
                  color: theme.palette.primary.main,
            },
            "& .MuiToggleButton-root:hover": {
                  backgroundColor: fade(theme.text[90], 0.2),
            }
      },
      toggleContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            "& button": {
                  padding: "0px 15px",
                  height: 32,
                  fontSize: theme.typography.body1.fontSize,
                  backgroundColor: fade(theme.text[70], 0.3),
                  color: theme.text[50],
                  border: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  boderLeft: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  borderRight: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  textTransform: "capitalize",
            },
            "& .Mui-selected": {
                  backgroundColor: fade(theme.background["00"], 0.5),
                  color: theme.palette.primary.main,
            },
            "& .MuiToggleButton-root:hover": {
                  backgroundColor: fade(theme.text[90], 0.2),
            }
      },
      ƒilterContainer: {
            backgroundColor: "transparent",
            display: "flex",
            height: 32,
            justifyContent: "flex-end",

      },
      transparent: {
            background: "transparent",
            border: "transparent",
            justifyContent: "flex-start",
      },
      btnFilterBy: {
            padding: "0 5px",
            textTransform: "capitalize",
            color: theme.palette.primary.main,
            backgroundColor: fade(theme.background["00"], 0.9),
            border: `solid 1px ${fade(theme.text[50], 0.25)}`,
            "& svg": {
                  fontSize: 18
            }
      },
      btnYear: {
            padding: "0 5px 0 10px",
            textTransform: "capitalize",
            color: theme.palette.primary.main,
            backgroundColor: fade(theme.background["00"], 0.9),
            border: `solid 1px ${fade(theme.text[50], 0.25)}`,
            "& svg": {
                  fontSize: 18
            }
      },
      divider: {
            alignSelf: 'stretch',
            height: 'auto',
            margin: "5px 15px",
            background: theme.text[70]
      },
      popover_Paper: {
            backgroundColor: theme.background["00"],
            color: theme.text[30],
      },
      palette: {
            color: theme.text[50],
            fontSize: 20,
            margin: 5
      },
      paletteDivider: {
            alignSelf: 'stretch',
            height: 'auto',
            margin: 5,
            background: theme.text[70]
      },
      paletteContainer: {
            display: "inline-flex",
            margin: "0 3px"
      },
      paletteColors: {
            width: 13,
            height: 20,
      },
      gridContainer: {
            justifyContent: "space-between",
            width: "75vw"
      },
      mapContainer: {
            display: "flex",
            backgroundColor: theme.background["00"],
            flexDirection: "column",
            borderRadius: 10
      },
      mapFiterContainer: {
            display: "inline-flex",
            margin: 20,
            justifyContent: "space-between",
      }
}))