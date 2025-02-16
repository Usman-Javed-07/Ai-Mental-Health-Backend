 => Backend Setup
    1) npm init -y 
    2) npm install express
    3) npm install dotenv
    4) npm install nodemon
    5) npm install cors
    6) npm install bcrypt
    7) npm install body-parser
    8) npm install jsonwebtoken
    9) npm install mongoose
    10) npm install sequelize
    11) npm install multer

=> Folder Structure   
        
    |__ config              # Database Connection   
    ├── .env                # Environment variables
    ├── package.json        # Project dependencies
    ├── index.js            # Main server file
    ├── routes/             # Folder for route files
    ├── controllers/        # Folder for business logic
    └── models/             # Folder for database models

=> Database user name and password 
    . password : Mentalhealth1122
    . username : usmanjaved0816


=> .env file  => this is the project main file which connected to your database and your localhost port 
=> keep in mind this is the main file do not share this to anyone not in your git-hub and also keep in mind this well not work because this is coonected to my database if you want to connect to your database make mongodb account and create new cluster give api address 0000 and create drive that give you username and password after that you well be able to connect to database

    MONGO_URI=mongodb+srv://username:password@cluster0.sherm.mongodb.net/yourDatabaseName?retryWrites=true&w=majority
    JWT_SECRET=your_secret_key
    PORT=5000