#!/bin/bash

echo "🚀 Deploying InstaFashion AI to Vercel..."

# Load Vercel token
source /workspace/group/.tokens/load-tokens.sh

# Login to Vercel
echo "📝 Logging in to Vercel..."
export VERCEL_TOKEN=$(cat /workspace/group/.tokens/vercel.txt | grep API_Key | cut -d' ' -f2)
npx vercel login --token "$VERCEL_TOKEN"

# Deploy to production
echo "🚀 Deploying to production..."
npx vercel --prod --yes

echo "✅ Deploy complete!"
echo "🌐 Check your Vercel dashboard for the URL"
