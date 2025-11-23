# CLAUDE.md - AI Assistant Guide

## Project Overview

**Project Name**: Movvia Travel Universal Platform
**Repository**: https-movvia-travel-universalsmarth.replit.app
**Status**: Initial Setup Phase
**Platform**: Replit-hosted web application

### Project Purpose
This repository is designed to be a comprehensive travel platform application. The project is currently in its initial phase with no existing codebase.

---

## Repository Status

⚠️ **CURRENT STATE**: This is a fresh repository with no existing code.

### Getting Started from Scratch
When beginning development on this project:

1. **Determine the Tech Stack**: Coordinate with the team to establish:
   - Frontend framework (React, Vue, Next.js, etc.)
   - Backend technology (Node.js, Python, etc.)
   - Database solution
   - Deployment strategy for Replit

2. **Initialize Project Structure**: Set up the foundational architecture based on chosen stack

3. **Update This Document**: As the project evolves, keep this CLAUDE.md current with actual implementation details

---

## Recommended Project Structure

For a modern web application, consider this structure:

```
/
├── .github/              # GitHub workflows and CI/CD
├── .replit               # Replit configuration
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components/routes
│   ├── services/        # API and business logic
│   ├── utils/           # Helper functions
│   ├── hooks/           # Custom React hooks (if using React)
│   ├── context/         # State management
│   ├── types/           # TypeScript definitions
│   └── styles/          # Global styles
├── public/              # Static assets
├── tests/               # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/                # Documentation
├── scripts/             # Build and deployment scripts
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── .gitignore          # Git ignore rules
├── .env.example        # Environment variable template
├── README.md           # User-facing documentation
└── CLAUDE.md           # This file - AI assistant guide
```

---

## Development Workflows

### Branch Strategy

**Current Branch**: `claude/claude-md-mic9uqg8g47ypcsc-01QGWyNLFif2Mf21XnbaMTM8`

#### Branch Naming Conventions
- `main` or `master` - Production-ready code
- `develop` - Integration branch for features
- `feature/<name>` - New features
- `bugfix/<name>` - Bug fixes
- `hotfix/<name>` - Urgent production fixes
- `claude/<session-id>` - AI assistant development branches

#### Git Workflow
```bash
# Create a new feature branch
git checkout -b feature/travel-search

# Make changes and commit
git add .
git commit -m "feat: add travel search functionality"

# Push to remote
git push -u origin feature/travel-search

# Create pull request for review
```

### Commit Message Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `perf:` - Performance improvements

**Examples**:
```
feat: add user authentication system
fix: resolve booking date validation issue
docs: update API documentation
refactor: simplify hotel search logic
```

---

## Key Conventions for AI Assistants

### Code Quality Standards

1. **TypeScript First**: Use TypeScript for type safety (if applicable)
2. **No Unused Code**: Remove commented-out code and unused imports
3. **Consistent Formatting**: Use project's linter/formatter configuration
4. **Meaningful Names**: Use descriptive variable and function names
5. **DRY Principle**: Don't repeat yourself - create reusable utilities

### Security Best Practices

1. **Never commit secrets**: Use environment variables for sensitive data
2. **Validate input**: Always validate and sanitize user input
3. **Prevent injection**: Guard against SQL injection, XSS, CSRF
4. **Secure authentication**: Use proven libraries for auth (OAuth, JWT)
5. **HTTPS only**: Ensure all API calls use HTTPS
6. **Rate limiting**: Implement rate limiting on API endpoints

### Testing Requirements

1. **Unit Tests**: Test individual functions and components
2. **Integration Tests**: Test feature workflows
3. **E2E Tests**: Test critical user journeys
4. **Coverage Goal**: Aim for >80% code coverage
5. **Test Before Push**: Run tests before committing

### Documentation Standards

1. **Inline Comments**: Explain complex logic, not obvious code
2. **Function Documentation**: Document parameters, returns, and side effects
3. **README Updates**: Keep user documentation current
4. **API Documentation**: Document all endpoints with request/response examples
5. **Change Log**: Maintain a CHANGELOG.md for version history

### AI Assistant Specific Guidelines

#### When Making Changes

1. **Read First**: Always read files before modifying them
2. **Understand Context**: Review related files to understand the system
3. **Minimal Changes**: Make only necessary changes, avoid over-engineering
4. **Test Changes**: Verify changes work before committing
5. **Update Documentation**: Update docs when changing functionality

#### When Creating New Features

1. **Check Existing Code**: Look for similar patterns already in the codebase
2. **Follow Conventions**: Match existing code style and patterns
3. **Consider Edge Cases**: Think about error handling and edge cases
4. **Add Tests**: Include tests for new functionality
5. **Update This File**: Add new conventions or patterns to CLAUDE.md

#### When Fixing Bugs

1. **Reproduce First**: Understand how to reproduce the bug
2. **Find Root Cause**: Don't just fix symptoms
3. **Add Regression Test**: Ensure the bug doesn't return
4. **Document Fix**: Explain the fix in commit message
5. **Check Side Effects**: Ensure fix doesn't break other features

#### Communication

1. **Be Concise**: Keep responses focused and actionable
2. **Show Your Work**: Explain your reasoning for changes
3. **Ask When Unclear**: Don't guess - ask for clarification
4. **Provide Context**: Reference file paths and line numbers
5. **Use Code Blocks**: Format code clearly with syntax highlighting

