# Ellty Page Selector

A React-based page selector component that allows users to select multiple pages with an intuitive interface. Built with React and Vite.

## Features

- Select all pages with a single click
- Individual page selection
- Modern and responsive design
- Hover effects and visual feedback
- Clean and minimalist UI

## Project Structure

```
src/
├── components/
│   ├── Button/         # Reusable button component
│   ├── Checkbox/       # Custom checkbox component
│   ├── LineDropdown/   # Line separator with dropdown
│   └── PageSelector/   # Main page selector component
├── constants/          # Application constants
├── App.jsx            # Root application component
└── main.jsx          # Application entry point
```

## Tech Stack

- React 18.3
- Vite 6.0
- CSS Modules
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd ellty-anikalp
```

2. Install dependencies:
```bash
npm install
```

### Development

To start the development server:
```bash
npm run dev
```

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Components

### PageSelector
The main component that handles page selection functionality. It includes:
- Select all option
- Individual page selection
- Visual feedback on hover
- Responsive design

### Button
A reusable button component with:
- Modern styling
- Hover effects
- Customizable content

### Checkbox
A custom checkbox component featuring:
- Custom hover effects
- Animated checkmark
- Accessible design

### LineDropdown
A visual separator component that:
- Provides visual hierarchy
- Separates different sections
- Enhances UI organization

## Code Quality

The project uses ESLint for code quality assurance. Run the linter with:
```bash
npm run lint
```

## License

This project is private and proprietary.
