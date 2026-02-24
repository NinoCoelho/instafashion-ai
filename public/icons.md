# Icons para InstaFashion AI

## Tamanhos necessários

### Android/Chrome
- icon-192.png (192x192) - PWA icon
- icon-512.png (512x512) - PWA icon
- icon-maskable-192.png (192x192) - Maskable icon
- icon-maskable-512.png (512x512) - Maskable icon

### iOS
- apple-icon.png (180x180) - Apple touch icon
- icon-192.png pode ser usado

### Favicon
- favicon.ico (32x32 ou 48x48)

## Design

Usar emoji 📸 ou ícone simplificado de câmera/Instagram com:
- Background: Gradiente Instagram (#f09433 → #e6683c → #dc2743 → #cc2366 → #bc1888)
- Ícone: Branco ou cor sólida
- Maskable: Padding extra para safe area

## Como gerar

### Opção 1: Usar favicon.io
1. Acessar https://favicon.io
2. Upload de emoji ou texto
3. Download de todos os tamanhos

### Opção 2: Usar ImageMagick
```bash
# Criar ícone base
convert -size 512x512 xc:none \
  -fill "gradient:#f09433-#bc1888" \
  -draw "circle 256,256 256,0" \
  -pointsize 300 -fill white -gravity center \
  -annotate 0 "📸" \
  icon-512.png

# Redimensionar para outros tamanhos
convert icon-512.png -resize 192x192 icon-192.png
convert icon-512.png -resize 180x180 apple-icon.png
convert icon-512.png -resize 32x32 favicon.ico
```

### Opção 3: Usar Canva/Figma
1. Criar design 512x512
2. Exportar em múltiplos tamanhos
3. Usar ferramentas online para favicon

## Colocar os arquivos

Todos os arquivos devem ser colocados em:
```
frontend/public/
├── icon-192.png
├── icon-512.png
├── icon-maskable-192.png
├── icon-maskable-512.png
├── apple-icon.png
└── favicon.ico
```

## Testar

1. Iniciar dev server
2. Abrir DevTools → Application → Manifest
3. Verificar se todos os ícones estão carregando
4. Testar em dispositivo mobile para instalação
