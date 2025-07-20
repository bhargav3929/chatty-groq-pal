# AI ChatBot

A sleek and responsive AI chatbot built with modern web technologies, powered by **Groq API** for dynamic responses.

---

## 🧠 Technologies Used

- **React** – Front-end UI library  
- **Vite** – Lightweight build tool for fast development  
- **TypeScript** – Type-safe JavaScript  
- **Tailwind CSS** – Utility-first CSS framework  
- **shadcn-ui** – Modern UI component library  
- **Groq API** – Backend integration for chatbot intelligence (Llama 3-8b-8192 model)

---

## 🗂️ Project Structure Overview

```
chatty-groq-pal/
├── public/
│   ├── placeholder.svg       # Placeholder assets
│   └── robots.txt           # Search engine directives
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ChatBot.tsx      # Main chat interface
│   │   ├── ChatMessage.tsx  # Individual message component
│   │   ├── ChatInput.tsx    # Message input component
│   │   └── ui/              # shadcn-ui component library
│   ├── hooks/               # Custom React hooks
│   │   └── useGroqChat.ts   # Groq API integration logic
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Main page
│   │   └── NotFound.tsx     # 404 page
│   ├── lib/                 # Utility functions
│   ├── main.tsx             # App entry point
│   └── App.tsx              # Root React component
├── index.html               # HTML template
├── tailwind.config.ts       # Tailwind CSS configuration
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally using **Cursor**, **VS Code**, or any modern IDE.

### 1. Clone the repository
```bash
git clone <YOUR_GIT_REPOSITORY_URL>
cd chatty-groq-pal
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Visit `http://localhost:8080` in your browser to see the chatbot in action.

---

## 🔌 Groq API Integration

This chatbot connects to **Groq API** to generate intelligent responses using the Llama 3-8b-8192 model.  
The API integration is handled in `src/hooks/useGroqChat.ts`.

Example API usage:
```ts
const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${GROQ_API_KEY}`
  },
  body: JSON.stringify({
    model: 'llama3-8b-8192',
    messages: [
      { role: 'user', content: userMessage }
    ],
    temperature: 0.7,
    max_tokens: 1024
  })
});
```

---

## 🌐 Favicon (Site Icon)

Currently, no favicon is configured (site icon removed from browser tab).

To add a site icon:
1. Add your favicon file to the `public/` folder (e.g., `favicon.png`)
2. Add the following line inside your `index.html` `<head>` tag:
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   ```

---

## 🎨 Features

- **Real-time AI Chat** – Powered by Groq's Llama 3 model
- **Beautiful UI** – Modern design with shadcn/ui components
- **Responsive Design** – Works seamlessly on desktop and mobile
- **Typing Indicators** – Shows when AI is responding
- **Message History** – Maintains conversation context
- **Clear Chat** – Reset conversations with one click
- **Smooth Animations** – Enhanced user experience

---

## 📝 Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint for code quality

---

## 📝 Notes

- Requires **Node.js v16+** and **npm** installed
- Compatible with **Cursor**, **VS Code**, and other modern IDEs
- Customize the UI and logic by editing React components in the `src/` folder
- API key is currently hardcoded (consider using environment variables for production)

---

## 🙌 Author

Developed by **Bhargav Ram Reddy**  
[LinkedIn Profile](https://www.linkedin.com/in/bhargav-weblerix/)
