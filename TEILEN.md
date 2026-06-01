# Seite zum Testen teilen

## Warum Virus-Warnung bei `loca.lt`?

**LocalTunnel** (`*.loca.lt`) wird von vielen Virenscannern und Browsern blockiert – nicht weil deine Seite infiziert ist, sondern weil der Dienst früher oft für Phishing missbraucht wurde. **Nicht weiter LocalTunnel nutzen.**

Stattdessen: **Cloudflare Tunnel** oder **Vercel** (beides seriös, kaum False Positives).

---

## Wichtig: Beide Schritte nötig

Der Tunnel leitet nur weiter – **ohne laufenden Dev-Server** (`npm run dev`) bleibt die Seite leer.

Nach Änderungen an `next.config.ts` den Dev-Server **einmal neu starten**.

---

## Option 1: Öffentlicher Link (empfohlen – Cloudflare)

**Einmalig:** Cloudflare-Tunnel-Tool installieren (falls noch nicht da):

```bash
brew install cloudflared
```

**Jedes Mal zum Testen:**

Terminal 1:

```bash
npm run dev
```

Terminal 2 (nachdem Terminal 1 „Ready“ zeigt):

```bash
npm run tunnel
```

Oder alles in einem Schritt: `npm run share`

In der Ausgabe erscheint eine URL wie `https://xxxx.trycloudflare.com` – **diesen Link** an Tester senden.

- Kein Tunnel-Passwort nötig
- Deutlich seltener Virus-Warnungen als LocalTunnel
- Dev-Server und Tunnel müssen laufen; Mac wach halten
- URL ändert sich bei jedem Neustart des Tunnels

---

## Option 2: Gleiches WLAN (sicherste Test-Variante)

Kein Tunnel, kein Virenscanner-Problem:

```
http://192.168.178.35:3010
```

(IP mit `ipconfig getifaddr en0` prüfen – nur im **gleichen WLAN** erreichbar.)

---

## Option 3: Stabile Preview ohne Tunnel – Vercel

Für externe Tester über Tage/Wochen:

```bash
npx vercel
```

Liefert eine `*.vercel.app`-URL – von Firmen-Firewalls meist erlaubt.

---

## Wenn weiterhin eine Warnung kommt

1. Link prüfen: muss `trycloudflare.com` oder `vercel.app` sein – **nicht** `loca.lt`
2. Tester: „Details“ → „Trotzdem öffnen“ nur wenn der Link von dir stammt
3. Alternativ nur **Option 2 (WLAN)** oder **Vercel** nutzen
