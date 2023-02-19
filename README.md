# My pride

## This application contains own configs: 

* webpack
* typescript
* eslint
* stylelint
* jest
* react-testing-library
* storybook
* loki
* babel

## Testing

* jest (unit-tests)
* react-testing-library (unit ui tests)
* storybook + loki (regression testing)

### Webpack config

Webpack config decomposed(***buildLoaders, buildPlugins, buildResolvers, buildWebpackConfig***)

*Comment*: 
Different loaders and plugins are used depending on environment variable. (***mode***: *development*/*production*)

### GitHub Actions


This web app contains continuous integration using gGitHub actions pipeline. Where jobs are launched for every push and pull request  *** *Main branch* ***.
Jobs include: Build, Testing, Linting (ts & scss)

### Application architecture

FSD - Feature Sliced Design (*https://feature-sliced.design/*)

