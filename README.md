# Full Stack Assignment - Backend Task

This is the Backend for the full stack project. 

**The following tools were utilized for the project:**

- Node JS
- Express JS
- MongoDB
- mongoose
- TypeScript


## Deployment Instructions:

#### Prerequisites:

- Node.js and npm should be installed on your system.
- MongoDB server should be running.


#### Step 1: Clone the Project

Open a terminal and run the following command to clone this project:
```bash
git clone https://github.com/shyamkrishnanpr/AstroBackend.git
 
```
#### Step 2: Navigate to the Project Directory

Navigate to the `AstroBackend` directory within the cloned project using the command:
```bash
cd AstroBackend
 
```
#### Step 3: Install Dependencies

Run the following command to install the required packages locally for the project.
```bash
  npm install
 
```

#### Step 4: Rename and Configure .env File

- Rename the `sample.env` file to `.env`
- Open the `.env` file and fill in your configuration details, such as the database URL.



#### Step 5: Start the Backend Server

Run the following command to start the Node Js Backend server.

```bash
  npm run dev
 
```


## API Reference

#### POST API to Register Astrologer

```http
  POST /api/astrologers/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Astrologer's name |
| `gender` | `string` | **Required**. Astrologer's gender. |
| `email` | `string` | **Required**. Astrologer's email address |
| `languages` | `array of string` | **Required**. Languages |
| `specialties` | `array of string` | **Required**. Specialties. |


#### Conclusion

Thank you for following these deployment instructions to set up the Node JS project. By following these steps, you've successfully configured the Backend components.

For any questions or clarifications, please feel free to contact me at shyamkrishnasby@gmail.com

#### Thank you for reviewing my submission.
