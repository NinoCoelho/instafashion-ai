#!/bin/bash
set -e

echo "🚀 InstaFashion AI - Vercel Deploy"
echo "=================================="

# Carregar token
TOKEN=$(cat /workspace/group/.tokens/vercel.txt | grep API_Key | cut -d' ' -f2 | tr -d '\n\r ')

echo "📝 Token carregado: ${TOKEN:0:20}..."

# Deploy usando curl para Vercel API (mais confiável que CLI em container)
echo "📦 Preparando deployment..."

# Primeiro fazer build localmente
echo "🔨 Building..."
npm run build

echo "✅ Build completo!"
echo ""
echo "📌 Para deploy manual:"
echo "1. Instale Vercel CLI: npm i -g vercel"
echo "2. Login: vercel login"
echo "3. Deploy: vercel --prod"
echo ""
echo "Ou use o Dashboard Vercel conectado ao GitHub"
