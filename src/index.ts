// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the JupyterLab Calm Theme.
 */

const plugin: JupyterFrontEndPlugin<void> = {
  id: "@nimbous/jupyterlab-calm-theme:plugin",
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = "@nimbous/jupyterlab-calm-theme/index.css";

    manager.register({
      name: "JupyterLab Calm",
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;