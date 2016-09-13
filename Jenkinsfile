node {
  try {
    stage 'Setup'
      deleteDir()
      checkout scm
      def nodeHome = tool 'v6.4.0'
      env.PATH = "${nodeHome}/bin:${env.PATH}"
      sh 'which node; node --version; which npm; npm --version'

    stage 'Install'
      sh 'npm install'

    stage 'Test'
      sh 'npm test'

    stage 'Build'
      sh 'npm run build'
  } catch (err) {
    slackSend color: 'danger', message: "${env.BUILD_TAG} has failed `${err}`\n${env.CHANGE_TITLE}\n${env.JOB_URL}\n${env.CHANGE_URL}"
    currentBuild.result = 'FAILURE'

    // DEV: Re-throw error to trigger marking failed step as failure
    throw err
  }
}
