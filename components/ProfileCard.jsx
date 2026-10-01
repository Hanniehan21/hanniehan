import React, { useEffect, useRef, useCallback, useMemo, useState } from "react";
import "../styles/ProfileCard.css";

const DEFAULT_BEHIND_GRADIENT = "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(176,100%,90%,var(--card-opacity)) 4%,hsla(176,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(176,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(176,0%,60%,0) 100%), conic-gradient(from 124deg at 50% 50%,#7FFFD4 0%,#07c6ffff 40%,#00ffaac4 60%,#7FFFD4 100%)";

const ProfileCard = ({ 
    name = "FIRNANDA AMALIA", 
    title = " ", 
    handle = "firnanda_am", 
    avatarUrl, 
    onContactClick 
}) => {
    const wrapRef = useRef(null);
    const cardRef = useRef(null);

    const updateTransform = useCallback((x, y) => {
        if (!cardRef.current || !wrapRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const offsetX = x - rect.left;
        const offsetY = y - rect.top;
        const px = (offsetX / rect.width) * 100;
        const py = (offsetY / rect.height) * 100;

        const wrap = wrapRef.current;
        wrap.style.setProperty("--pointer-x", `${px}%`);
        wrap.style.setProperty("--pointer-y", `${py}%`);
        wrap.style.setProperty("--rotate-x", `${(px - 50) / 6}deg`);
        wrap.style.setProperty("--rotate-y", `${-(py - 50) / 6}deg`);
    }, []);

    return (
        <div className="pc-card-container">
            <div ref={wrapRef} className="pc-card-wrapper" style={{"--behind-gradient": DEFAULT_BEHIND_GRADIENT}}>
                <section 
                    ref={cardRef} 
                    className="pc-card"
                    onPointerMove={(e) => updateTransform(e.clientX, e.clientY)}
                    onPointerEnter={() => wrapRef.current.classList.add("active")}
                    onPointerLeave={() => wrapRef.current.classList.remove("active")}
                >
                    <div className="pc-inside">
                        <div className="pc-shine" />
                        <div className="pc-glare" />
                        
                        {/* 1. BAGIAN AVATAR UTAMA (SANTA) */}
                        <div className="pc-avatar-content">
                            <img className="avatar" src={avatarUrl} alt="Main Avatar" />
                        </div>

                        {/* 2. BAGIAN INFO BAR (DI BAWAH) */}
<div className="pc-user-info flex items-center justify-between gap-1 sm:gap-4 p-2 sm:p-4 bg-white/5 rounded-xl">
    <div className="pc-user-details flex items-center gap-1.5 sm:gap-3 min-w-0">
        <div className="pc-mini-avatar shrink-0 scale-75 sm:scale-100 origin-left">
            <img src={avatarUrl} alt="Mini" />
        </div>
        <div className="pc-user-text min-w-0 flex flex-col justify-center">
            {/* Pakai text-[8px] di mobile biar muat, balik ke text-xs di desktop */}
            <span className="pc-handle text-[8px] md:text-[10px] lg:text-xs font-mono tracking-tighter sm:tracking-normal truncate">
                {handle}
            </span>
            <span className="pc-status text-[7px] md:text-[9px] opacity-60 lowercase leading-none block truncate">
    firnandaamalia05@gmail.com
</span>
        </div>
    </div>
    
    <button 
        className="pc-contact-btn shrink-0 text-[9px] md:text-[10px] lg:text-xs px-2 py-1 sm:px-4 sm:py-2 whitespace-nowrap" 
        onClick={onContactClick}
    >
        Connect
    </button>
</div>

                        {/* 3. BAGIAN NAMA (FLOATING TEXT) */}
<div className="pc-details">
    <h3 className="uppercase tracking-tighter">{name}</h3>
    {/* INI YANG LU TANYAIN: Pastikan pake variabel {title} */}
    <p className="font-mono text-xs opacity-80">{title}</p>
</div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProfileCard;