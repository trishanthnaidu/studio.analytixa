import React, { useState, Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import { createStore, StoreManager } from '@rootzjs/store';
import {
      Drawer,
      List,
      ListSubheader,
      ListItem,
      Divider,
      ListItemIcon,
      ListItemText,
      IconButton,
      DashboardRounded,
      useTheme,
      SwipeableDrawer,
      Typography,
      CloseRounded,
      BlurLinearRounded,
      AttachMoneyRounded,
      ShowChartRounded,
      BarChartRounded,
      FilterHdrRounded,
      BubbleChartRounded,
      ScatterPlotRounded,
      PieChartRounded,
      DonutLargeRounded,
      MapRounded,
      ViewCompactRounded
} from './Core';
import { Styles } from "../styles/AppDrawer";

const Component = ({ props, state }) => {
      const { route } = props;
      const { isMenuOpen, sections, iconSvgMappings, activeSection } = state;
      const theme = useTheme();
      const classes = Styles();
      const onSectionClick = item => {
            StoreManager.update("#AppDrawerComponent", {
                  isMenuOpen: false,
                  activeSection: item
            });
            StoreManager.update("#PlaygroundComponent", {
                  activeSection: item
            })
      }
      const generateSections = () => {
            const keys = Object.keys(sections[route.title]);
            return keys.map(key => {
                  const component = [];
                  component.push(
                        <Fragment>
                              <Divider className={classes.divider} />
                              <List>
                                    <ListSubheader component="div" className={classes.listSubHeader}>
                                          {key}
                                    </ListSubheader>
                                    {sections[route.title][key].map((text, index) => {
                                          const MappedIcons = iconSvgMappings[route.title][text];
                                          return (
                                                <ListItem button className={`${classes.listItem} ${activeSection === text && classes.activeSection}`} onClick={() => onSectionClick(text)}>
                                                      <ListItemIcon className={classes.icons}>
                                                            <MappedIcons className={classes.iconSvg} />
                                                      </ListItemIcon>
                                                      <ListItemText primary={text} className={classes.sectionText} />
                                                </ListItem>
                                          )
                                    })}
                              </List>
                        </Fragment>
                  )
                  return component;
            })
      }
      const onMenuClose = () => {
            StoreManager.update("#AppDrawerComponent", {
                  isMenuOpen: false
            });
      }
      const onMenuOpen = () => {
            StoreManager.update("#AppDrawerComponent", {
                  isMenuOpen: true
            });
      }
      const onCloseClick = () => {
            onMenuClose();
      }
      const sideList = side => (
            <div
                  className={classes.list}
                  role="presentation"
            >
                  <div className={classes.logoSectionDrawer}>
                        <div className={classes.logoContainer}>
                              <IconButton className={classes.iconContainer} disabled>
                                    <img className={classes.logo} src={logo} alt="logo" />
                              </IconButton>
                        </div>
                        <Typography className={`${classes.title} ${classes.titleMobileExtraCss}`} variant="h6" color="inherit">
                              Analytixa
                        </Typography>
                        <div className={classes.closeContainer}>
                              <IconButton className={classes.iconContainer}>
                                    <CloseRounded onClick={onCloseClick} />
                              </IconButton>
                        </div>
                  </div>
                  <Divider className={classes.dividerMain} />
                  <List>
                        <ListItem button className={`${classes.listItem} ${activeSection === "Dashboard" && classes.activeSection}`} onClick={() => onSectionClick("Dashboard")}>
                              <ListItemIcon className={classes.icons}>
                                    <DashboardRounded />
                              </ListItemIcon>
                              <ListItemText primary="Dashboard" className={classes.sectionText} />
                        </ListItem>
                  </List>
                  {generateSections()}
            </div>
      )
      return (
            <div className={classes.root}>
                  {
                        theme.isMobile ?
                              <SwipeableDrawer
                                    className={classes.drawer}
                                    classes={{ paper: classes.drawerPaperMobile }}
                                    open={isMenuOpen}
                                    onOpen={onMenuOpen}
                                    onClose={onMenuClose}
                              >
                                    {sideList('left')}
                              </SwipeableDrawer>
                              :
                              <Drawer
                                    className={classes.drawer}
                                    variant="permanent"
                                    classes={{ paper: classes.drawerPaper }}
                              >

                                    <div className={classes.toolbar} />
                                    <List>
                                          <ListItem button className={`${classes.listItem} ${activeSection === "Dashboard" && classes.activeSection}`} onClick={onSectionClick}>
                                                <ListItemIcon className={classes.icons}>
                                                      <DashboardRounded />
                                                </ListItemIcon>
                                                <ListItemText primary="Dashboard" className={classes.sectionText} />
                                          </ListItem>
                                    </List>
                                    {generateSections()}
                              </Drawer>
                  }
            </div>
      );
}

export const AppDrawer =
      createStore({
            storeID: "#AppDrawerComponent",
            Component: Component,
            state: {
                  isMenuOpen: false,
                  activeSection: "Lines",
                  sections: {
                        Studio: {
                              Categorial: ['Lines', 'Bars', 'Area'],
                              Coordinate: ['Scatter Plot', 'Bubble Plot'],
                              Statistical: ['Pie', 'Donut'],
                              Spacial: ['Heat Maps', 'World Maps']
                        },
                        Insights: {
                              Collabrate: ['Dashboard'],
                              Audience: ['Demographics', 'Geo'],
                              Analysis: ['Predictive', 'Performance', ''],
                        }
                  },
                  iconSvgMappings: {
                        Studio: {
                              "Lines": ShowChartRounded,
                              "Bars": BarChartRounded,
                              "Area": FilterHdrRounded,
                              "Scatter Plot": ScatterPlotRounded,
                              "Bubble Plot": BubbleChartRounded,
                              "Pie": PieChartRounded,
                              "Donut": DonutLargeRounded,
                              "Heat Maps": ViewCompactRounded,
                              "World Maps": MapRounded,
                              "Section 9": BlurLinearRounded,
                              "Section 10": AttachMoneyRounded
                        },
                        Insights: {

                        }
                  }
            }
      });