
# Smart Presenter ![start with why](https://img.shields.io/badge/SMART-PRESENTER-brightgreen.svg?style=flat)
  

A framework for easily creating beautiful presentations using HTML. [Check out the live demo](http://sunucu.zeka.io).

  

Smart-presenter is a customized version of  [reveal.js](https://github.com/hakimel/reveal.js). Smart-presenter comes with a broad range of features including reveal.js features.


  
## Table of contents

  

-  [Installation](#installation)

-  [Folder Structure](#folder-structure)

-  [Instructions](#instructions)

-  [Contributors](#contributors)

-  [License](#license)

  

## Installation

  
### Docker

Running application inside docker container:
```sh
docker-compose up -d
```
Container is using port `9000`. You can modify it in `docker-compose.yml`. Do not forget `--build` flag after configuration changes. 

### Nodejs

Some smart-presenter features, like hand detection, sound classification, and image classification, require that presentations run from a local webserver. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the smart-presenter source code.

  

1. Install [Node.js](http://nodejs.org/) (4.0.0 or later) 

  

3. Clone the smart-presenter repository

```sh

$ git clone https://github.com/zeka-io/smart-presenter.git

```

  

1. Navigate to the smart-presenter folder

```sh

$ cd smart-presenter

```

  

1. Install dependencies

```sh

$ npm install

```

  

1. Serve the presentation and monitor source files for changes

```sh

$ npm start

```

  

1. Open <http://localhost:8000> to view your presentation

  

You can change the port by using `npm start -- --port=8001`.

  

## Folder Structure

  

-  **css/** Core styles without which the project does not function

-  **js/** Like above but for JavaScript

-  **plugin/** Components that have been developed as extensions to reveal.js

-  **lib/** All other third party assets (JavaScript, CSS, fonts)

  
## Instructions

  

### Hand Detection

  ToDo
  
### Sound Classification

  ToDo
  
### Image Classification

  ToDo

## Contributors

- [Abdurrahman CÜCE](https://github.com/abdurrahmancuce)
- [Ulaş Kılış](https://github.com/ulaskilic)
- [Cansu AL](https://github.com/cansual)
- [İzni Burak Demirtaş](https://github.com/izniburak)
  
## License

MIT licensed
