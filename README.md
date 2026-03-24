# QuCore Dynamic Auth (ATH)

**Centralized authentication and authorization service for the QuCore ecosystem. Provides SSO (Single Sign-On) and RBAC (Role-Based Access Control) across all corporate platforms.**

## Tech Stack

- **Backend**: Node.js + Express.js (TypeScript)
- **Frontend**: Next.js (TypeScript)
- **Database**: PostgreSQL + Prisma ORM
- **Security**: JWT, Helmet, CORS

## Core Features

- **Identity Management**: Secure user registration and profile storage
- **Access Control**: Role-based permissions
- **Corporate Security**: 16-symbol access code required for registration
- **Session Management**: JWT tokens with device fingerprinting (IP + User Agent)
- **SSO Ready**: Single sign-on across all QuCore services

## Quick Start

```bash
# Clone repository
git clone https://github.com/your-username/qucore-auth-backend.git
cd qucore-auth-backend

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations
npx prisma migrate dev --name init

# Start development server
npm run dev
```

## License

**GNU General Public License v3.0** - See [LICENSE](./LICENSE) file for details.
