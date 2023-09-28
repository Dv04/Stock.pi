# Stock.Pi

![Stock.pi Logo](/public/logo.png)

> A Market Sentiment Analysis Tool for Stock Market Prediction and Analysis

A Chatbot which helps user make better decision regarding their stocks using market sentiment analysis.

## Table of Contents

- [Stock.Pi](#stockpi)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Dependencies](#dependencies)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
  - [License](#license-1)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

Clone the git repository

```bash
git clone https://github.com/Dv04/HackInfinity.git && cd HackInfinity
```
Install the dependencies

```bash
npm install
```

## Usage

Run the server

```bash
npm run dev
```

and navigate to localhost:3000 (type the following in your browser)

```bash
localhost:3000
```

## Dependencies

-   [React](https://reactjs.org/)
-   [Node](https://nodejs.org/en/)
-   [Next.js](https://nextjs.org/)
-   [Natural](https://www.npmjs.com/package/natural)
-   [apos-to-lex-form](https://www.npmjs.com/package/apos-to-lex-form)
-   [axios](https://www.npmjs.com/package/axios)
-   [Spell Corrector](https://www.npmjs.com/package/spellcorrector)
-   [News Api](https://newsapi.org/)
-   [Firebase Google](https://firebase.google.com/)

## Features

-   Login and Signup
-   Authentication using Firebase
-   Data scrapping

    -   news scrapping

-   Algorithm which takes input the data scrapped and predicts the future of the stock in a range

    - positive review
    - negative review
    - neutral review
    
-   Storing the previous searched stock's results.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Dv04/Stock.pi/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Dv04/Stock.pi/tags). 

## Authors

* **Dev Sanghvi** - *Initial work* - [Dv04](https://github.com/Dv04)

See also the list of [contributors](https://github.com/Dv04/Stock.pi/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
This code has been released under the [MIT](https://opensource.org/licenses/MIT) License.
