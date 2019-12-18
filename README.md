# Node-Gulp-Setup
The instruction manual for setting up Node and Gulp on a Windows machine.

_**Just a note:** the node, nvm, and gulp versions are specific to my particular situation at my place of employment. Feel free to change the versions to suit your needs. The same goes for the package.json file. Adjust to meet your needs._

* Install Node Version Manager ([releases](https://github.com/coreybutler/nvm-windows/releases)) and accept all the defaults.
* Open a Command Prompt
  * Enter nvm install 9.11.1
  * Enter nvm use 9.11.1
  * Enter npm -v and verify the version is 5.6.0
  * Enter npm install --global gulp-cli@2.0.1 
* In Windows Explorer, create a folder to store your Git repos.
* Copy package.json to that folder
* cd your command prompt to that folder
  * Enter npm install --save-dev
* 💲💲💲
