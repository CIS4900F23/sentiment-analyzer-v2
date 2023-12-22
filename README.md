# Yoobi

## About
This project is an exercise in converting a [monolithic application](https://github.com/loganhagen/sentiment-analyzer) into a microservices-based application. Previously, we had a containerized web application featuring front-end, back-end and database containers. In this new iteration, the backend container has been broken down into 2 microservices- each performing a critical task for the application. While this may seem like adding complexity to the project, there are benefits in implementing a microservice architecture, particularly in our CI workflows. Additionally, the repository contains the Kubernetes manifests required to deploy the application onto a local cluster (we used minikube).

## How To Use
1. Clone repository.
2. Navigate to the root folder of the repository.
3. Initiate container build and run by using command ```docker compose up``` or run in detached mode with ```docker compose up -d```.
4. Navigate to ```localhost:3000```.
5. Enter ```docker compose down --volume``` to tear down the container stack and delete the local volume.

## Note
- The Q&A module uses the OpenAPI API to generate responses. This requires an OpenAI API key. If you have one that you would like to use, enter the following command ```echo OPENAI_API_KEY=apikeyhere > .env``` to create an environment file that Docker Compose will use during the build.

## Known Issues
- Occasionally, the graph for the sentiment analysis for all posts takes longer than expected to load.
- Due to differences in how Linux and Windows handle line endings, Windows users may need to utitlize the following flag when cloning the repository: ```--config core.autocrlf=input```.
