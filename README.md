# Bisma Informatika Training Website

A web application that provides information about offline training programs offered by Bisma Informatika.

Originally developed as part of a **Praktik Kerja Lapangan (PKL)** assignment at Bisma Informatika, this project is now open source and publicly available for educational purposes and as a reference for other developers.

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Prisma ORM](https://www.prisma.io/) | Database access and management |
| [MySQL](https://www.mysql.com/) | Relational database |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Node.js](https://nodejs.org/) | JavaScript runtime |

## Libraries & Services

- [Clerk](https://clerk.com/) — Authentication and user management
- [Swiper.js](https://swiperjs.com/) — Interactive sliders and carousels
- [Uploadcare](https://uploadcare.com/) — File uploads and media management

## Getting Started

Follow the instructions below to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or newer
- [Git](https://git-scm.com/)
- [XAMPP](https://www.apachefriends.org/) with MySQL

### Installation

**1. Clone the repository**

Replace the placeholders with your repository URL and project directory name.

```bash
git clone <repository-url>
cd <project-folder>
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up the database**

Start MySQL through XAMPP, then create a database using phpMyAdmin or your preferred MySQL client.

**4. Configure environment variables**

Create a `.env` file in the project root and add your database connection string:

```env
DATABASE_URL="mysql://root:@localhost:3306/your_database_name"
```

Replace `your_database_name` with the name of the database you created. Adjust the username, password, host, and port if your MySQL configuration differs.

**5. Generate the Prisma Client**

```bash
npx prisma generate
```

**6. Apply database migrations**

```bash
npx prisma migrate dev
```

This command applies the existing Prisma migrations to your database. Ensure the repository includes the necessary migration files.

**7. Start the development server**

```bash
npm run dev
```

**8. Open the application**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

The application should now be running locally.

## Project Objectives

- Fulfill a practical development assignment during PKL at Bisma Informatika.
- Apply modern web development technologies to a real-world project.
- Gain hands-on experience with full-stack development and database integration.
- Make the source code publicly available as a learning resource for other developers.

## Open Source

This project was originally developed to fulfill a PKL assignment at Bisma Informatika and has since been released as an open-source project.

You are welcome to explore the codebase, learn from its implementation, and adapt it for your own projects in accordance with the MIT License.

Please note that this repository represents a project developed in the context of a previous PKL assignment and is not necessarily actively maintained.

## License

This project is licensed under the MIT License.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software, subject to the terms and conditions of the MIT License.
