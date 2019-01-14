import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import color from 'colors';

/*eslint-disable no-console */

process.env.NODE_ENV = 'production';
console.log('Generating production bundle'.blue);

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings) {
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpacks stats: ${stats}`);

  console.log('App is compiled and production ready'.green);

  return 0;
});
