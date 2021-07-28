pipeline {
    agent any
    environment {
        CI = 'true'
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh "docker-compose up -d --no-deps --build"
            }
        }
    }
}
