<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">NAMASTE-YATRA</h1>
</p>
<p align="center">
    <em>Make your travell easy with Namaste Yatra</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Shashi-Srivastav/Namaste-Yatra?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Shashi-Srivastav/Namaste-Yatra?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Shashi-Srivastav/Namaste-Yatra?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Shashi-Srivastav/Namaste-Yatra?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Passport-34E27A.svg?style=flat&logo=Passport&logoColor=white" alt="Passport">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

<div>


# Namaste Yatra File Structure

```plaintext
Namaste-Yatra/
├── .git/                         # Git configuration and metadata
│   ├── ...
├── .github/                      # GitHub-specific files
│   ├── workflows/                # GitHub Actions workflows
│   │   ├── ...
│   └── ...
├── controllers/                  # Controllers for handling requests
│   ├── ...
│   └── ...
├── models/                       # Data models or schemas
│   ├── User.js
│   ├── Listing.js
│   └── ...
├── public/                       # Public static files
│   ├── assets/                   # Static assets (images, fonts, etc.)
│   │   ├── logo.png
│   │   └── ...
│   ├── index.html                # Main HTML file
│   ├── favicon.ico               # Favicon
│   └── manifest.json             # Web app manifest
├── routes/                       # Route definitions
│   ├── index.js
│   └── ...
├── utils/                        # Utility functions and helpers
│   ├── formatDate.js
│   └── ...
├── views/                        # Views for rendering templates
│   ├── Home.js
│   ├── Listings.js
│   └── ...
├── .env                          # Environment variables
├── .gitignore                    # Git ignore file
├── README.md                     # Project documentation
├── SECURITY.md                   # Security-related documentation
├── app.js                        # Main application entry point
├── cloudConfig.js                # Configuration for cloud services
├── middleware.js                 # Middleware for request processing
├── package-lock.json             # NPM lock file
├── package.json                  # NPM package configuration
├── schema.js                     # Database schema definitions
└── vercel.json                   # Vercel deployment configuration
```

## Technologies Used

 - [JavaScript (Node.js)]()
 - [Express.js]()
 - [MongoDB]()
 - [Mongoose]()
 - [Bootstrap]()
 - [Passport.js]()
 - [Mapbox]()
 - [Cloudinary]()
 - [EJS]()
 - [Joi]()










## Features
# Namaste Yatra: Key Features

## User Authentication and Security:
- **Passport Integration:** Secure sign-up and login.
- **Express Sessions:** Persistent user sessions in MongoDB Atlas.

## Dynamic Listing Creation:
- **Cloudinary Image Uploads:** Supports PNG, JPG, JPEG up to 500KB.
- **Joi Validation:** Ensures data integrity during listing creation.

## Interactive Maps and Geolocation:
- **Mapbox Integration:** Interactive maps with zoom and full-screen features.
- **Geocoding:** Converts text locations to coordinates.

## Comprehensive Listing Details:
- **Detailed Information:** Displays name, location, price, and user reviews.
- **Map Integration:** Embedded Mapbox maps for each listing.

## User Reviews and Community Interaction:
- **Review System:** Users can leave detailed reviews.
- **Map-Enhanced Reviews:** Reviews include geolocation data.

## Responsive Design:
- **Bootstrap Framework:** Consistent UI across desktops, tablets, and mobiles.

## Scalable Data Management:
- **Mongoose and MongoDB:** Flexible and scalable data storage.
- **MongoDB Atlas:** Reliable cloud-based storage.

## Robust Back-End Architecture:
- **Express.js Framework:** Efficient server-side structure.
- **MVC Pattern:** Organized and scalable codebase.

## Enhanced User Experience:
- **Interactive Elements:** Zoomable and full-screen maps.
- **Performance Optimization:** Quick load times with Cloudinary.

## Comprehensive Schema Validation:
- **Joi Validation:** Maintains data consistency and integrity.

## Secure and Efficient Middleware:
- **Express Middleware:** Manages request processing and authentication.

## Scalable Cloud Integration:
- **Cloudinary for Image Management:** Efficient media handling.
- **MongoDB Atlas for Data Storage:** Reliable and scalable solutions.
## Environment Variables

```javascript
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
MAP_TOKEN=
ATLASDB_URL=
SECRET=dtrvstyjtvhdtcd
```


## Screenshots

![App Screenshot](https://github.com/Shashi-Srivastav/Namaste-Yatra/assets/119119389/21c1c9d1-9101-4235-bdd8-ec9380db50af)
---
![](https://github.com/Shashi-Srivastav/Namaste-Yatra/assets/119119389/5920edce-37c1-4814-82ef-c28b6999116d)
---
![](https://github.com/Shashi-Srivastav/Namaste-Yatra/assets/119119389/85c60a10-f1d6-4bf3-b66d-5a2272bafb0a)
---
![](https://github.com/Shashi-Srivastav/Namaste-Yatra/assets/119119389/732fa7c3-78db-4bf0-9f60-61a77d61edce)
---
# Mobile View

![](https://github.com/Shashi-Srivastav/Namaste-Yatra/assets/119119389/e2c1aca0-1be3-4d6d-8809-f5022233c7b6)
---


## Run Locally

Clone the project

```bash
  git clone https://github.com/Shashi-Srivastav/Namaste-Yatra
```

Go to the project directory

```bash
  cd Namaste-Yatra
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://shashi-srivastava.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shashi-srivastava01/)
[![GitHub](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://github.com/Shashi-Srivastav)


## Feedback

If you have any feedback, please reach out to us at shashisrivastav95@gmail.com


