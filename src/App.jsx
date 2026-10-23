
import { useEffect, useState } from "react";
import {
 ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X,
MapPin, Share2, MessageCircle, Droplets, Construction,
Lightbulb, Sprout, Users, HeartHandshake, ShieldCheck,
ChevronRight, Send, Leaf
} from "lucide-react";
import "./App.css";

const topics = [
  {
    icon: Construction,
    number: "01",
    title: "सड़क एवं नालियाँ",
    description: "स्थानीय सड़कों, जल निकासी और सार्वजनिक सुविधाओं से जुड़े मुद्दे।",
  },
  {
    icon: Droplets,
    number: "02",
    title: "पेयजल व्यवस्था",
    description: "पानी की उपलब्धता और उससे संबंधित स्थानीय जरूरतों की जानकारी।",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "स्ट्रीट लाइट",
    description: "सार्वजनिक स्थानों पर रोशनी से जुड़ी जरूरतों और सुझावों पर चर्चा।",
  },
  {
    icon: Sprout,
    number: "04",
    title: "स्वच्छ एवं हरित गाँव",
    description: "स्वच्छता, कचरा प्रबंधन और हरियाली से जुड़े विचार।",
  },
];

const values = [
  { icon: Users, title: "जनभागीदारी", text: "लोगों के विचार और सुझाव" },
  { icon: HeartHandshake, title: "जनसंवाद", text: "स्थानीय मुद्दों पर खुली बातचीत" },
  { icon: ShieldCheck, title: "पारदर्शिता", text: "जानकारी और कार्यों का स्पष्ट विवरण" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    const duration = 3200;
    let finishTimer;

    const timer = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(timer);
        finishTimer = window.setTimeout(() => setLoading(false), 250);
      }
    }, 25);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  async function shareWebsite() {
    const url = `${window.location.origin}${window.location.pathname}`;
    const title = "शंकर लाल सांभरिया | ग्राम पंचायत जयसिंहपुरा";
    const shareText = `🙏 राम-राम सा! 🙏

श्री शंकर लाल सांभरिया जी
सरपंच पद के उम्मीदवार · ग्राम पंचायत जयसिंहपुरा

गाँव के उज्ज्वल भविष्य और विकास की नई दिशा के लिए,
आपका अमूल्य मत और आशीर्वाद सादर अपेक्षित है।

आपका विश्वास, हमारा संकल्प।

🌹 ग्राम पंचायत जयसिंहपुरा · जयपुर · राजस्थान 🌹

🔗 उम्मीदवार का परिचय एवं चुनाव संबंधी जानकारी:
${url}`;

    let objectUrl;

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1200;
      canvas.height = 630;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas is not supported");

      const background = ctx.createLinearGradient(0, 0, 1200, 630);
      background.addColorStop(0, "#1c0907");
      background.addColorStop(0.55, "#552116");
      background.addColorStop(1, "#2a0d09");
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(231, 194, 125, 0.16)";
      ctx.lineWidth = 2;
      [205, 255, 305].forEach((radius) => {
        ctx.beginPath();
        ctx.arc(920, 300, radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.fillStyle = "#e7c27d";
      ctx.fillRect(76, 94, 54, 3);
      ctx.fillRect(143, 94, 8, 3);

      const photo = new Image();
      photo.src = "/shankar-lal.jpg";
      if (photo.decode) {
        await photo.decode();
      } else {
        await new Promise((resolve, reject) => {
          photo.onload = resolve;
          photo.onerror = reject;
        });
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(920, 282, 153, 0, Math.PI * 2);
      ctx.clip();
      const scale = Math.max(306 / photo.width, 306 / photo.height);
      const width = photo.width * scale;
      const height = photo.height * scale;
      ctx.drawImage(photo, 920 - width / 2, 282 - height / 2, width, height);
      ctx.restore();

      ctx.beginPath();
      ctx.arc(920, 282, 160, 0, Math.PI * 2);
      ctx.strokeStyle = "#e7c27d";
      ctx.lineWidth = 6;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(920, 466, 38, 0, Math.PI * 2);
      ctx.fillStyle = "#35120d";
      ctx.fill();
      ctx.strokeStyle = "#d9b46c";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = "#ffe5ac";
      ctx.font = "bold 30px Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText("SL", 920, 477);

      ctx.textAlign = "left";
      ctx.fillStyle = "#e7c27d";
      ctx.font = "600 27px 'Noto Sans Devanagari', sans-serif";
      ctx.fillText("राम-राम सा!", 76, 151);

      ctx.fillStyle = "#fff0d1";
      ctx.font = "800 57px 'Noto Sans Devanagari', sans-serif";
      ctx.fillText("शंकर लाल", 76, 247);
      ctx.fillText("सांभरिया", 76, 323);

      ctx.fillStyle = "#e7c27d";
      ctx.fillRect(78, 359, 365, 2);

      ctx.fillStyle = "#f6dfb6";
      ctx.font = "500 25px 'Noto Sans Devanagari', sans-serif";
      ctx.fillText("ग्राम पंचायत जयसिंहपुरा · जयपुर · राजस्थान", 76, 410);

      ctx.fillStyle = "#e5d0ae";
      ctx.font = "500 21px 'Noto Sans Devanagari', sans-serif";
      ctx.fillText("सरपंच पद के उम्मीदवार", 76, 460);

      // Temporary election-symbol announcement badge; no unofficial symbol is shown.
      const badgeX = 76;
      const badgeY = 482;
      const badgeW = 455;
      const badgeH = 52;
      ctx.fillStyle = "rgba(231, 194, 125, 0.12)";
      ctx.fillRect(badgeX, badgeY, badgeW, badgeH);
      ctx.strokeStyle = "#d9b46c";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(badgeX, badgeY, badgeW, badgeH);

      ctx.beginPath();
      ctx.arc(102, 508, 15, 0, Math.PI * 2);
      ctx.fillStyle = "#e7c27d";
      ctx.fill();
      ctx.strokeStyle = "#fff0d1";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(102, 508, 7, 0, Math.PI * 2);
      ctx.strokeStyle = "#35120d";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#ffe5ac";
      ctx.font = "700 17px 'Noto Sans Devanagari', sans-serif";
      ctx.fillText("चुनाव चिह्न जल्द घोषित होगा", 128, 505);
      ctx.fillStyle = "#e5d0ae";
      ctx.font = "12px 'Noto Sans Devanagari', sans-serif";
      ctx.fillText("आधिकारिक घोषणा की प्रतीक्षा", 128, 523);

      ctx.fillStyle = "#d9b46c";
      ctx.font = "500 15px sans-serif";
      ctx.fillText("WEBSITE", 78, 568);
      ctx.fillStyle = "#f8e9ca";
      ctx.font = "14px sans-serif";
      const displayUrl = url.length > 48 ? `${url.slice(0, 45)}...` : url;
      ctx.fillText(displayUrl, 78, 592);

      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/jpeg", 0.92)
      );
      if (!blob) throw new Error("Could not create share image");

      const file = new File([blob], "jaisinghpura-share.jpg", {
        type: "image/jpeg",
      });

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title,
          text: shareText,
          files: [file],
        });
        return;
      }

      // Desktop browsers often cannot share a local image and its caption
      // to WhatsApp in one operation. Download the image and copy the caption
      // instead of opening a second text-only share (which caused two messages).
      objectUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = objectUrl;
      downloadLink.download = "jaisinghpura-share.jpg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();

      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
      window.alert(
        "Share photo download ho gayi aur poora message copy ho gaya. WhatsApp mein photo attach karein, caption box mein paste karein, phir ek hi message send karein."
      );
    } catch (error) {
      if (error?.name === "AbortError") return;
      console.error("Share failed:", error);
      try {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
        window.alert("Share message copy ho gaya. Ise WhatsApp par paste kar sakte hain.");
      } catch {
        window.prompt("Share message copy karein:", shareText);
      }
    } finally {
      if (objectUrl) {
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
      }
    }
  }

  function sendMessage(event) {
    event.preventDefault();
    const text =
      `नमस्कार,\nग्राम पंचायत जयसिंहपुरा से जुड़ा मेरा सुझाव/सवाल:\n${message}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const closeMenu = () => setMenuOpen(false);

 
  if (loading) {
    return (
      <div className="royal-loader" role="status">
        <div className="loader-card">
          <div className="loader-kicker">
            <span /> RAJASTHAN · INDIA <span />
          </div>

          <div className="loader-photo-wrap">
            <img
              className="loader-photo"
              src="/shankar-lal.jpg"
              alt="शंकर लाल सांभरिया"
            />
            <div className="loader-logo">SL</div>
          </div>

          <p className="loader-welcome">राम-राम सा!</p>
          <h1 className="loader-title">ग्राम पंचायत<br />जयसिंहपुरा</h1>

          <div className="loader-divider">✳</div>

          <p className="loader-subtitle">
            अपना गाँव · अपना सम्मान · अपना भविष्य
          </p>

          <p className="loader-message">
            आपका हार्दिक स्वागत है...
          </p>

          <div className="loader-track">
            <div
              className="loader-progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="loader-bottom">
            <span>SHANKAR LAL SAMBARIYA</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    );
  }


  return (
    <main className="site-reveal">
      <div className="topline">
        <span className="topline-dot" />
        <span>ग्राम पंचायत जयसिंहपुरा, जयपुर · राजस्थान</span>
        <span className="topline-star">✳</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-emblem">SL</span>
          <span className="brand-words">
            <b>शंकर लाल सांभरिया</b>
            <small>उम्मीदवार परिचय एवं जनसंपर्क</small>
          </span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="नेविगेशन मेन्यू"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          <a href="#parichay" onClick={closeMenu}>परिचय</a>
          <a href="#mudde" onClick={closeMenu}>गाँव के मुद्दे</a>
          <a href="#chunav-chinh" onClick={closeMenu}>चुनाव चिह्न</a>
          <a href="#gaon" onClick={closeMenu}>ग्राम पंचायत जयसिंहपुरा</a>
          <a className="nav-contact" href="#sampark" onClick={closeMenu}>
            जनसंपर्क <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-grain" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            उम्मीदवार परिचय · ग्राम पंचायत जयसिंहपुरा
          </div>

          <p className="hero-location">
            <MapPin size={15} /> जयपुर, राजस्थान
          </p>

          <h1>
            शंकर लाल
            <br />
            <span>सांभरिया</span>
          </h1>

          <a className="hero-election-status" href="#chunav-chinh" aria-label="चुनाव चिह्न की स्थिति देखें">
            <span className="status-orbit" aria-hidden="true"><i /><i /><i /></span>
            <span className="status-copy">
              <small>चुनाव चिह्न की स्थिति</small>
              <b>आधिकारिक घोषणा प्रतीक्षित</b>
              <em>घोषणा होते ही यहाँ अपडेट होगा <ArrowRight size={14} /></em>
            </span>
            <span className="status-arrow"><ArrowUpRight size={18} /></span>
          </a>

          <p className="hero-description">
            परिचय जानें, ग्राम पंचायत जयसिंहपुरा से जुड़े स्थानीय मुद्दों के बारे में
            पढ़ें और गाँव के लिए अपने विचार एवं सुझाव साझा करें।
          </p>

          <div className="hero-buttons">
            <a className="button-primary" href="#parichay">
              परिचय देखें <ArrowUpRight size={17} />
            </a>
            <button className="button-outline" onClick={shareWebsite}>
              <Share2 size={16} />
              {copied ? "लिंक कॉपी हो गया" : "शेयर करें"}
            </button>
          </div>

          <div className="hero-note">
            <Leaf size={15} />
            गाँव की जानकारी · संवाद · जनभागीदारी
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-ornament ornament-one" />
          <div className="portrait-ornament ornament-two" />
          <div className="portrait-frame">
            <img
              className="portrait-image"
              src="/shankar-lal.jpg"
              alt="शंकर लाल सांभरिया"
              fetchPriority="high"
            />
            <div className="portrait-shade" />
            <div className="portrait-caption">
              <span className="caption-overline">उम्मीदवार परिचय</span>
              <b>शंकर लाल सांभरिया</b>
              <span className="caption-location">
                <MapPin size={13} /> ग्राम पंचायत जयसिंहपुरा, जयपुर
              </span>
            </div>
            <span className="portrait-seal">ज</span>
          </div>
          <div className="portrait-foot">
            <span>राजस्थान</span>
            <span className="foot-line" />
            <span>ग्राम पंचायत जयसिंहपुरा</span>
          </div>
        </div>

        <a href="#parichay" className="hero-scroll">
          <span className="scroll-circle"><ArrowDownRight size={17} /></span>
          <span>आगे जानें</span>
        </a>
      </section>

      <section className="intro section-shell" id="parichay">
        <div className="section-index">
          <span>01</span> <i /> परिचय
        </div>

        <div className="intro-layout">
          <div>
            <p className="section-kicker">व्यक्ति परिचय</p>
            <h2 className="section-heading">
              परिचय में आपका
              <br />
              <span>स्वागत है।</span>
            </h2>
            <div className="decorative-mark"><span />✳<span /></div>
          </div>

          <div className="intro-text">
            <p>
              यह डिजिटल पेज शंकर लाल सांभरिया के परिचय और ग्राम पंचायत जयसिंहपुरा
              से संबंधित सार्वजनिक जानकारी को एक जगह प्रस्तुत करने के
              लिए बनाया गया है।
            </p>
            <p>
              यहाँ स्थानीय मुद्दों, सार्वजनिक सुविधाओं और गाँव के लिए
              दिए जाने वाले सुझावों से जुड़ी जानकारी देखी जा सकती है।
            </p>
            <div className="address-chip">
              <MapPin size={16} />
              <span>ग्राम पंचायत जयसिंहपुरा, जयपुर, राजस्थान</span>
            </div>
          </div>
        </div>

        <div className="values-row">
          {values.map(({ icon: Icon, title, text }, index) => (
            <article className="value-item" key={title}>
              <span className="value-number">0{index + 1}</span>
              <span className="value-icon"><Icon size={20} /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="issues section-shell" id="mudde">
        <div className="section-index">
          <span>02</span> <i /> स्थानीय मुद्दे
        </div>

        <div className="issues-heading">
          <div>
            <p className="section-kicker">गाँव की जरूरतें</p>
            <h2 className="section-heading">
              विकास के विषय,
              <br />
              <span>संवाद के साथ।</span>
            </h2>
          </div>
          <p className="issues-intro">
            ये स्थानीय चर्चा के विषय हैं। वास्तविक योजनाओं, उनकी
            स्थिति और प्रस्तावों को सत्यापित जानकारी मिलने पर अपडेट
            किया जा सकता है।
          </p>
        </div>

        <div className="issue-grid">
          {topics.map(({ icon: Icon, number, title, description }) => (
            <article className="issue-card" key={number}>
              <div className="issue-card-top">
                <span>{number}</span>
                <span className="issue-icon"><Icon size={23} /></span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#sampark">
                सुझाव साझा करें <ArrowUpRight size={15} />
              </a>
              <div className="issue-card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="symbol-section section-shell" id="chunav-chinh">
        <div className="section-index">
          <span>03</span><i /> चुनाव संबंधी जानकारी
        </div>

        <div className="symbol-layout">
          <div>
            <p className="section-kicker">आधिकारिक चुनाव चिह्न</p>
            <h2 className="section-heading">
              चुनाव चिह्न
              <br />
              <span>यहाँ देखें।</span>
            </h2>
            <p className="symbol-description">
              चुनाव चिह्न की आधिकारिक घोषणा होने पर उसकी तस्वीर और नाम
              यहाँ जोड़े जाएँगे।
            </p>
          </div>

          <div className="symbol-card">
            <div className="symbol-placeholder symbol-pending">
              <div className="pending-mark" aria-hidden="true">
                <span className="pending-ring pending-ring-one" />
                <span className="pending-ring pending-ring-two" />
                <span className="pending-center"><b>?</b></span>
                <i className="pending-dot dot-one" /><i className="pending-dot dot-two" />
                <i className="pending-dot dot-three" /><i className="pending-dot dot-four" />
              </div>
              <span className="pending-eyebrow">OFFICIAL UPDATE AWAITS</span>
              <b>चुनाव चिह्न जल्द यहाँ होगा</b>
              <small>अभी आधिकारिक चिह्न घोषित नहीं हुआ है</small>
            </div>
            <p>शंकर लाल सांभरिया</p>
            <small>ग्राम पंचायत जयसिंहपुरा · जयपुर</small>
          </div>
        </div>
      </section>

      <section className="village-section" id="gaon">
        <div className="village-pattern" />
        <div className="village-inner section-shell">
          <div className="section-index village-index">
            <span>04</span> <i /> हमारी पहचान
          </div>

          <div className="village-layout">
            <div className="village-copy">
              <p className="section-kicker">मिट्टी से जुड़ाव</p>
              <h2 className="section-heading">
                ग्राम पंचायत जयसिंहपुरा,
                <br />
                <span>हमारा गाँव।</span>
              </h2>
              <p>
                गाँव की पहचान उसके लोगों, परंपराओं, मेहनत और आपसी
                सहयोग से बनती है। स्थानीय जानकारी और विचार साझा करने
                से गाँव से जुड़े मुद्दों पर संवाद को बढ़ावा मिलता है।
              </p>
              <a className="button-light" href="#sampark">
                अपनी बात साझा करें <ArrowRight size={16} />
              </a>
            </div>

            <div className="village-cards">
              {values.map(({ icon: Icon, title, text }) => (
                <div className="village-card" key={title}>
                  <span className="village-card-icon"><Icon size={20} /></span>
                  <span>
                    <b>{title}</b>
                    <small>{text}</small>
                  </span>
                  <ChevronRight size={16} className="village-chevron" />
                </div>
              ))}
            </div>
          </div>

          <div className="village-bottom">
            <span>✳</span>
            <p>ग्राम पंचायत जयसिंहपुरा · जयपुर · राजस्थान</p>
            <span>✳</span>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="sampark">
        <div className="section-index">
          <span>05</span> <i /> जनसंपर्क
        </div>

        <div className="contact-layout">
          <div className="contact-copy">
            <p className="section-kicker">आपकी बात भी जरूरी है</p>
            <h2 className="section-heading">
              अपने गाँव के लिए
              <br />
              <span>सुझाव दें।</span>
            </h2>
            <p>
              ग्राम पंचायत जयसिंहपुरा से जुड़ा कोई सुझाव या सवाल है? नीचे लिखें।
              बटन दबाने पर संदेश WhatsApp में खुलेगा और आप उसे भेजने
              से पहले देख सकेंगे।
            </p>
            <div className="contact-assurance">
              <ShieldCheck size={18} />
              <span>संदेश भेजने की पुष्टि आप स्वयं करेंगे।</span>
            </div>
          </div>

          <form className="message-form" onSubmit={sendMessage}>
            <div className="form-heading">
              <span className="form-icon"><MessageCircle size={20} /></span>
              <span>
                <b>अपना सुझाव लिखें</b>
                <small>ग्राम पंचायत जयसिंहपुरा · जनसंवाद</small>
              </span>
            </div>

            <label htmlFor="message">सुझाव या सवाल</label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="यहाँ अपना संदेश लिखें..."
              rows={5}
              required
              maxLength={1500}
            />

            <div className="form-bottom">
              <small>{message.length}/1500 अक्षर</small>
              <button className="button-primary" type="submit">
                WhatsApp पर आगे बढ़ें <Send size={16} />
              </button>
            </div>
            <p className="form-disclaimer">
              यह फॉर्म संदेश को WhatsApp में तैयार करता है; वेबसाइट
              स्वयं कोई संदेश नहीं भेजती।
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-emblem">SL</span>
            <span className="brand-words">
              <b>शंकर लाल सांभरिया</b>
              <small>उम्मीदवार परिचय एवं जनसंपर्क</small>
            </span>
          </a>

          <p className="footer-location">
            <MapPin size={15} /> ग्राम पंचायत जयसिंहपुरा, जयपुर, राजस्थान
          </p>

          <button className="footer-share" onClick={shareWebsite}>
            <Share2 size={15} />
            {copied ? "लिंक कॉपी हो गया" : "शेयर वेबसाइट"}
          </button>
        </div>

        <div className="footer-bottom">
          <span>शंकर लाल सांभरिया · ग्राम पंचायत जयसिंहपुरा</span>
          <a href="#home">वापस ऊपर ↑</a>
        </div>
      </footer>
    </main>
  );
}
