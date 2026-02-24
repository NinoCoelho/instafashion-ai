#!/bin/bash

# Script para gerar ícones placeholder para InstaFashion AI
# Isso cria ícones básicos - para produção, use designer profissional

echo "🎨 Gerando ícones para InstaFashion AI..."

# Criar diretório se não existir
mkdir -p public

# Criar SVG temporário
cat > /tmp/instafashion-icon.svg << 'EOF'
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f09433;stop-opacity:1" />
      <stop offset="25%" style="stop-color:#e6683c;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#dc2743;stop-opacity:1" />
      <stop offset="75%" style="stop-color:#cc2366;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#bc1888;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background circle -->
  <circle cx="256" cy="256" r="256" fill="url(#instagram-gradient)"/>

  <!-- Camera icon -->
  <rect x="128" y="166" width="256" height="192" rx="20" fill="white"/>
  <circle cx="256" cy="262" r="50" fill="#f09433"/>
  <circle cx="350" cy="190" r="20" fill="white"/>
</svg>
EOF

# Nota: Este é um placeholder.
# Para produção, você deve:
# 1. Usar um designer profissional
# 2. Ou usar ferramentas como canva.com
# 3. Ou usar favicon.io para gerar de emoji/texto

echo "✅ SVG criado em /tmp/instafashion-icon.svg"
echo ""
echo "Para converter para PNG, você precisa de:"
echo "  1. ImageMagick: convert icon.svg icon.png"
echo "  2. Ou ferramenta online: https://cloudconvert.com/svg-to-png"
echo ""
echo "Tamanhos necessários:"
echo "  - 192x192: icon-192.png"
echo "  - 512x512: icon-512.png"
echo "  - 180x180: apple-icon.png"
echo "  - 48x48: favicon.ico"
echo ""
echo "📱 Coloque todos na pasta: frontend/public/"
echo ""
echo "💡 Dica: Use emoji 📸 com gradiente Instagram para algo simples!"
