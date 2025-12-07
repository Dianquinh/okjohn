
    if (localStorage.getItem("ga_consent") !== null) {
        document.getElementById("cookie-banner").style.display = "none";
    }

    document.getElementById("acceptCookies").addEventListener("click", function () {
        localStorage.setItem("ga_consent", "granted");
        document.getElementById("cookie-banner").style.display = "none";
        loadGoogleAnalytics(); // Active GA4
    });

    document.getElementById("rejectCookies").addEventListener("click", function () {
        localStorage.setItem("ga_consent", "denied");
        document.getElementById("cookie-banner").style.display = "none";
    });

    function loadGoogleAnalytics() {
        const ga = document.createElement('script');
        ga.setAttribute('async', '');
        ga.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; 
        document.head.appendChild(ga);

        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    }
    if (localStorage.getItem("ga_consent") === "granted") {
        loadGoogleAnalytics();
    }

