# gulp-jekyll
## Skeleton of Gulp workflow with Jekyll

	npm install

	gem install bundler
	bundle install

	gulp

gulp-jekyll includes [Bourbon](https://github.com/thoughtbot/bourbon) mixin library and [Neat](https://github.com/thoughtbot/neat) semantic grid framework by default. All `.scss` and `.css` files will be combined into a single `all.css` file at build time. Drop a new `.scss` file into the `_css` directory and restart `gulp`. `@import` it in `main.scss` for an easy modular workflow.

gulp-jekyll supports multiple JavaScript files. Drop a new `.js` file in the `_js` directory and restart `gulp`. All JavaScript will be combined into a single `all.js` file at build time.

There is no need to restart `gulp` when you edit existing `.js` files and `.scss` files. The watcher will recomiple the `all.*` files on the fly.