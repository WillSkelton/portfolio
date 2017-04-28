'use strict';

require('./_resume.scss');

module.exports = ['$log', '$location', '$rootScope', ResumeController];

function ResumeController($log, $location) {
  let url = $location.url();

};
