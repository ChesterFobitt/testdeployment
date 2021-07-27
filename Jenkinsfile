pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 4000:4000'
        }
    }
    environment {
        CI = 'true'
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh "ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose"
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
