var Generator = require('yeoman-generator');
var path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', { type: String, required: true });
  }

  // Custom stuff
  initializing() {
    this.log(
      `Creating ${this.options.appname}, a simple Elm project for you...`
    );

    this.composeWith(require.resolve('generator-npm-init/app'), {
      'skip-name': true,
      'skip-main': true,
      'skip-test': true,
      'skip-keywords': true,
      name: this.options.appname,
      keywords: ['elm'],
      scripts: {
        build: 'elm make src/Main.elm --output=elm.js --debug',
        dev: 'npm run watch -s & npm run start',
        start: 'elm reactor -p 8082',
        test: 'echo "Error: no test specified" && exit 1',
        watch: "chokidar '**/*.elm' -c 'npm run build' --initial"
      }
    });
  }

  prompting() {}

  writing() {
    this.log('Copying files...');

    this.fs.copyTpl(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      {
        appName: this.options.appname || 'elm-simple-app'
      }
    );

    this.fs.copyTpl(
      this.templatePath('Main.elm'),
      this.destinationPath('src/Main.elm')
    );
  }

  install() {
    this.log('Installing dependencies...');
    this.npmInstall(['elm', 'chokidar-cli'], { 'save-dev': true });
  }

  end() {
    this.log('Installing Elm packages...');
    this.spawnCommand('elm-package', ['install']); // Has to be in `end` because `npmInstall` runs async.
  }
};
