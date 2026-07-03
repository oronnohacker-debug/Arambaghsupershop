:root {
    --primary: #10b981; /* Premium Emerald Grocery Green */
    --primary-hover: #059669;
    --dark: #0f172a; /* Modern Slate Black */
    --accent: #f59e0b; /* Golden Orange */
    --bg: #f8fafc;
}

* {
    margin: 0; padding: 0; box-sizing: border-box;
    font-family: 'Poppins', sans-serif; scroll-behavior: smooth;
}

body { background: var(--bg); color: #334155; }

/* Sticky Premium Navigation Bar */
header {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    position: sticky; top: 0; z-index: 1000;
    box-shadow: 0 4px 30px rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(255,255,255,0.4);
}

.navbar {
    max-width: 1300px; margin: 0 auto; padding: 15px 25px;
    display: flex; justify-content: space-between; align-items: center;
}

.logo h2 { font-size: 24px; color: var(--dark); font-weight: 700; }
.logo span { color: var(--primary); }

.nav-links a {
    text-decoration: none; color: #64748b; font-weight: 500;
    margin: 0 15px; transition: 0.3s; font-size: 15px;
}
.nav-links a:hover { color: var(--primary); }

.cart-icon {
    font-size: 22px; background: #e2e8f0; padding: 10px 14px;
    border-radius: 50%; cursor: pointer; position: relative; transition: 0.3s;
}
.cart-icon:hover { background: var(--primary); color: white; transform: scale(1.05); }
.cart-icon span {
    position: absolute; top: -5px; right: -5px; background: var(--accent);
    color: white; font-size: 11px; font-weight: bold; width: 20px; height: 20px;
    display: flex; justify-content: center; align-items: center; border-radius: 50%;
}

/* Stunning Dashboard Hero */
.hero {
    background: radial-gradient(circle at top left, rgba(16, 185, 129, 0.1), transparent), #0f172a;
    color: white; padding: 100px 20px; text-align: center; position: relative; overflow: hidden;
}
.hero-content { max-width: 800px; margin: 0 auto; }
.tagline { background: rgba(255,255,255,0.1); padding: 6px 16px; border-radius: 30px; font-size: 13px; color: var(--primary); display: inline-block; margin-bottom: 15px;}
.hero h1 { font-size: 48px; font-weight: 700; margin-bottom: 15px; letter-spacing: -1px; }
.hero p { font-size: 17px; color: #94a3b8; line-height: 1.7; margin-bottom: 30px; }
.btn-primary {
    background: var(--primary); color: white; text-decoration: none; padding: 12px 35px;
    border-radius: 30px; font-weight: 600; display: inline-block; transition: 0.3s; box-shadow: 0 10px 20px rgba(16,185,129,0.3);
}
.btn-primary:hover { background: var(--primary-hover); transform: translateY(-3px); }

/* Category Layout Grid */
.section-header { text-align: center; margin: 60px 0 30px; }
.section-header h2 { font-size: 32px; color: var(--dark); font-weight: 700; }
.section-header p { color: #64748b; margin-top: 5px; }

.category-tabs { display: flex; justify-content: center; gap: 10px; margin-bottom: 40px; flex-wrap: wrap; }
.tab-btn {
    border: none; padding: 10px 22px; background: white; border-radius: 25px;
    font-size: 14px; font-weight: 500; cursor: pointer; transition: 0.3s; color: #475569;
    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
}
.tab-btn.active, .tab-btn:hover { background: var(--dark); color: white; }

/* Bento Grid Inspired Product System */
.product-grid { max-width: 1300px; margin: 0 auto; padding: 0 25px; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 30px; }
.product-card { background: white; border-radius: 16px; padding: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.02); border: 1px solid #f1f5f9; position: relative; transition: 0.3s; }
.product-card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,0,0,0.06); }
.product-card img { width: 100%; height: 180px; object-fit: cover; border-radius: 12px; margin-bottom: 15px; }
.badge { position: absolute; top: 15px; left: 15px; background: var(--accent); color: white; font-size: 11px; padding: 4px 10px; border-radius: 20px; font-weight: bold; }
.product-card h3 { font-size: 17px; color: var(--dark); margin-bottom: 5px; }
.unit { font-size: 13px; color: #94a3b8; margin-bottom: 12px; }
.price { font-size: 20px; font-weight: 700; color: var(--primary); margin-bottom: 15px; }
.old-price { font-size: 14px; text-decoration: line-through; color: #cbd5e1; margin-left: 5px; }
.add-to-cart { width: 100%; background: #f1f5f9; border: none; padding: 10px; border-radius: 10px; font-weight: 600; color: var(--dark); cursor: pointer; transition: 0.3s; }
.add-to-cart:hover { background: var(--primary); color: white; }

/* Integrated About Section Setup */
.about-section { background: white; padding: 80px 25px; margin-top: 80px; }
.about-container { max-width: 1000px; margin: 0 auto; text-align: center; }
.sub-title { color: var(--primary); font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
.about-text h2 { font-size: 36px; margin: 10px 0 20px; color: var(--dark); }
.about-text p { font-size: 16px; color: #64748b; line-height: 1.8; margin-bottom: 30px; }
.features-mini { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.f-item { font-weight: 600; color: var(--dark); font-size: 15px; }
.f-item i { color: var(--primary); margin-right: 8px; }

/* High-Contrast Contact Layout */
.contact-section { background: #f1f5f9; padding: 80px 25px; }
.contact-container { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
.contact-info h2 { font-size: 36px; color: var(--dark); margin-bottom: 15px; }
.contact-info p { color: #64748b; margin-bottom: 30px; }
.info-link { font-size: 16px; margin-bottom: 15px; font-weight: 500; }
.info-link i { color: var(--primary); margin-right: 12px; font-size: 18px; }
.contact-form-box { background: white; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
.contact-form-box input, .contact-form-box textarea { width: 100%; padding: 14px; margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 10px; outline: none; background: #f8fafc; }
.contact-form-box textarea { height: 120px; resize: none; }
.btn-submit { width: 100%; background: var(--dark); color: white; border: none; padding: 14px; border-radius: 10px; font-weight: 600; cursor: pointer; transition: 0.3s; }
.btn-submit:hover { background: var(--primary); }

/* Drawer Cart Panel & Forms Popups */
.cart-sidebar { position: fixed; top: 0; right: -400px; width: 400px; height: 100%; background: white; box-shadow: -10px 0 40px rgba(0,0,0,0.05); z-index: 2000; display: flex; flex-direction: column; transition: 0.4s cubic-bezier(0.77,0,0.175,1); }
.cart-sidebar.open { right: 0; }
.cart-header { padding: 25px; background: var(--dark); color: white; display: flex; justify-content: space-between; align-items: center; }
.close-cart { font-size: 30px; cursor: pointer; }
.cart-items-container { padding: 25px; flex-grow: 1; overflow-y: auto; }
.cart-item { display: flex; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid #f1f5f9; }
.cart-footer { padding: 25px; background: #f8fafc; border-top: 1px solid #e2e8f0; }
.total-price { font-size: 18px; font-weight: 700; color: var(--dark); margin-bottom: 15px; }
.checkout-btn { width: 100%; padding: 14px; background: var(--primary); color: white; border: none; font-weight: 600; border-radius: 10px; cursor: pointer; }

/* Clean Minimal Popups */
.modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15,23,42,0.6); backdrop-filter: blur(4px); z-index: 3000; justify-content: center; align-items: center; }
.modal-content { background: white; padding: 40px; border-radius: 20px; width: 90%; max-width: 450px; position: relative; }
.close-modal { position: absolute; top: 20px; right: 25px; font-size: 24px; cursor: pointer; }
.modal-content h2 { font-size: 24px; color: var(--dark); margin-bottom: 20px; }
#order-form input, #order-form textarea { width: 100%; padding: 12px; margin-bottom: 15px; border: 1px solid #e2e8f0; border-radius: 10px; background: #f8fafc; }
.confirm-order-btn { width: 100%; padding: 14px; background: var(--primary); color: white; border: none; font-weight: 600; border-radius: 10px; cursor: pointer; }

footer { background: var(--dark); color: #64748b; text-align: center; padding: 30px; font-size: 14px; border-top: 1px solid #1e293b; }

/* Responsive adjustments */
@media (max-width: 768px) {
    .navbar { flex-direction: column; gap: 15px; }
    .contact-container { grid-template-columns: 1fr; }
    .hero h1 { font-size: 32px; }
    .cart-sidebar { width: 100%; right: -100%; }
}
