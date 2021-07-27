pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 4000:4000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh "cd / | ls"
                sh "cd /usr | ls"
                sh "/usr/bin/docker-compose build"
            }
        }
        stage('Deliver') {
            steps {
                sh "/usr/bin/docker-compose up"
            }
        }
    }
}
