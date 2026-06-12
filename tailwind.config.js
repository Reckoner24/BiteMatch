/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-primary-container": "#5f1900",
                "surface-container-low": "#f3f3f3",
                "secondary-fixed": "#ffdad9",
                "error-container": "#ffdad6",
                "surface-variant": "#e2e2e2",
                "primary-fixed-dim": "#ffb59d",
                "on-tertiary-container": "#00383f",
                "on-secondary-fixed": "#400009",
                "on-background": "#1a1c1c",
                "on-surface-variant": "#594139",
                "surface-container-lowest": "#ffffff",
                "on-primary-fixed-variant": "#832600",
                "secondary-fixed-dim": "#ffb3b3",
                "on-secondary-container": "#600012",
                "on-primary-fixed": "#390c00",
                "tertiary-fixed-dim": "#6ad6e6",
                "surface-dim": "#dadada",
                "tertiary-container": "#33a8b8",
                "surface-tint": "#ab3500",
                "outline": "#8d7168",
                "on-surface": "#1a1c1c",
                "on-error-container": "#93000a",
                "on-secondary-fixed-variant": "#920021",
                "tertiary": "#006874",
                "on-error": "#ffffff",
                "background": "#f9f9f9",
                "primary": "#ab3500",
                "surface-bright": "#f9f9f9",
                "outline-variant": "#e1bfb5",
                "on-tertiary-fixed": "#001f24",
                "on-secondary": "#ffffff",
                "inverse-primary": "#ffb59d",
                "error": "#ba1a1a",
                "inverse-on-surface": "#f1f1f1",
                "surface-container-high": "#e8e8e8",
                "on-tertiary": "#ffffff",
                "surface-container": "#eeeeee",
                "tertiary-fixed": "#98f0ff",
                "primary-fixed": "#ffdbd0",
                "surface": "#f9f9f9",
                "on-primary": "#ffffff",
                "surface-container-highest": "#e2e2e2",
                "secondary": "#b62135",
                "primary-container": "#ff6b35",
                "secondary-container": "#ff5964",
                "inverse-surface": "#2f3131"
            },
            borderRadius: {
                "md3-none": "0px",
                "md3-xs": "4px",
                "md3-sm": "8px",
                "md3-md": "12px",
                "md3-lg": "16px",
                "md3-xl": "28px",
                "md3-full": "9999px"
            },
            boxShadow: {
                "md3-1": "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                "md3-2": "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
                "md3-3": "0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
                "md3-4": "0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
                "md3-5": "0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)"
            },
            spacing: {
                "xs": "8px",
                "xl": "48px",
                "edge_margin": "20px",
                "base": "4px",
                "md": "24px",
                "gutter": "12px",
                "sm": "16px",
                "lg": "32px"
            },
            fontFamily: {
                "title-md": ["Montserrat"],
                "label-md": ["Plus Jakarta Sans"],
                "headline-lg": ["Montserrat"],
                "body-md": ["Plus Jakarta Sans"],
                "body-lg": ["Plus Jakarta Sans"],
                "headline-lg-mobile": ["Montserrat"],
                "display-lg": ["Montserrat"]
            },
            fontSize: {
                "title-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "600"}],
                "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                "headline-lg-mobile": ["28px", {"lineHeight": "34px", "fontWeight": "700"}],
                "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800"}]
            }
        }
    }
};
