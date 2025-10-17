# Password Protection Setup Instructions

## Overview
The site now has password protection using Next.js middleware. The credentials are stored securely in environment variables.

## Credentials
- **Username:** `calvin123!`
- **Password:** `biochar123!`

## Vercel Environment Variables Setup

To enable password protection on Vercel, follow these steps:

### 1. Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Select your `biochar2` project
3. Click on **Settings** tab

### 2. Add Environment Variables
1. In the left sidebar, click **Environment Variables**
2. Add the following two variables:

   **Variable 1:**
   - **Key:** `AUTH_USERNAME`
   - **Value:** `calvin123!`
   - **Environments:** Check all (Production, Preview, Development)
   - Click **Save**

   **Variable 2:**
   - **Key:** `AUTH_PASSWORD`
   - **Value:** `biochar123!`
   - **Environments:** Check all (Production, Preview, Development)
   - Click **Save**

### 3. Redeploy
Vercel will automatically redeploy your site after you save the environment variables. If not:
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click the three dots menu (•••)
4. Select **Redeploy**

## Testing

### On Vercel (Production):
1. Visit your Vercel URL (e.g., https://biochar2.vercel.app)
2. A browser authentication dialog will appear
3. Enter:
   - Username: `calvin123!`
   - Password: `biochar123!`
4. Click **Log In** or **Sign In**
5. You should now see the site

### Locally (Development):
The `.env.local` file is already configured with the credentials, so you can test locally by running:
```bash
npm run dev
```

Then visit http://localhost:3000 and the same authentication dialog will appear.

## Security Notes

✅ Credentials are stored in environment variables (not in code)  
✅ `.env.local` is ignored by git (won't be committed)  
✅ Uses HTTP Basic Authentication (browser's native security)  
✅ Free - no additional Vercel costs  

## Troubleshooting

**If password protection doesn't work:**
1. Verify environment variables are set correctly in Vercel dashboard
2. Check that both Production, Preview, and Development are selected
3. Try redeploying the site
4. Clear browser cache and try again

**If you want to change credentials:**
1. Update the environment variables in Vercel dashboard
2. Update `.env.local` for local development
3. Redeploy the site

## How It Works

The `middleware.ts` file intercepts all requests and checks for valid credentials before allowing access to any page. This provides site-wide protection automatically.
