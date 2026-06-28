# Personal Portfolio & AI Assistant

A modern, highly interactive personal portfolio website built with Next.js, featuring an integrated AI chatbot. The portfolio showcases projects, skills, and experience with a sleek, responsive design and smooth animations.

## 🌟 Features

- **Modern Tech Stack**: Built with Next.js 14, React, and TypeScript.
- **Beautiful UI/UX**: Styled with Tailwind CSS and animated using Framer Motion.
- **AI Chatbot Integration**: Custom AI assistant built using Google Generative AI and Cerebras Cloud SDK to answer questions and interact with visitors.
- **Database Integrated**: Uses Neon serverless PostgreSQL for seamless data management.
- **Contact Form**: Direct messaging capabilities powered by EmailJS.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Icons**: Sleek and modern iconography from Lucide React.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Neon](https://neon.tech/) (Serverless Postgres)
- **AI/ML**: Google Generative AI, Cerebras Cloud SDK
- **Email Services**: [EmailJS](https://www.emailjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codewithlaiba28/portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd portfolio
   ```

3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Set up your environment variables:
   Create a `.env` or `.env.local` file in the root of your project and add the necessary API keys for:
   - Neon Database
   - Google Generative AI / Cerebras API
   - EmailJS

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure Highlights

- `app/`: Next.js App Router pages and layouts.
- `lib/`: Utility functions, database integrations, AI configurations (e.g., `chatbot.ts`), and project data.
- `scripts/`: Custom scripts for database migration (`migrate-to-neon.mjs`) and asset processing.
- `public/`: Static assets like images.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
