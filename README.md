# Guitar Composer's Toolbox

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.guitarcomposerstoolbox.com%2F)](https://www.guitarcomposerstoolbox.com/)

**Guitar Composer's Toolbox** is a web application designed to assist guitar and ukulele players in finding chords that best fit their compositions made with React and Gatsby. It provides interactive tools built with JavaScript libraries such as **Teoria**, **Teoria-Chord-Progression**, and **Chordictionary**.

## Interactive Tools

- **Scale Harmonizer**: Provides all triad and seventh chords that harmonically fit within a selected musical scale, helping you discover complementary chord progressions.

- **Chords Finder**: Easily discover guitar chords to inspire new harmonic progressions and sonorities in your compositions.

- **Guitar Chords Finder**: Specifically tailored for guitarists to visually locate and experiment with chord shapes on the fretboard.

- **Ukulele Chords Finder**: Similar to the Guitar Chords Finder but optimized for ukulele players, allowing for easy chord exploration and discovery.

## Technologies Used

- **Teoria**: For music theory analysis and chord construction.
- **Teoria-Chord-Progression**: To generate and visualize chord progressions clearly and effectively.
- **Chordictionary**: For accurate chord generation and visualization.

## Despliegue (Netlify)

El sitio se despliega en **Netlify** conectando este repositorio de GitHub:

1. Entra en [app.netlify.com](https://app.netlify.com) e inicia sesión.
2. **Add new site** → **Import an existing project** → **GitHub** y elige el repo de este proyecto.
3. Netlify detecta Gatsby y usa por defecto `npm run build` y carpeta `public`. Si existe `netlify.toml` en el repo, se usan sus valores (comando, `URL` para sitemap/SEO, etc.).
4. Cada **push a la rama principal** (p. ej. `main`) genera un deploy automático.

Dominio: [www.guitarcomposerstoolbox.com](https://www.guitarcomposerstoolbox.com). Las redirecciones (trailing slash, www) y la variable `URL` están en `netlify.toml` y en `static/_redirects`.

## Contributing

Contributions are welcome! If you have suggestions for new features or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


Check it out at https://www.guitarcomposerstoolbox.com
