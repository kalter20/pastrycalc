# PastryCalc v2.0 · Guía de Publicación

## Archivos del proyecto
```
pastrycalc/
├── index.html      ← App completa
├── manifest.json   ← Configuración PWA
├── sw.js           ← Service Worker (modo offline)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

## Opción A — Publicar en Netlify (recomendado, gratis)

1. Ve a **https://app.netlify.com** y crea una cuenta gratis
2. Arrastra la carpeta `pastrycalc/` directo a la pantalla de Netlify
3. Netlify genera una URL pública automáticamente: `https://pastrycalc-xxxx.netlify.app`
4. ¡Listo! HTTPS incluido, PWA activa

### Dominio personalizado (opcional)
- En Netlify → Site Settings → Domain Management
- Agrega tu dominio: `pastrycalc.tudominio.com`

---

## Opción B — Publicar en Vercel (gratis)

1. Crea cuenta en **https://vercel.com**
2. Instala Vercel CLI: `npm i -g vercel`
3. En la carpeta del proyecto:
```bash
vercel
```
4. URL: `https://pastrycalc.vercel.app`

---

## Opción C — GitHub Pages (gratis)

1. Crea repo en GitHub llamado `pastrycalc`
2. Sube los archivos
3. Settings → Pages → Branch: main → /root
4. URL: `https://tuusuario.github.io/pastrycalc`

---

## Instalar como app en el celular

### Android (Chrome)
- Abre la URL en Chrome
- Aparece banner automático "Instalar app"
- También: menú (⋮) → "Agregar a pantalla de inicio"

### iPhone (Safari)
- Abre la URL en Safari
- Toca el botón Compartir (📤)
- Selecciona "Añadir a pantalla de inicio"
- La app se instala con ícono y funciona offline

---

## Próximos pasos (versión comercial)

Para vender la app a otras reposteras necesitarás:

1. **Base de datos en la nube**: Supabase (gratis hasta cierto límite)
   - URL: https://supabase.com
   - Cada usuaria tiene sus propios datos

2. **Autenticación**: Login con Google o email
   - Supabase Auth (incluido)

3. **Pagos**: Stripe para cobrar suscripción mensual
   - URL: https://stripe.com

4. **Dominio propio**: ~$12/año en Namecheap o GoDaddy
   - Ej: `pastrycalc.app` o `reposteria-calc.com`

---

## Soporte
Desarrollado con Claude · Anthropic
