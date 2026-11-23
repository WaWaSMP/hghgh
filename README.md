# Hindnet
hindnet-site (public website) and hindnet-admin (admin panel). Static, no build step.
1. Firebase: enable Email/Password auth, create the admin user (hindnet@web.com), create Firestore, publish firestore.rules.
2. Edit CFG in hindnet-site/js/core.js (WhatsApp, phone, email, address).
3. Optional real 3D model: put a GLB laptop file at hindnet-site/models/laptop.glb and set model:"models/laptop.glb" in CFG (js/core.js).
4. Vercel: two projects, Root Directory hindnet-site and hindnet-admin. Add both domains in Firebase Auth > Authorized domains.
Local test: deploy to Vercel to test (routes use real URLs and need the rewrites in vercel.json)

## Admin panel
- Works on phones (bottom navigation) and desktop (sidebar). On a phone use browser menu > Add to Home screen to install it like an app.
- Products can be hidden from the website, duplicated, exported to CSV and have quick stock buttons.
- Travel requests have a status (New, Confirmed, Cancelled). Messages have read/unread and a Reply button.
- Contact info edited here appears on the website automatically.
- If you see Permission denied, publish firestore.rules in Firebase.

## Location
Store location is set from the Google Maps link (26.310596, 86.8453388). You can change it any time in Admin > Contact info (paste a new Google Maps link or use current location). Opening hours entered there power the Open now badge and Google business data.

## Extra features
Wishlist, product search (press / or Ctrl+K), EMI calculator, recently viewed, share buttons, Google Analytics (set CFG.ga in js/core.js, empty it to turn off), security headers, branded 404 page.

## Desktop Studio and PC Builder
- Desktop Studio (/desktops): ready-made PCs. Add them in Admin > Desktops, exactly like laptops.
- PC Builder (/build): customers choose cabinet, processor, board, RAM, SSD, graphics, cooling, power supply and extras. Incompatible parts are disabled automatically.
- Admin > PC parts: add, edit, hide and price every component. First time: tap "Load starter catalog" (68 parts with India prices, Nov 2026 estimates). Use "Change prices" to raise or lower a category by a percentage.
- Admin > PC Parts > Builder settings: assembly charge and the note shown to customers.
- Admin > Build requests: quote requests from customers with status, WhatsApp and email buttons.
- IMPORTANT: republish firestore.rules (new collections desktops, parts, builds and admin update rights).
