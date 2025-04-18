# KraftedY

## Directory Structure

```
├── src
│   ├── app
│   │   ├── (auth)
│   │   │   ├── sign-in
│   │   │   │   └── [[...sign-in]]
│   │   │   ├── sign-up
│   │   │   │   └── [[...sign-up]]
│   │   ├── (protected)
│   │   │   │   └── dashboard
│   ├── components
│   │   └── gradients
│   │   |       └── AnimatedBackground.tsx
│   │   └── ui
│   │   |    └── Spinner.tsx
│   │   ├── AuthHeader.tsx
│   │   ├── Dashboard.tsx
│   ├── middleware.ts
├── .env.local
├── next.config.js
├── package.json
├── tsconfig.json
```

## Installation

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/iamatifmoin/kraftedy.git
   cd kraftedy
   ```

2. Install the dependencies:
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn install
   ```

### Running the Development Server

To run the application locally:

1. Run the development server:

   ```bash
   npm run dev
   ```

   Or with Yarn:

   ```bash
   yarn dev
   ```

2. Visit `http://localhost:3000` in your browser to access the application.

## Environment Variables

Create a `.env.local` file in the root of the project and add the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
```

Replace `<your-clerk-publishable-key>` and `<your-clerk-secret-key>` with the appropriate values from your Clerk dashboard.

## Test Credentials

```
username: test-user
email: test@kraftedy.com
password: thisIsForTesting
```
