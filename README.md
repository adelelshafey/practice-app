# Practice App - CI/CD Demo

A simple interactive web application built for learning and practicing CI/CD concepts.

## Features

- **Counter**: Increment/decrement counter with buttons or keyboard shortcuts
- **Todo List**: Add and delete todo items with animations
- **Color Changer**: Random gradient background colors
- **Keyboard Shortcuts**: Ctrl/Cmd + Plus/Minus for counter, Ctrl/Cmd + R for colors

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:8000` to view the app.

## Development

### Available Scripts

- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run build` - Build for production
- `npm start` - Start local server

### Testing

The app includes comprehensive unit tests covering:
- Counter functionality
- Todo list operations
- Color changing features
- Keyboard shortcuts

Run tests with coverage:
```bash
npm test -- --coverage
```

### Code Quality

- **ESLint**: Enforces code style and catches errors
- **Prettier**: Automatic code formatting
- **Jest**: Unit testing framework

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### CI Pipeline (`.github/workflows/ci.yml`)
- Runs on Node.js 18.x and 20.x
- Executes linting, testing, and security audits
- Includes Lighthouse performance testing
- Generates coverage reports

### Deployment (`.github/workflows/deploy.yml`)
- Auto-deploys to GitHub Pages on main branch pushes
- Runs full test suite before deployment
- Creates optimized production build

## Project Structure

```
practice-app/
├── .github/workflows/     # CI/CD workflows
├── coverage/             # Test coverage reports
├── dist/                 # Production build
├── index.html            # Main HTML file
├── style.css             # Styles
├── script.js             # JavaScript logic
├── script.test.js        # Unit tests
├── package.json          # Dependencies and scripts
├── jest.config.js        # Jest configuration
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
└── README.md             # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes and add tests
4. Run the full test suite: `npm test`
5. Check code quality: `npm run lint`
6. Commit and push changes
7. Create a Pull Request

## License

MIT License - see LICENSE file for details.