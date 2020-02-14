import React from 'react';
import { Lines } from '../Designs/Categorial/Lines';
import { Area } from '../Designs/Categorial/Area';
import { Bars } from '../Designs/Categorial/Bars';
import { Pie } from '../Designs/Statistical/Pie';
import { Donut } from '../Designs/Statistical/Donut';
import { ScatterPlot } from '../Designs/Coordinate/ScatterPlot';
import { BubblePlot } from '../Designs/Coordinate/BubblePlot';
import { HeatMaps } from '../Designs/Spacial/HeatMaps';

import { Styles } from '../../styles/Playground';
import { createStore, StoreManager } from '@rootzjs/store';

const ComponentMap = {
      Lines: Lines,
      Area: Area,
      Bars: Bars,
      Pie: Pie,
      Donut: Donut,
      "Heat Maps": HeatMaps,
      "Scatter Plot": ScatterPlot,
      "Bubble Plot": BubblePlot
}

const Component = ({ props, state }) => {
      const classes = Styles();
      const Section = ComponentMap[state.activeSection];
      return (
            <main>
                  <div className={classes.root}>
                        <Section />
                  </div>
            </main>
      )
}

export const Playground =
      createStore({
            storeID: "#PlaygroundComponent",
            Component: Component,
            state: {
                  activeSection: StoreManager.getState("#AppDrawerComponent").activeSection
            }
      })