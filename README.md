<header style="height: 100px; background: linear-gradient(to right, #000046, #1CB5E0);"><h1 style="font-size: 65px; text-align: center"><strong></strong>E-Commerce Backend</h1></header>

<br />

[![${license}](https://img.shields.io/badge/license-mit-blue)](#license)


<br />

> # [Description](#description)
This is to demonstrate the back-end of an e-commerce store, using an API interface. It uses a working Express.js API to use Sequelize to interact with a MySQL database.

<br />
<br />

---
<details>
<summary style="font-size: 25px">Table of Contents</summary> 

- [Description](#description)
- [Getting Started](#getting-started)
  - [Project Status](#project-status)
  - [Installation](#installation)
  - [Useage](#useage)
  - [Demonstration](#demonstration)
  - [Contributing Guidelines](#contributing)
  - [Test Instructions](#test) 
  - [License](#license)
- [Credits](#credits)
  - [Contributors](#contributors)
  - [Acknowledgements](#acknowledgements)
- [Questions](#questions)
</details>

<br />
<br />

---

> # [Getting Started](#getting-started)

<br />

## [Project Status](#project-status)
    MVP - Minimal Viable Product

<br />

To get a look at the code used for this application, checkout our <a href="https://github.com/werthird/E-Commerce-Backend-Module-13">GitHub Repo!</a> 

<br />

<u>*Click on this [**LINK**](https://drive.google.com/file/d/1mlKcP4N2z00hUJPYBmw8iTNiAbQJuZnH/view) to get a walk through video of how to use the application.*</u>

<br />

## [Installation](#installation)
If you are wanting to use this application on your own system, you will need to know a few things:

1.  There is no front-end or command-line that will allow interaction with this code. The code is interacted with through a API interface like Insomnia or Postman.

2. Clone down this repo onto your local system.

3. After doing so, open a terminal in the E-Commerce-Backend-Module-13 file, and enter the following code to download the needed modules:
	```
	npm i
	```
4. Open insomnia and use the GET, POST, PUT, or DELETE routes to interact with this backend.

<br />

## [Useage](#useage)
This is a command-line application that will take you through a series of prompts.

1. After the module is installed on your local system, you are ready to use this app. To start the server, enter this into the terminal.
	```
	node server.js
	```

2. You are not able to interact with the interface. Follow the steps below:

    I. **GET Route**
    ```
    There are six possible GET routes

        1. /api/products - will return all the Products, plus their associated Categories and Tags.

        2. /api/products/:id - :id is the Products id; will return a single product, plus associated Category and Tags.

        3. /api/categories - will return all Categories and associated Products.

        4. /api/categories/:id - :id is the Categories id; will return a single Category and associated Product

        5. /api/tags - will return all the Tags, plus their accosiated Products.

        6. /api/tags/:id - :id is Tag id; will return a single Tag and associate Product
    ```

    II. **POST Route**
    ```
    There are three possible POST routes:

      1. /api/products - req.body syntax is:
          {
            "product_name": "STRING",
            "price": DECIMAL,
            "stock": INTEGER,
            "category_id": INTEGER,
            "tagIds": [INTEGER, ect.]
          }

      2. /api/categories - req.body syntax is:
          {
            "category_name": "STRING"
          } 

      3. /api/tags - req.body syntax is:
          {
            "tag_name": "STRING"
          }
    ```

    III. **PUT Route**
    ```
    There are three possible PUT routes:

        1. api/products/:id - :id is Product id; req.body syntax it:
          {
            "product_name": "STRING",
            "price": DECIMAL,
            "stock": INTEGER,
            "category_id": INTEGER,
            "tagIds": [INTEGER, ect.]
          }
        2. /api/categories/:id - :id is Categories id; req.body syntax it:
          {
            "category_name": "STRING"
          } 

      3. /api/tags/:id - :id is Tags id; req.body syntax it:
          {
            "tag_name": "STRING"
          }
    ```

    IV. **DELETE Route**
    ```
    There are three possible DELETE routes:

      1. api/products/:id - :id is Product id
      
      2. /api/categories/:id - :id is Categories id
        
      3. /api/tags/:id - :id is Tags id
  
    ```


<br />

<hr />

## [Demonstration](#demonstration)

<br />

<u>*Click on this [**LINK**](https://drive.google.com/file/d/1mlKcP4N2z00hUJPYBmw8iTNiAbQJuZnH/view) to get a walk through video of how to use the application.*</u>

<br />

<img style="text-align: center; border: solid 2px white; width:100%;height:100%" src="./Assets/ecommerce-backend-insomnia-screenshot.jpg" alt="Insomnia demonstrating a GET route to tags database"/>

<br />

## [Contributing Guidelines](#contributing)
No contributing guidelines. For any suggestions or comments, please see [Questions](#questions) section below.

<br />

## [Test Instructions](#test)
No testing instructions at this time.

<br />

## [License](#license)
Distributed under the MIT License. See LICENSE.txt for more information.

<br />
<br />

---

> # [Credits](#credits)

<br />

## [Contributors](#contributors)

This is built as a UCF Coding bootcamp homework assignment. There was some pre-written code that had to be finished and formulated to meet the assignments requirements.

Finished by Devin Reilly

<br />

## [Acknowledgements](#acknowledgements)
- UCF GitLab starter code
- [The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) - README Template 
- UCF Instructor **John Dinsmore**, and TA's, **Kristofer Marshall** and **Rider Cogswell**
- Students of UCF Coding Boot Camp, in class, on Slack and on Discord
- Research articles from Google Search, ChatGPT, MDN Docs, W3Schools

<br />
<br />

---

> # [Questions](#questions)

Here is a link to our <a href="https://github.com/werthird">GitHub profile page!</a>

Or send us an <a href="mailto: werthird@aol.com?subject=SVG Logo Maker Feedback">Email!</a>