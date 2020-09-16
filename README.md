# @nimbous/jupyterlab-calm-theme

![Github Actions Status](https://github.com/nimbous/jupyter-calm-theme/workflows/Build/badge.svg)

Jupyter Calm Theme for Jupyter Lab 2



## Requirements

* JupyterLab >= 2.0

## Install

```bash
jupyter labextension install jupyter-calm-theme
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to jupyter-calm-theme directory

# Create a conda environment
conda create -n jupyterlab-ext python=3.7
# Activate conda jupyterlab-ext
conda activate jupyterlab-ext 
# Install jupyter lab
pip install jupyterlab
# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension install . --no-build
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

Now every change will be built locally and bundled into JupyterLab. Be sure to refresh your browser page after saving file changes to reload the extension (note: you'll need to wait for webpack to finish, which can take 10s+ at times).

### Uninstall

```bash
jupyter labextension uninstall jupyter-calm-theme
```

## Issues
Please report any issues you might have and I'll try to get it fixed as soon as possible.
