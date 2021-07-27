pipeline {
    agent any
    environment {
        CI = 'true'
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh "docker-compose build"
            }
        }
        stage('Deliver') {
            steps {
                sh "docker-compose up"
            }
        }
    }
}
