# ⚙️ [bliu.tech](https://www.bliu.tech)

A repository containing code for Benson Liu's personal website.

Access the website at https://bliu.tech !

## Local Development

For local development with HTML & CSS, it is recommended to install [`serve`](https://github.com/bliutech/bliu.tech) as a useful tool.

```bash
git clone https://github.com/bliutech/bliu.tech.git
cd bliu.tech/
npx serve
```

For linting, it is recommended to install [`prettier`](https://prettier.io/docs/en/install.html) as a useful tool.

```bash
npx prettier --write *.html *.css *.js
```

For accessibility checks, it is recommended to install [`pa11y`](https://pa11y.org/) as a useful tool.

```bash
for file in *.html; do if ! pa11y --reporter cli $file; then echo "$file : FAILED"; break; fi; done
```
