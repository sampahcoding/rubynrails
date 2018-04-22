# README

Cheatsheet:

* rake tmp:cache:clear if asset not updated
* assets stylesheet:
  using gulp to compile all sass files easily in nested folder
  then use webpack to hot reload it
  command:
    gulp clean:templates
    gulp build
    gulp watch
    ./bin/webpack-dev-server to hot reload js and css
