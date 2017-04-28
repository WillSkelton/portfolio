'use strict';

require('./_projects.scss');

module.exports = ['$log', '$location', '$rootScope', ProjectsController];

function ProjectsController($log, $location) {
  let url = $location.url();

};
