User Management Full-Stack Application
A beginner-friendly CRUD application built with FastAPI (Backend) and React (Frontend), connected to MySQL database.

Features

✅ Create users with validation
✅ Read all users from database
✅ Update user information
✅ Delete users
✅ Responsive UI with modern design
✅ RESTful API with auto-generated Swagger documentation
✅ CORS enabled for frontend-backend communication


🛠️ Tech Stack
Backend: FastAPI, SQLAlchemy, MySQL, Pydantic, Uvicorn
Frontend: React, Axios, CSS3

📁 Project Structure
user-management-fullstack/
│
├── backend/              # FastAPI Backend
│   ├── main.py          # Entry point + CORS
│   ├── crud.py          # CRUD operations
│   ├── database.py      # DB connection
│   ├── models.py        # Database models
│   ├── schemas.py       # Data validation
│   └── requirements.txt
│
├── frontend/            # React Frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── UserManagement.js
│   │   └── UserManagement.css
│   └── package.json
│
└── README.md

⚙️ Installation
Prerequisites

Python 3.9+
Node.js 14+
MySQL 8.0+


Backend Setup
bash# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Create MySQL database
mysql -u root -p
CREATE DATABASE userdb;

# Update database.py with your MySQL password
DATABASE_URL = "mysql+pymysql://root:YOUR_PASSWORD@localhost/userdb"

# Run backend
uvicorn main:app --reload
Backend runs on: http://127.0.0.1:8000
API Docs: http://127.0.0.1:8000/docs

Frontend Setup
bash# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run frontend
npm start
```

**Frontend runs on:** `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| POST | `/users` | Create new user |
| GET | `/users` | Get all users |
| PUT | `/users/{id}` | Update user |
| DELETE | `/users/{id}` | Delete user |

---

## 🧪 Testing

1. ✅ Start MySQL
2. ✅ Start Backend: `uvicorn main:app --reload`
3. ✅ Start Frontend: `npm start`
4. ✅ Open `http://localhost:3000`
5. ✅ Test CRUD operations

---

## 🎯 Key Learning Points

### Backend
- RESTful API design with FastAPI
- Database operations using SQLAlchemy ORM
- Request/response validation with Pydantic
- CORS configuration for cross-origin requests
- Auto-generated API documentation

### Frontend
- React hooks (useState, useEffect)
- HTTP requests with Axios
- Form handling and validation
- State management
- Responsive CSS design

---

## 📦 Dependencies

**Backend:**
```
fastapi
uvicorn
sqlalchemy
pymysql
pydantic
```

**Frontend:**
```
react
axios

