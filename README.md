# Cursor AI API Server

A Node.js API server built with Express.js and essential middleware for security, logging, and CORS.

## Features

- ✅ Express.js framework
- ✅ Security middleware (Helmet)
- ✅ CORS support
- ✅ Request logging (Morgan)
- ✅ JSON body parsing
- ✅ Error handling
- ✅ Environment configuration
- ✅ Health check endpoint

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
```

### 3. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Base Routes
- `GET /` - Welcome message and server info
- `GET /api/health` - Health check endpoint

### User Routes
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user

### Example API Usage

**Get all users:**
```bash
curl http://localhost:3000/api/users
```

**Create a new user:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

**Health check:**
```bash
curl http://localhost:3000/api/health
```

## Project Structure

```
├── functions/
│   ├── index.js            # Cloud Function entry (exports `api`)
│   ├── package.json        # Functions Framework + deps
│   └── src/
│       └── app.js          # Express app (shared local + cloud)
├── server.js               # Local development server (uses app.js)
├── package.json            # Root scripts (deploy, serve)
└── README.md
```

## Dependencies

### Production
- **express** - Web framework
- **cors** - Cross-Origin Resource Sharing
- **helmet** - Security middleware
- **morgan** - HTTP request logger
- **dotenv** - Environment variable loader

### Development
- **nodemon** - Auto-restart during development

## Development

The server includes several middleware layers:

1. **Helmet** - Sets security headers
2. **CORS** - Enables cross-origin requests
3. **Morgan** - Logs HTTP requests
4. **Express JSON** - Parses JSON request bodies
5. **Error Handler** - Centralized error handling

## Next Steps

- Add database integration (MongoDB, PostgreSQL, etc.)
- Implement authentication middleware
- Add input validation
- Set up testing framework
- Add API documentation (Swagger)
- Implement rate limiting

## Deploy to Google Cloud Functions (Gen1)

Prerequisites: Firebase CLI installed and configured, billing enabled.

### Local dev
```bash
# Install dependencies
cd functions && npm install

# Start Firebase emulator
npm run start
```

### Deploy
```bash
# Deploy to Firebase Functions
firebase deploy --only functions
```

This deploys an HTTP function named `api` using Node.js 20. The function will be available at:
`https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/api`
