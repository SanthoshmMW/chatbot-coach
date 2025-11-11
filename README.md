# MW Coach - LMX Platform Chatbot

An intelligent Angular 8 chatbot assistant for the LMX (Location Media Exchange) platform, providing instant answers to questions about billboard management, pricing strategies, tags organization, and more.

## 🔗 Links

- **Live Demo:** https://3000-i09jl2t627bmsjuoy1c13-3844e1b6.sandbox.novita.ai
- **GitHub Repository:** https://github.com/SanthoshmMW/chatbot-coach
- **Download Backup:** https://page.gensparksite.com/project_backups/mw-coach-chatbot-complete.tar.gz

## ✨ Features

### Intelligent Chatbot
- **Natural Language Processing**: Understands user questions and provides relevant answers
- **Category-Based Navigation**: Browse FAQs by topics like Platform Overview, Billboard Management, Pricing & Rates
- **Smart Search**: Finds answers across questions, answers, and categories
- **Interactive UI**: Beautiful gradient design with smooth animations and transitions

### Comprehensive FAQ Database
Generated from actual LMX platform training videos, covering:
- **Platform Overview**: What is LMX, who it's for, and its capabilities
- **Login and Access**: Account access and dashboard navigation
- **Billboard Management**: Viewing, editing, and organizing billboard inventory
- **Pricing and Rates**: Traditional and programmatic pricing strategies
- **Tags Management**: Creating, applying, and filtering with tags
- **Platform Features**: AI-powered pricing, analytics, and more

### User Experience
- **Always Available**: 24/7 chatbot assistance
- **Mobile Responsive**: Works perfectly on all devices
- **Typing Indicators**: Real-time feedback during responses
- **Category Pills**: Quick access to different topics
- **Expandable FAQ Items**: Detailed answers with proper formatting

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 8.2.14
- **Language**: TypeScript 3.5.3
- **Styling**: Custom CSS with gradient designs
- **Backend**: Express.js (for serving)
- **Process Manager**: PM2
- **Build Tool**: Angular CLI

## 📦 Installation

### Prerequisites
- Node.js 20+ (uses `--openssl-legacy-provider` for Angular 8 compatibility)
- npm

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/SanthoshmMW/chatbot-coach.git
cd chatbot-coach
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Build the application**
```bash
npm run build:prod
```

4. **Start the server**
```bash
npm start
# Or using PM2:
pm2 start ecosystem.config.cjs
```

5. **Access the application**
```
http://localhost:3000
```

## 📜 Available Scripts

- `npm start` - Start development server on port 4200
- `npm run build` - Build the project
- `npm run build:prod` - Build for production with optimizations
- `npm test` - Run unit tests
- `npm run lint` - Lint the code

## 🎯 How to Use the Chatbot

### Getting Started
1. Click the chat icon in the bottom-right corner
2. The chatbot will greet you with an introduction

### Asking Questions
- Type your question naturally in the input field
- Press Enter or click the send button
- The chatbot will search and provide relevant answers

### Browsing by Category
- Click on any category pill at the top of the chat
- Browse all FAQs in that specific category

### Special Commands
- Type "help" or "menu" to see available options
- Type "categories" to see all topic categories

## 🎨 Chatbot Features

### Categories Covered
1. **Platform Overview** - Understanding LMX platform basics
2. **Login and Access** - Getting into your account
3. **Billboard Management** - Managing your advertising assets
4. **Pricing and Rates** - Setting traditional and programmatic rates
5. **Tags Management** - Organizing billboards with tags
6. **Platform Features** - Advanced features and capabilities

### Sample Questions
- "How do I log into my account?"
- "How can I change the price for a billboard?"
- "What is a programmatic rate?"
- "How do I create a new tag?"
- "How do I filter billboards by tag?"

## 🗂️ Project Structure

```
webapp/
├── src/
│   ├── app/
│   │   ├── chatbot/                 # Chatbot component
│   │   │   ├── chatbot.component.ts
│   │   │   ├── chatbot.component.html
│   │   │   └── chatbot.component.css
│   │   ├── services/                # Services
│   │   │   └── faq.service.ts       # FAQ data and search logic
│   │   ├── app.component.*          # Main app component
│   │   └── app.module.ts            # App module configuration
│   ├── assets/                      # Static assets
│   ├── environments/                # Environment configs
│   └── index.html                   # Main HTML file
├── dist/                            # Production build output
├── server.js                        # Express server for production
├── ecosystem.config.cjs             # PM2 configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

## 🔧 Configuration

### PM2 Configuration (ecosystem.config.cjs)
```javascript
module.exports = {
  apps: [{
    name: 'mw-coach',
    script: 'server.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

### Server Configuration (server.js)
- Serves static files from `dist/mw-coach/`
- Handles Angular routing with fallback to index.html
- Runs on port 3000 by default

## 📊 FAQ Data Source

The FAQ database was generated by analyzing two training videos about the LMX platform:
1. **TAGS.mp4** - Tutorial on creating and managing tags for billboard organization
2. **Video Tutorial** - Comprehensive platform overview and pricing management

All questions and answers are extracted from actual platform demonstrations.

## 🚀 Deployment

### Production Deployment
1. Build the production bundle:
```bash
npm run build:prod
```

2. Start with PM2:
```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

### Development Mode
```bash
npm start
```
Access at http://localhost:4200

## 🐛 Known Issues

### Node.js Compatibility
Angular 8 requires the legacy OpenSSL provider with Node.js 20+. This is handled automatically in the npm scripts with `NODE_OPTIONS=--openssl-legacy-provider`.

### Dependency Warnings
Some peer dependency warnings may appear during installation. Use `--legacy-peer-deps` flag when installing packages.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is created for educational and demonstration purposes.

## 👥 Support

For questions or issues:
- Review the FAQ section in the chatbot
- Check the documentation
- Contact the development team

## 🎉 Acknowledgments

- FAQ content extracted from LMX platform training videos
- Built with Angular 8 for broad compatibility
- UI inspired by modern chatbot interfaces

---

**Built with ❤️ for the LMX Platform**
