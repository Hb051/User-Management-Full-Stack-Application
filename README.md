# User-Management-Full-Stack-Application

A complete CRUD application with **FastAPI** backend and **React** frontend, connected to **MySQL** database.

Features

✅ **Create** new users with validation  
✅ **Read** all users from database  
✅ **Update** user information  
✅ **Delete** users with confirmation  
✅ **Beautiful responsive UI** with gradient design  
✅ **Real-time synchronization** between frontend and backend  
✅ **Auto-generated API documentation** (Swagger UI)  
✅ **CORS enabled** for secure cross-origin requests 

Tech Stack

Backend
- **FastAPI** - Modern, fast Python web framework
- **SQLAlchemy** - Python SQL toolkit and ORM
- **MySQL** - Relational database management system
- **Pydantic** - Data validation using Python type annotations
- **Uvicorn** - Lightning-fast ASGI server

Frontend
- **React 18** - JavaScript library for building user interfaces
- **Axios** - Promise-based HTTP client
- **CSS3** - Modern styling with gradients and animations

✅ Prerequisites

Install these first:

Python 3.9+

Node.js 14+

MySQL 8.0+

🔧 Backend Setup

Go to backend folder

cd backend


Create virtual environment

Windows

python -m venv venv
venv\Scripts\activate


Mac / Linux

python3 -m venv venv
source venv/bin/activate


Install backend packages

pip install -r requirements.txt


Create MySQL database

CREATE DATABASE userdb;


Update database details

Open database.py and add your MySQL password:

DATABASE_URL = "mysql+pymysql://root:YOUR_PASSWORD@localhost/userdb"


Start backend server

uvicorn main:app --reload


Backend runs at:
👉 http://127.0.0.1:8000

API docs:
👉 http://127.0.0.1:8000/docs

🎨 Frontend Setup

Go to frontend folder

cd frontend


Install frontend packages

npm install


Start frontend

npm start


Frontend runs at:
👉 http://localhost:3000

🧪 Test the App

Make sure MySQL is running

Start Backend (Terminal 1)

Start Frontend (Terminal 2)

Open browser:
👉 http://localhost:3000

Test Features

Add user

View users

Edit user

Delete user

#  Setup Guide

## Quick Start

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Detailed Setup

### 1. MySQL Configuration

Create database:
```sql
CREATE DATABASE userdb;
```

### 2. Environment Variables

Create `backend/.env`:
```
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_NAME=userdb
```

### 3. Database Connection

Update `backend/database.py` if not using .env:
```python
DATABASE_URL = "mysql+pymysql://root:YOUR_PASSWORD@localhost/userdb"
```

### 4. Verify Installation

Backend health check:
```
http://127.0.0.1:8000
```

API documentation:
```
http://127.0.0.1:8000/docs
```

Frontend:
```
http://localhost:3000
```

## Troubleshooting

### Backend won't start
- Check MySQL is running
- Verify database credentials
- Ensure virtual environment is activated

### Frontend can't connect
- Confirm backend is running on port 8000
- Check CORS settings in main.py
- Verify API_URL in UserManagement.js

### Database errors
- Create database: `CREATE DATABASE userdb;`
- Check MySQL service is running
- Verify connection string format
