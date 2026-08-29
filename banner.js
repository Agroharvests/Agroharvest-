// AgroHarvest Master High-Definition Banner Engine
const AGRO_MASTER_BANNER = "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80";

function applyAgroBanners() {
    const banners = document.querySelectorAll('.hero-banner-img, .plan-crop-img');
    banners.forEach(img => {
        img.src = AGRO_MASTER_BANNER;
    });
}

document.addEventListener("DOMContentLoaded", applyAgroBanners);
