# QuCore Dynamic Auth (ATH)

**Centralized authentication and authorization engine for the QuCore ecosystem. Provides SSO (Single Sign-On) and RBAC (Role-Based Access Control) across all corporate platforms via a microservices architecture.**

## Tech Stack

- **Runtime**: Node.js 22+ (TypeScript)
- **Framework**: Express.js (Microservices)
- **Database**: PostgreSQL + Prisma ORM
- **Style**: No Semicolons, Single Quotes, PascalCase for Models
- **Real-time**: Socket.io

---

## Configuration & Placeholders

This module requires a dual-block configuration strategy. Before running, ensure you have replaced these placeholders in your configuration files to match your infrastructure settings.

---

## Installation & Setup

### 1. Environment Configuration

Create your configuration files and follow the internal instructions for BLOCK #1 (Local) and BLOCK #2 (Docker Overrides) in the `docker/` directory.

```bash
# Setup local environment
cd docker && cp .env.example .env

# Setup production/docker environment
cp .env.example .env.prod
```

### 3. Docker Execution

The backend supports containerized environments for consistent development and production parity across all services.

```bash
# Start infrastructure and services in dev mode (with hot-reload)
cd docker
docker-compose -f docker-compose.infra.yml -f docker-compose.dev.yml up -d --build

# Run in production mode
docker-compose -f docker-compose.prod.yml up -d --build
```

## Project Structure

A brief overview of the key directories in the **QuCore Auth** backend ecosystem:

- **`docker/`**: Infrastructure orchestration (Compose files, networking, and env templates).
- **`services/auth/`**: Core JWT logic, login, registration, and session control.
- **`services/users/`**: Identity management and detailed user profile data.
- **`services/invite/`**: 16-symbol registration codes and access validation.
- **`services/audit/`**: Security event logging and real-time event tracking.
- **`services/[name]/prisma/`**: Data models and migration history per service.

---

## Contributing

We follow the **QuCore Elite** standard for backend engineering:

1. **Linting**: No semicolons, single quotes for logic, backticks for templates.
2. **Naming**: PascalCase for Prisma Models, camelCase for functions/variables.
3. **API**: Every route must follow strict versioning (e.g., `/v1.0.0/`).

## License & Authorship

Created and maintained by **Artem Zhytovoz**.
Distributed under the **PolyForm Noncommercial 1.0.0** license.

---

_Every line of code is a step toward global technological leverage._
