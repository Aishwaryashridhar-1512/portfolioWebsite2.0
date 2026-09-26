# Portfolio Website 2.0

My personal portfolio website built to showcase my projects, skills, and experience.

**Live Demo:** [Live Site](https://aishwarya-ruddy.vercel.app/)

## Tech Stack

- **Frontend:** React, TypeScript
- **Build Tool:** Vite
- **Styling:** (e.g., Tailwind CSS / CSS Modules — update this)
- **Deployment:** (e.g., Vercel / Netlify — update this)

## Features

- Responsive design across devices
- About, Projects, Skills, and Contact sections
- (Add any other features — dark mode, animations, contact form, etc.)

## Project Structure

```
portfolioWebsite2.0/
├── public/          # Static assets
├── src/             # Source code (components, pages, styles)
├── index.html       # Entry HTML file
├── vite.config.ts   # Vite configuration
└── package.json      # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/Aishwaryashridhar-1512/portfolioWebsite2.0.git

# Navigate into the project
cd portfolioWebsite2.0

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run the development server
npm run dev
```

The app will be running at `http://localhost:5173` (default Vite port).

## Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```
GEMINI_API_KEY="your_gemini_api_key"
APP_URL="your_app_url"
```

- **GEMINI_API_KEY** — Required for Gemini AI API calls. If you're running this in AI Studio, this is automatically injected at runtime from your configured secrets (set via the Secrets panel in the AI Studio UI). For local development outside AI Studio, you'll need to obtain your own key from [Google AI Studio](https://aistudio.google.com/).
- **APP_URL** — The URL where this applet is hosted. In AI Studio, this is automatically injected with the Cloud Run service URL. Used for self-referential links, OAuth callbacks, and API endpoints. For local development, set this to your local server URL (e.g., `http://localhost:5173`).

**Note:** Never commit your real `.env` file with actual secret values — only `.env.example` with placeholders should be tracked in git. Make sure `.env` is listed in `.gitignore`.

## Screenshots

<img width="1901" height="972" alt="2 Portfolio_desktop(1)" src="https://github.com/user-attachments/assets/2480d82d-3f5b-4596-b783-6ba7107ed16c" />


## Contact

- **Name:** Aishwarya P S
- **Email:** aishwaryakalluraya@gmail.com
- **LinkedIn:** [Aishwarya P S](https://www.linkedin.com/in/aishwarya-p-s-685787349)
- **GitHub:** [Aishwaryashridhar-1512](https://github.com/Aishwaryashridhar-1512)

## License

This project is licensed under the MIT License.
