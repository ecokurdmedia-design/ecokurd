// زبان پیش‌فرض: انگلیسی
let currentLang = 'en';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('ecokurd-lang', lang);

    // به‌روزرسانی تمام المان‌های دارای data-en, data-so, data-ku
    document.querySelectorAll('[data-en]').forEach(el => {
        if (lang === 'en' && el.dataset.en) el.innerHTML = el.dataset.en;
        if (lang === 'so' && el.dataset.so) el.innerHTML = el.dataset.so;
        if (lang === 'ku' && el.dataset.ku) el.innerHTML = el.dataset.ku;
    });
}

// بارگذاری زبان ذخیره شده از localStorage هنگام باز کردن صفحه
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('ecokurd-lang');
    if (savedLang) {
        setLang(savedLang);
    }
});