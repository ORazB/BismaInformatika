# Project Overview

This website was developed as part of a PKL (Praktik Kerja Lapangan) task assigned by Bisma Informatika. The project provides information about offline training programs within Bisma Informatika.

## Tech Stack

- Next.js
- TypeScript
- Prisma ORM
- MySQL
- Tailwind CSS
- Node.js

## Libraries

- Clerk
- Swiper.js
- UploadCare

## Requirements

Before running this project, ensure the following are installed:

- Node.js (version 18 or newer)
- Git
- XAMPP (MySQL)

## How to Run This Project

Follow these steps in order:

1. Clone the repository and enter the project folder:
   ```
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start MySQL in XAMPP and ensure it is running.

4. Create a `.env` file in the root directory with your database configuration:
   ```
   DATABASE_URL="mysql://root:@localhost:3306/your_database_name"
   ```
   Ensure the database exists (create via phpMyAdmin if needed).

5. Generate Prisma client:
   ```
   npx prisma generate
   ```

6. Run database migration:
   ```
   npx prisma migrate dev
   ```

7. Start the development server:
   ```
   npm run dev
   ```

8. Open the project in your browser at `http://localhost:3000`

If all steps are followed correctly, the website should now be running locally.

## Project Purpose

- Fulfill PKL assignment from Bisma Informatika
- Apply real-world IT development tools
- Practice modern full-stack web development