---

## Environment Setup

### Prerequisites

When the project is initialized, likely requirements:

- Node.js (version TBD)
- npm or yarn
- Git
- Text editor/IDE

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
# API Configuration
API_URL=
API_KEY=

# Database
DATABASE_URL=

# Authentication
JWT_SECRET=
SESSION_SECRET=

# External Services
PAYMENT_GATEWAY_KEY=
EMAIL_SERVICE_API_KEY=

# Feature Flags
ENABLE_FEATURE_X=false
```

⚠️ **Never commit `.env` files to version control**

### Development Commands

Standard commands to implement:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run linter
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

---

## API Design Guidelines

### RESTful Principles

- Use proper HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Use plural nouns for resources (`/users`, `/bookings`)
- Use status codes correctly (200, 201, 400, 401, 404, 500)
- Version your API (`/api/v1/...`)

### Endpoint Naming Examples

```
GET    /api/v1/travels           # List all travels
GET    /api/v1/travels/:id       # Get single travel
POST   /api/v1/travels           # Create travel
PUT    /api/v1/travels/:id       # Update travel (full)
PATCH  /api/v1/travels/:id       # Update travel (partial)
DELETE /api/v1/travels/:id       # Delete travel
```

### Response Format

```json
{
  "success": true,
  "data": {
    "id": "123",
    "name": "Travel Package"
  },
  "message": "Operation successful",
  "timestamp": "2025-11-23T22:10:00Z"
}
```

### Error Format

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  },
  "timestamp": "2025-11-23T22:10:00Z"
}
```

---

## Performance Guidelines

1. **Lazy Loading**: Load components and routes on demand
2. **Image Optimization**: Compress and lazy-load images
3. **Caching**: Implement appropriate caching strategies
4. **Code Splitting**: Split code into smaller bundles
5. **Database Indexing**: Index frequently queried fields
6. **Pagination**: Paginate large data sets
7. **Debouncing**: Debounce expensive operations (search, etc.)

---

## Accessibility Standards

1. **WCAG 2.1 AA Compliance**: Follow accessibility guidelines
2. **Semantic HTML**: Use proper HTML elements
3. **ARIA Labels**: Add ARIA labels where needed
4. **Keyboard Navigation**: Ensure full keyboard accessibility
5. **Color Contrast**: Maintain sufficient color contrast
6. **Screen Reader Testing**: Test with screen readers

---

## Common Patterns and Utilities

### Error Handling Pattern

```typescript
try {
  const result = await riskyOperation();
  return { success: true, data: result };
} catch (error) {
  console.error('Operation failed:', error);
  return {
    success: false,
    error: error instanceof Error ? error.message : 'Unknown error'
  };
}
```

### API Call Pattern

```typescript
async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
```

### State Management Pattern

Document the chosen state management approach once implemented (Redux, Context API, Zustand, etc.)

---

## Troubleshooting

### Common Issues

**Issue**: Dependencies not installing
**Solution**: Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue**: Port already in use
**Solution**: Change port or kill existing process
```bash
lsof -ti:3000 | xargs kill -9
```

**Issue**: TypeScript errors
**Solution**: Rebuild type definitions
```bash
npm run type-check
```

---

## Deployment on Replit

### Replit Configuration

Create `.replit` file:
```
run = "npm start"
language = "nodejs"

[env]
NODE_ENV = "production"
```

### Replit Considerations

1. **Persistent Storage**: Use Replit database or external service
2. **Environment Secrets**: Use Replit Secrets for sensitive data
3. **Always-On**: Enable Always-On for production (paid feature)
4. **Custom Domain**: Configure custom domain if needed
5. **Resource Limits**: Be aware of Replit resource constraints

---

## Resources and Links

### Official Documentation
- [Replit Documentation](https://docs.replit.com/)
- [Git Documentation](https://git-scm.com/doc)

### Useful Tools
- **Linting**: ESLint
- **Formatting**: Prettier
- **Testing**: Jest, Testing Library, Cypress
- **Type Checking**: TypeScript
- **API Testing**: Postman, Insomnia

---

## Changelog

### 2025-11-23
- Initial CLAUDE.md creation
- Established foundational guidelines and structure
- Defined development workflows and conventions

---

## Next Steps

1. **Initialize Project**: Choose tech stack and initialize project structure
2. **Setup CI/CD**: Configure automated testing and deployment
3. **Create Base Components**: Build foundational UI components
4. **Implement Authentication**: Set up user authentication system
5. **Database Schema**: Design and implement database schema
6. **API Development**: Build core API endpoints
7. **Frontend Integration**: Connect frontend to backend APIs
8. **Testing Suite**: Establish comprehensive testing
9. **Documentation**: Write user-facing documentation
10. **Deployment**: Deploy initial version to production

---

## Contact and Support

- **Repository Owner**: Showowt
- **Repository**: https-movvia-travel-universalsmarth.replit.app
- **Issues**: Report issues through GitHub Issues
- **Documentation**: Keep this file updated as the project evolves

---

**Last Updated**: 2025-11-23
**Version**: 1.0.0
**Status**: Initial Setup
