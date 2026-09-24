# ⚡ Grupo EMAX — Landing Page de Alta Conversión para Asesoramiento Energético

> **Prueba Técnica:** Diseñadora Web / Frontend — Grupo EMAX (*Metamorfosis Energética S.L.*)  
> **Proyecto:** Landing page a código orientada a captación de clientes (CRO), optimización de facturas de luz y gas, y consulta energética gratuita.

---

## 🎯 1. Objetivo y Enfoque del Proyecto

El objetivo principal es resolver el dolor común de los usuarios y empresas en el mercado energético español: **la falta de transparencia, las facturas indescifrables y el sobrecoste por potencia no utilizada**.

La solución presenta a **Grupo EMAX** como un **centro de soluciones energéticas 360°**, destacando su **independencia total** respecto a las comercializadoras tradicionales: *“No vendemos tarifas, defendemos tus intereses”*.

---

## 🚀 2. Tecnologías Utilizadas y Justificación

| Tecnología | Rol en el Proyecto | Justificación Técnica |
| :--- | :--- | :--- |
| **Next.js (App Router)** | Framework Frontend & SSR | Rendimiento líder en Core Web Vitals, pre-renderizado estático para SEO óptimo y compatibilidad nativa con **Vercel**. |
| **React 19 + TypeScript** | Biblioteca de UI y Tipado | Componentes modulares y reutilizables con tipado estricto para asegurar cero errores en tiempo de ejecución. |
| **Tailwind CSS v4** | Sistema de Estilos | Maquetación responsiva precisa (*mobile-first*), diseño limpio y consistencia en tokens de color corporativos. |
| **Lucide React** | Iconografía SVG | Iconos vectoriales consistentes, ligeros y accesibles que refuerzan la jerarquía visual sin penalizar la velocidad de carga. |
| **Canvas Confetti** | Microinteracción de Conversión | Feedback visual celebratorio y de confianza al completar el formulario de estudio gratuito. |

---

## 🎨 3. Decisiones de Diseño y Experiencia de Usuario (UX/UI)

### 🔹 Paleta de Colores Corporativa
* **Azul Marino Profundo (`#0F172A` / `#0A192F`):** Transmite solidez institucional, seriedad y solvencia técnica.
* **Azul Eléctrico / Cyan (`#0284C7` / `#06B6D4`):** Representa energía moderna, tecnología limpia e innovación.
* **Verde Esmeralda (`#10B981`):** Asociado psicológicamente al ahorro directo en euros, eficiencia y sostenibilidad ambiental.
* **Fondo Neutro Pulcro (`#F8FAFC`):** Espaciado generoso que permite una lectura descansada y profesional.

### 🔹 Elementos Clave Orientados a Conversión (CRO)
1. **Hero con Tarjeta de Diagnóstico Real:** Muestra visualmente el antes y después de una factura auditada (de 154,20 € a 89,50 €/mes con ahorro del 41,9%).
2. **Simulador Interactivo de Ahorro:** Permite al usuario calcular su ahorro anual estimado en tiempo real mediante un slider de gasto mensual y selector de tipo de cliente (*Hogar* o *Negocio*).
3. **⭐ Chatbot Asistente para FAQ ("Maxi"):**
   * En lugar del clásico acordeón estático, se diseñó un **Asistente Virtual interactivo con IA visual** que responde dudas comunes (*¿Tiene coste?*, *¿Cambio obligatorio?*, *¿Cuánto tarda?*, etc.) con efecto de escritura en vivo y botones de acción contextuales.
   * **Accesibilidad garantizada:** Incluye un selector para alternar con un clic al **Modo Lista Clásica (Acordeón)**.
4. **Formulario de Captación Multi-perfil:** Con selección de suministro (*Luz*, *Gas*, *Dual*), selector de tipo de cliente (*Particular*, *Autónomo*, *Empresa*), cargador simulado de facturas en PDF/imagen y pantalla de radicado de confirmación.
5. **Botones Flotantes de Contacto Inmediato:** Acceso directo a llamada gratuita (900 831 204) y chat de WhatsApp para resolver objeciones al instante.

---

## 📂 4. Organización del Proyecto

```text
landing-emax/
├── public/                 # Recursos estáticos
├── src/
│   ├── app/
│   │   ├── globals.css     # Variables de color, fuentes y scrollbar personalizada
│   │   ├── layout.tsx      # Configuración de fuente Plus Jakarta Sans y metadatos SEO
│   │   └── page.tsx        # Ensamblado modular de la landing page
│   └── components/
│       ├── Logo.tsx              # Isotipo y logotipo vectorial de Grupo EMAX
│       ├── Navbar.tsx            # Navegación fija con barra superior de avisos y responsive
│       ├── Hero.tsx              # Hero principal, métricas de confianza y comparativa
│       ├── ProblemSection.tsx    # 4 dolores del consumidor energético español
│       ├── SolutionSection.tsx   # Solución 360° e independencia de Grupo EMAX
│       ├── SavingsSimulator.tsx  # Calculadora dinámica interactiva de ahorro
│       ├── BenefitsSection.tsx   # 6 beneficios claros garantizados
│       ├── HowItWorks.tsx        # Proceso ágil en 3 pasos explicativos
│       ├── Testimonials.tsx      # Casos de éxito certificados en Madrid, Valencia y Barcelona
│       ├── FaqChatbot.tsx        # Chatbot interactivo de preguntas frecuentes + modo lista
│       ├── LeadForm.tsx          # Formulario de alta conversión con validación y confeti
│       ├── Footer.tsx            # Pie de página institucional y datos legales (Metamorfosis Energética S.L.)
│       └── FloatingContact.tsx   # Acceso flotante directo a teléfono y WhatsApp
├── package.json
└── README.md
```

---

## 🤖 5. Declaración de Uso de Inteligencia Artificial

De conformidad con el punto 4 y 7 de la prueba técnica:
* **Uso de IA como apoyo:** Se empleó IA para el análisis comparativo del mercado energético español, sintetizar el tono comunicativo oficial de Grupo EMAX y estructurar las respuestas más frecuentes del asistente virtual.
* **Criterio y personalización manual:** La arquitectura de componentes, las interacciones en tiempo real (simulador numérico, estado reactivo del chatbot, validaciones de formulario), el diseño de la interfaz y la armonización visual fueron desarrollados a medida y adaptados minuciosamente sin recurrir a plantillas genéricas.

---

## 💻 6. Instrucciones de Instalación y Ejecución Local

### Prerrequisitos
* Node.js v18+ (recomendado v20+)
* npm v9+

### Pasos
```bash
# 1. Entrar en la carpeta del proyecto
cd landing-emax

# 2. Instalar las dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la aplicación funcionando.

### Construir para Producción
```bash
npm run build
npm run start
```

---

## ☁️ 7. Despliegue en Vercel

Este proyecto está optimizado para desplegarse en **Vercel** en 2 minutos:

1. Subir este repositorio a tu cuenta de **GitHub** o **GitLab**.
2. Entrar en [vercel.com](https://vercel.com) e importar el repositorio.
3. El framework será detectado automáticamente como **Next.js**.
4. Haz clic en **Deploy** y obtendrás la URL pública y lista para enviar a la prueba técnica.
