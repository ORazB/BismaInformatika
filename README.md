<h1 align="center">Amphoreus Memorial</h1>

<p align="center">
  <a target="_blank" href="https://pbs.twimg.com/media/G5JiYQQb0AAnxGT?format=jpg&name=4096x4096">
    <img src="https://pbs.twimg.com/media/G5JiYQQb0AAnxGT?format=jpg&name=4096x4096" width="400" />
  </a>
</p>

<p align="center"><i>"We will remember this world."</i> 🌟</p>

---

## 📌 Project Overview

This website project was developed as part of a **PKL (Praktik Kerja Lapangan) task assigned by Bisma Informatika**.  
The project is designed to provide information related to **offline training programs**.

---

## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript
- Prisma ORM
- MySQL
- Tailwind CSS
- Node.js

## Library
- Clerk
- Swiper.js
- UploadCare

---

## ✅ Requirements

Before running this project, make sure the following are installed:

- Node.js (version 18 or newer)
- Git
- XAMPP (MySQL)

---

## 🚀 How to Run This Project

Follow the steps below **in order**.

1. Clone the repository and enter the project folder  
   `git clone <repository-url>`  
   `cd <project-folder>`

2. Install all dependencies  
   `npm install`

3. Open **XAMPP** and start **MySQL**  
   Make sure MySQL status is running.

4. Create a `.env` file in the root directory and add the database configuration  
   `DATABASE_URL="mysql://root:@localhost:3306/your_database_name"`

   Ensure the database exists (can be created via phpMyAdmin).

5. Generate Prisma client  
   `npx prisma generate`

6. Run database migration  
   `npx prisma migrate dev`

7. Start the development server  
   `npm run dev`

8. Open the project in a browser  
   `http://localhost:3000`

If all steps are followed correctly, the website should now be running locally.

---

## 📚 Project Purpose

- Fulfill PKL assignment requirements from **Bisma Informatika**
- Apply real-world IT development tools
- Practice modern full-stack web development workflows

---

## ✨ Author

Developed by PKL students as part of a task assigned by **Bisma Informatika**.
