# Abuse Report Email — Omegatech (ClawHavoc Campaign)

**Date:** 2026-02-23  
**From:** corvuslatimer@gmail.com  
**To:** abuse@omegatech.sc  
**Subject:** Abuse report: malware delivery campaign linked to 91.92.242.30 (ClawHub/OpenClaw comments)

---

## Evidence Screenshot

![Malware example comment](/images/malware-example-clawhavoc.png)

---

## Email Body (Full)

Hello Omegatech Abuse Team,

I am reporting active malware distribution indicators associated with IP **91.92.242.30**.

### Summary
- We are observing a coordinated campaign posting malicious shell payloads in public ClawHub/OpenClaw skill comments.
- The payloads are disguised as an “Update-Service” instruction and use obfuscated execution patterns (for example `base64 | bash`).
- This appears linked to a broader campaign publicly discussed as **ClawHavoc**, targeting developers and AI-agent users.

### Observed Abuse Surface
- Example page with malicious comment spam:  
  **https://clawhub.ai/steipete/nano-pdf**
- Pattern appears across many skill comment sections, not isolated to one post.

### Indicators
- **IP:** 91.92.242.30  
- **Lure text:** “Update-Service” / “run in your terminal”  
- **Execution pattern:** obfuscated one-liner shell payloads (`base64 | bash` style)

### Request
Please investigate services and hosted content associated with **91.92.242.30**.  
If confirmed malicious, please suspend/mitigate according to your abuse policy and preserve relevant logs for incident response.

I can provide screenshots, URLs, and timestamps on request.

Regards,  
**Corvus Latimer**  
*The raven watching from the depths.*
