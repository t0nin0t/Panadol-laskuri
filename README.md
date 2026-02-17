# 💊 Panadol Lääkelaskuri

Moderni ja käyttäjäystävällinen web-sovellus Panadol-oraalisuspension (24 mg/ml) annostuksen laskemiseen lasten painon perusteella.

## 🌐 Live Demo

**[https://t0nin0t.github.io/Panadol-laskuri/](https://t0nin0t.github.io/Panadol-laskuri/)**

## ✨ Ominaisuudet

- 📱 **Mobiilioptimоitu** - Toimii sujuvasti puhelimella, tabletilla ja tietokoneella
- 🧮 **Automaattinen laskenta** - Laskee annoksen reaaliajassa painon perusteella
- 📊 **Selkeä visualisointi** - Näyttää sekä mg- että ml-annokset
- 🔒 **Turvallisuusohjeet** - Sisältää tärkeät turvallisuustiedot ja käyttöohjeet
- 📖 **Tuotetiedot** - Laajennettavat osiot käyttötarkoituksesta, annostelusta ja säilytyksestä
- ⚡ **Nopea** - Ei vaadi asennusta, toimii suoraan selaimessa
- 🎨 **Moderni UI** - Intuitiivinen ja visuaalisesti miellyttävä käyttöliittymä

## 🛠️ Teknologiat

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Font Awesome
- **Deployment:** GitHub Actions + GitHub Pages

## 📱 Käyttö

1. Avaa sovellus selaimessa: [https://t0nin0t.github.io/Panadol-laskuri/](https://t0nin0t.github.io/Panadol-laskuri/)
2. Syötä lapsen paino kilogrammoina
3. Sovellus laskee automaattisesti suositellun annoksen

**Vinkki:** Voit lisätä sovelluksen puhelimen kotinäytölle:
- **iPhone:** Safari → Jaa → "Lisää Koti-valikkoon"
- **Android:** Chrome → ⋮ → "Lisää aloitusnäyttöön"

## 💻 Paikallinen Kehitys

### Vaatimukset
- Node.js 20 tai uudempi
- npm

### Asennus

```bash
# Kloonaa repositorio
git clone https://github.com/t0nin0t/Panadol-laskuri.git
cd Panadol-laskuri

# Asenna riippuvuudet
npm install

# Käynnistä kehitysserveri
npm run dev
```

Sovellus käynnistyy osoitteeseen `http://localhost:3000`

### Muut Komennot

```bash
# Buildaa tuotantoversioon
npm run build

# Esikatsele buildia
npm run preview
```

## 🚀 Deployment

Projekti käyttää GitHub Actionsia automaattiseen deploymenttiin. Jokainen push `main`-branchiin käynnistää buildin ja julkaisee päivitetyn version GitHub Pagesiin.

Workflow löytyy: `.github/workflows/deploy.yml`

## 📋 Annostusohjeet

Sovellus laskee annoksen seuraavien periaatteiden mukaisesti:
- **Vahvuus:** 24 mg/ml (Panadol oraalisuspensio)
- **Suositus:** 15 mg/kg
- **Annosväli:** Vähintään 4-6 tuntia
- **Enimmäisannos:** 4 annosta vuorokaudessa

## ⚠️ Vastuuvapauslauseke

**TÄRKEÄÄ:** Tämä sovellus on tarkoitettu vain ohjeelliseksi työkaluksi. 

- Varmista annostus aina lääkkeen virallisesta pakkausselosteesta
- Ota yhteyttä lääkäriin tai apteekkiin ennen lääkkeen antamista
- Parasetamolin yliannostus voi aiheuttaa vakavia maksavaurioita
- Älä ylitä suositeltuja annoksia

Sovelluksen kehittäjä ei ota vastuuta mahdollisista virheistä tai väärinkäytöstä.

## 🤝 Kehitys ja Palaute

Löysitkö bugin tai sinulla on parannusehdotus? 

- Avaa [Issue](https://github.com/t0nin0t/Panadol-laskuri/issues)
- Tee pull request

## 📄 Lisenssi

MIT License - Vapaasti käytettävissä ja muokattavissa

## 👨‍💻 Tekijä

**t0nin0t**

---

<div align="center">

**Käytä vastuullisesti. Noudata aina lääkkeen pakkausselosteen ohjeita.**

⭐ **Jos sovellus oli hyödyllinen, jätä tähti GitHubiin!** ⭐

</div>
