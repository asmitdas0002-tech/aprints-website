export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response(HOME_PAGE, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    return new Response("Not found", { status: 404 });
  }
};

const HOME_PAGE = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>A PRINTS — Print • Xerox • Photocopy</title>
<style>
*{box-sizing:border-box}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial;background:#f4f8ff;color:#0f2447}
header{background:#0a2a5e;color:#fff;padding:28px 18px;text-align:center}
header h1{margin:0;font-size:38px;letter-spacing:2px}header p{margin:8px 0 0;color:#bcd6ff}
nav{background:#fff;padding:12px;text-align:center;position:sticky;top:0;box-shadow:0 2px 10px rgba(0,0,0,.06)}
nav a{margin:0 10px;color:#0a2a5e;text-decoration:none;font-weight:700;font-size:14px}
.wrap{max-width:900px;margin:auto;padding:18px}
.card{background:#fff;border-radius:16px;padding:20px;margin:16px 0;box-shadow:0 4px 20px rgba(10,42,94,.08)}
h2{margin:0 0 12px}.price{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #eef2ff;font-weight:600}
.price span:last-child{color:#0a2a5e}
input,textarea,select{width:100%;padding:13px;border:1px solid #d6e2ff;border-radius:10px;margin:8px 0;font-size:16px}
button{background:#0a2a5e;color:#fff;border:0;padding:14px;width:100%;border-radius:10px;font-size:16px;font-weight:800}
small{color:#666}.badge{background:#e6f0ff;color:#0a2a5e;padding:5px 10px;border-radius:20px;font-size:12px;font-weight:700}
footer{text-align:center;padding:20px;color:#666;font-size:13px}
</style></head><body>
<header><div class="badge">KAZIRANGA UNIVERSITY • JORHAT</div><h1>A PRINTS</h1><p>PRINT • XEROX • PHOTOCOPY</p></header>
<nav><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#order">Order Now</a><a href="#contact">Contact</a></nav>
<div class="wrap">
<div class="card" id="services"><h2>Our Services</h2><p>✅ Black & White Printing<br>✅ Colour Printing<br>✅ Xerox / Photocopy<br>✅ Passport Photos<br>✅ Fast, Clean & Affordable</p></div>
<div class="card" id="pricing"><h2>Pricing</h2>
<div class="price"><span>Black & White Printing</span><span>₹4 / page</span></div>
<div class="price"><span>Colour Printing</span><span>₹9 / page</span></div>
<div class="price"><span>Xerox</span><span>₹3 / page</span></div>
<div class="price"><span>Passport Photos (4 copies)</span><span>₹15</span></div>
<small>No GST added. Prices visible on site.</small></div>
<div class="card" id="order"><h2>Place Your Order</h2><p>Fill your name, upload files (optional), and send your request.</p>
<form id="f"><label>Your Name *</label><input required name="name" placeholder="Enter your full name">
<label>Upload Files (PDF / JPG / JPEG) — Optional</label><input type="file" name="files" multiple accept=".pdf,.jpg,.jpeg">
<label>Message (Optional)</label><textarea name="message" rows="4" placeholder="e.g. Print 10 pages, B&W, double side"></textarea>
<button type="submit">Submit Order Request</button><p id="msg"></p></form></div>
<div class="card" id="contact"><h2>Contact</h2><p><b>Address:</b> The Assam Kaziranga University, Jorhat, Assam, India<br><b>Phone:</b> +91 8135956820</p></div>
</div><footer>© A PRINTS • Made for students & customers in Jorhat</footer>
<script>document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();document.getElementById('msg').textContent='✅ Request received! We will contact you soon. (Online saving coming in next step)';});</script>
</body></html>`;
