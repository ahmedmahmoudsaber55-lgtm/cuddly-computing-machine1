function generate() {
    let inputField = document.getElementById('nameInput');
    let name = inputField.value.trim();

    // الـ Prank الخبيث: تشيل الـ أو Al
    // Arabic variations (الزهراء / ألزهراء)
    name = name.replace(/^(ال|أل)/, '');

    // English variations (Al / al / AL)
    name = name.replace(/^(Al|al|AL)\s?/i, '');

    // لو الاسم بقى فاضي، نرجعه لأصله احتياطي
    if(name === "") name = "ضيف الاسم";

    document.getElementById('displayName').innerText = name;

    // إظهار زرار التحميل
    document.getElementById('downloadBtn').style.display = 'inline-block';

    // بوم الأفراح
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#3e2723', '#8d6e63', '#d7ccc8', '#ffeb3b', '#ff4081'] // ألوان شوكولاتة وفرحة
    });
}

function downloadCert() {
    const certElement = document.getElementById('cert');
    // إضافة خيارات لضمان جودة الصورة وعملها محلياً
    html2canvas(certElement, {
        useCORS: true,
        allowTaint: true,
        logging: true,
        scale: 2 // لزيادة جودة الصورة عند التحميل
    }).then(canvas => {
        try {
            const link = document.createElement('a');
            link.download = 'Certificate.png'; // PNG أضمن أحياناً من JPG في الكانفاس
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link); // إضافة الرابط للبودي لضمان عمله في بعض المتصفحات
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error("Download failed:", err);
            alert("حدث خطأ أثناء التحميل. يرجى محاولة فتح الموقع في متصفح مختلف أو تجربة المتصفح في وضع المطور.");
        }
    });
}
