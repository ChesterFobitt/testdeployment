pipeline {
    agent any
    environment {
        CI = 'true'
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh "docker-compose build"
                sh "docker-compose up -d"
            }
        }
    }
}
