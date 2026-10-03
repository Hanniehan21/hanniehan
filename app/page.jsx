"use client";

import React, {
    useRef,
    useMemo,
    useState,
    useEffect,
    Suspense,
} from "react";

import {
    Canvas,
    useFrame,
    useThree,
} from "@react-three/fiber";

import {
    MeshDistortMaterial,
    Sphere,
    PerspectiveCamera,
} from "@react-three/drei";

import * as THREE from "three";
import {
    motion,
    useSpring,
    AnimatePresence,
} from "framer-motion";

import {
    ThemeProvider,
    useTheme,
} from "../context/ThemeContext";

import { LanguageProvider } from "../context/LanguageContext";
import { useLanguage } from "../context/LanguageContext";

import AboutSection from "../components/sections/AboutSection";
import ProjectSection from "../components/sections/ProjectSection";
import OrganizationSection from "../components/sections/OrganizationSection";
import CertificateSection from "../components/sections/CertificateSection";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";


// ============================================================
// MAIN PAGE
// ============================================================

function WelcomeInner() {
    const { isDark } = useTheme();
    const { language } = useLanguage();

    return (
        <div
            className="min-h-screen overflow-x-hidden relative scroll-smooth transition-colors duration-400"
            style={{
                backgroundColor: "var(--bg)",
                color: "var(--text)",
            }}
        >
            <FilmGrain />
            <CustomCursor />
            <RippleEffect />

            {/* ==================================================
                NAVBAR
            ================================================== */}
            <Navbar />

            {/* ==================================================
                FIXED 3D BACKGROUND
            ================================================== */}
            <div
                className="fixed inset-0 z-0 transition-colors duration-500"
                style={{
                    backgroundColor: isDark ? "#050505" : "#f0eeff",
                }}
            >
                <Canvas dpr={[1, 2]}>
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 12]}
                        fov={50}
                    />

                    <ambientLight intensity={0.5} />

                    <pointLight
                        position={[10, 10, 10]}
                        intensity={2}
                        color="#7FFFD4"
                    />

                    <Suspense fallback={null}>
                        <ParticleSystem />
                        <FloatingShapes />
                        <HeroSphere />
                        <CustomGrid />
                    </Suspense>
                </Canvas>
            </div>

            {/* ==================================================
                CONTENT
            ================================================== */}
            <div className="relative z-10">

                {/* ==================================================
                    HERO SECTION
                ================================================== */}
                <section
                    id="home"
                    className="min-h-screen w-full flex items-center px-6 pt-28 pb-20"
                >
                    <div
                        className="
                            w-full
                            max-w-6xl
                            mx-auto
                            grid
                            grid-cols-1
                            lg:grid-cols-[minmax(0,1fr)_380px]
                            items-center
                            gap-12
                            lg:gap-16
                        "
                    >
                        {/* ==========================================
                            LEFT SIDE: NAME
                        ========================================== */}
                        <div
                            className="
                                min-w-0
                                flex
                                flex-col
                                items-center
                                lg:items-start
                                text-center
                                lg:text-left
                                z-30
                            "
                        >
                            <motion.div
                                className="
                                    font-mono
                                    text-[#7FFFD4]
                                    text-[10px]
                                    md:text-xs
                                    tracking-[0.5em]
                                    mb-4
                                    uppercase
                                    opacity-80
                                "
                            >
                                PORTFOLIO
                            </motion.div>

                            <motion.h1
                                className="
                                    w-full
                                    font-black
                                    tracking-tighter
                                    text-[clamp(3rem,6vw,6.5rem)]
                                    leading-[0.82]
                                "
                            >
                                <span className="block">
                                    <TypewriterText
                                        text="FIRNANDA"
                                        delay={0.5}
                                    />
                                </span>

                                <span
                                    className="
                                        block
                                        text-[#7FFFD4]
                                        drop-shadow-[0_0_30px_rgba(127,255,212,0.3)]
                                    "
                                >
                                    <TypewriterText
                                        text="AMALIA."
                                        delay={1.8}
                                    />
                                </span>
                            </motion.h1>

                            <div className="mt-8 flex items-center gap-4">
                                <span className="hidden lg:block w-12 h-[1px] bg-[#7FFFD4]/50" />

                                <p
                                    className="
                                        text-gray-400
                                        font-mono
                                        text-[10px]
                                        md:text-xs
                                        tracking-[0.2em]
                                        uppercase
                                    "
                                >
                                    {language === "id" ? "GULIR UNTUK MENELUSURI PERJALANAN SAYA" : "SCROLL TO DECODE MY JOURNEY"}
                                </p>
                            </div>
                        </div>

                        {/* ==========================================
                            RIGHT SIDE: PROFILE CARD
                        ========================================== */}
                        <motion.div
                            className="
                                w-full
                                flex
                                justify-center
                                lg:justify-end
                                z-20
                            "
                        >
                            <div className="w-full max-w-[380px]">
                                <ProfileCard
                                    name="FIRNANDA AMALIA"
                                    title="Profile Card"
                                    handle="+62 853-1157-2582"
                                    avatarUrl="/img/ipusnas.jpeg"
                                    onContactClick={() =>
                                        window.open(
                                            "https://www.linkedin.com/in/firnandaamalia",
                                            "_blank"
                                        )
                                    }
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================================================
                    OTHER PORTFOLIO SECTIONS
                ================================================== */}
                <AboutSection />
                <ProjectSection />
                <OrganizationSection />
                <CertificateSection />
            </div>
        </div>
    );
}

export default function Welcome() {
    return (
        <ThemeProvider>
    <LanguageProvider>
        <WelcomeInner />
    </LanguageProvider>
</ThemeProvider>
    );
}


// ============================================================
// COLORS
// ============================================================

const COLORS = {
    bg: "#050505",
    text: "#FFFFFF",
    accent: "#7FFFD4",
    grid: "#112222",
};


// ============================================================
// FILM GRAIN
// ============================================================

const FilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.04]">
        <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
        >
            <filter id="noiseFilter">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                />
            </filter>

            <rect
                width="100%"
                height="100%"
                filter="url(#noiseFilter)"
            />
        </svg>
    </div>
);


// ============================================================
// PARTICLE SYSTEM
// ============================================================

function ParticleSystem() {
    const { mouse, viewport } = useThree();

    const points = useRef();

    const count = 8000;

    const [particles, velocities] = useMemo(() => {
        const p = new Float32Array(count * 3);
        const v = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            p[i * 3] =
                (Math.random() - 0.5) * 40;

            p[i * 3 + 1] =
                (Math.random() - 0.5) * 40;

            p[i * 3 + 2] =
                (Math.random() - 0.5) * 20;

            v[i * 3] =
                (Math.random() - 0.5) * 0.02;

            v[i * 3 + 1] =
                (Math.random() - 0.5) * 0.02;

            v[i * 3 + 2] =
                (Math.random() - 0.5) * 0.02;
        }

        return [p, v];
    }, []);

    const lastMouse = useRef({
        x: 0,
        y: 0,
    });

    const isMoving = useRef(false);
    const timeoutRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (!points.current) return;

        const positions =
            points.current.geometry.attributes.position.array;

        if (
            Math.abs(
                mouse.x - lastMouse.current.x
            ) > 0.001 ||
            Math.abs(
                mouse.y - lastMouse.current.y
            ) > 0.001
        ) {
            isMoving.current = true;

            clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                isMoving.current = false;
            }, 500);
        }

        lastMouse.current = {
            x: mouse.x,
            y: mouse.y,
        };

        const targetX =
            mouse.x * (viewport.width / 2);

        const targetY =
            mouse.y * (viewport.height / 2);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            if (isMoving.current) {
                const offsetIdx = i * 0.1;

                const localTargetX =
                    targetX +
                    Math.sin(offsetIdx) * 2;

                const localTargetY =
                    targetY +
                    Math.cos(offsetIdx) * 2;

                positions[i3] +=
                    (localTargetX - positions[i3]) *
                    0.05;

                positions[i3 + 1] +=
                    (localTargetY - positions[i3 + 1]) *
                    0.05;

                positions[i3 + 2] +=
                    (0 - positions[i3 + 2]) *
                    0.05;
            } else {
                positions[i3] +=
                    velocities[i3] +
                    Math.sin(time + i) * 0.005;

                positions[i3 + 1] +=
                    velocities[i3 + 1] +
                    Math.cos(time + i) * 0.005;

                positions[i3 + 2] +=
                    velocities[i3 + 2];

                if (
                    Math.abs(positions[i3]) > 30
                ) {
                    positions[i3] *= -0.9;
                }

                if (
                    Math.abs(positions[i3 + 1]) > 30
                ) {
                    positions[i3 + 1] *= -0.9;
                }
            }
        }

        points.current.geometry.attributes.position.needsUpdate =
            true;

        points.current.rotation.z =
            time * 0.05;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                size={
                    viewport.width < 5
                        ? 0.04
                        : 0.03
                }
                color={COLORS.accent}
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}


// ============================================================
// FLOATING SHAPES
// ============================================================

function FloatingShapes() {
    const { mouse, viewport } = useThree();

    const group = useRef();

    const isMobile =
        viewport.width < 5;

    const shapes = useMemo(
        () => [
            {
                geo: new THREE.IcosahedronGeometry(1, 0),
                pos: [-6, 4, -2],
                speed: 0.5,
            },
            {
                geo: new THREE.OctahedronGeometry(1, 0),
                pos: [7, -3, -4],
                speed: 0.8,
            },
            {
                geo: new THREE.TorusGeometry(
                    0.7,
                    0.2,
                    16,
                    32
                ),
                pos: [-9, -5, -1],
                speed: 0.3,
            },
            {
                geo: new THREE.TetrahedronGeometry(1, 0),
                pos: [5, 5, -3],
                speed: 1.2,
            },
            {
                geo: new THREE.DodecahedronGeometry(1, 0),
                pos: [-3, -7, -5],
                speed: 0.6,
            },
            {
                geo: new THREE.TorusKnotGeometry(
                    0.5,
                    0.15,
                    64,
                    8
                ),
                pos: [9, 6, -2],
                speed: 0.9,
            },
            {
                geo: new THREE.CylinderGeometry(
                    0.5,
                    0.5,
                    1.2,
                    3
                ),
                pos: [-8, 7, -4],
                speed: 1.5,
            },
            {
                geo: new THREE.BoxGeometry(
                    0.8,
                    0.8,
                    0.8
                ),
                pos: [3, -6, -3],
                speed: 0.4,
            },
        ],
        []
    );

    useFrame((state) => {
        if (!group.current) return;

        const t =
            state.clock.getElapsedTime();

        group.current.children.forEach(
            (child, i) => {
                const factor =
                    shapes[i].speed;

                const multiplier =
                    isMobile ? 1.5 : 3;

                const floatingX =
                    Math.sin(t * factor) * 0.5;

                const floatingY =
                    Math.cos(t * factor) * 0.5;

                child.position.x =
                    THREE.MathUtils.lerp(
                        child.position.x,
                        shapes[i].pos[0] +
                            mouse.x *
                                multiplier *
                                factor +
                            floatingX,
                        0.05
                    );

                child.position.y =
                    THREE.MathUtils.lerp(
                        child.position.y,
                        shapes[i].pos[1] +
                            mouse.y *
                                multiplier *
                                factor +
                            floatingY,
                        0.05
                    );

                child.rotation.x += 0.005;
                child.rotation.y += 0.005;
            }
        );
    });

    return (
        <group ref={group}>
            {shapes.map((item, i) => (
                <mesh
                    key={i}
                    geometry={item.geo}
                    position={item.pos}
                    scale={
                        isMobile ? 0.6 : 1
                    }
                >
                    <meshBasicMaterial
                        color={COLORS.accent}
                        wireframe
                        transparent
                        opacity={0.1}
                    />
                </mesh>
            ))}
        </group>
    );
}


// ============================================================
// HERO SPHERE
// ============================================================

function HeroSphere() {
    const mesh = useRef();

    const { mouse, viewport } = useThree();

    const isMobile =
        viewport.width < 5;

    useFrame((state) => {
        if (!mesh.current) return;

        const t =
            state.clock.getElapsedTime();

        const idleX =
            Math.sin(t * 0.5) * 0.3;

        const idleY =
            Math.cos(t * 0.5) * 0.3;

        const targetX = isMobile
            ? mouse.x * 1.5 + 1.5
            : mouse.x * 2 + 8;

        const targetY = isMobile
            ? mouse.y * 1.5 - 7.5
            : mouse.y * 2 - 3.5;

        mesh.current.position.x =
            THREE.MathUtils.lerp(
                mesh.current.position.x,
                targetX + idleX,
                0.05
            );

        mesh.current.position.y =
            THREE.MathUtils.lerp(
                mesh.current.position.y,
                targetY + idleY,
                0.05
            );

        mesh.current.rotation.z =
            t * 0.1;
    });

    return (
        <Sphere
            ref={mesh}
            args={[
                isMobile ? 0.8 : 1.1,
                64,
                64,
            ]}
        >
            <MeshDistortMaterial
                color={COLORS.accent}
                speed={2}
                distort={0.4}
                radius={1}
                wireframe
                opacity={0.15}
                transparent
            />
        </Sphere>
    );
}


// ============================================================
// CUSTOM GRID
// ============================================================

function CustomGrid() {
    const gridRef = useRef();

    const lines = useMemo(() => {
        const l = [];

        for (
            let i = -50;
            i <= 50;
            i += 2
        ) {
            l.push(
                new THREE.Vector3(
                    i,
                    0,
                    -50
                ),
                new THREE.Vector3(
                    i,
                    0,
                    50
                )
            );

            l.push(
                new THREE.Vector3(
                    -50,
                    0,
                    i
                ),
                new THREE.Vector3(
                    50,
                    0,
                    i
                )
            );
        }

        return new THREE.BufferGeometry().setFromPoints(
            l
        );
    }, []);

    useFrame((state) => {
        if (gridRef.current) {
            gridRef.current.position.z =
                state.clock.getElapsedTime() % 2;
        }
    });

    return (
        <lineSegments
            ref={gridRef}
            geometry={lines}
            position={[0, -7, 0]}
        >
            <lineBasicMaterial
                color={COLORS.accent}
                transparent
                opacity={0.05}
            />
        </lineSegments>
    );
}


// ============================================================
// RIPPLE EFFECT
// ============================================================

const RippleEffect = () => {
    const [ripples, setRipples] =
        useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const newRipple = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };

            setRipples((prev) => [
                ...prev,
                newRipple,
            ]);

            setTimeout(() => {
                setRipples((prev) =>
                    prev.filter(
                        (r) =>
                            r.id !==
                            newRipple.id
                    )
                );
            }, 800);
        };

        window.addEventListener(
            "mousedown",
            handleClick
        );

        return () => {
            window.removeEventListener(
                "mousedown",
                handleClick
            );
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100]">
            <AnimatePresence>
                {ripples.map((r) => (
                    <motion.div
                        key={r.id}
                        initial={{
                            width: 0,
                            height: 0,
                            opacity: 0.8,
                        }}
                        animate={{
                            width: 300,
                            height: 300,
                            opacity: 0,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        style={{
                            left: r.x,
                            top: r.y,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        className="
                            absolute
                            border
                            border-[#7FFFD4]
                            rounded-full
                            shadow-[0_0_20px_rgba(127,255,212,0.3)]
                        "
                        transition={{
                            duration: 0.8,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};


// ============================================================
// CUSTOM CURSOR
// ============================================================

const CustomCursor = () => {
    const mouseX = useSpring(0, {
        stiffness: 1000,
        damping: 50,
    });

    const mouseY = useSpring(0, {
        stiffness: 1000,
        damping: 50,
    });

    const [isVisible, setIsVisible] =
        useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const isTouchDevice =
                window.matchMedia(
                    "(pointer: coarse)"
                ).matches;

            setIsVisible(
                !isTouchDevice &&
                    window.innerWidth > 1024
            );
        };

        const move = (e) => {
            requestAnimationFrame(() => {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            });
        };

        checkDevice();

        window.addEventListener(
            "mousemove",
            move
        );

        window.addEventListener(
            "resize",
            checkDevice
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                move
            );

            window.removeEventListener(
                "resize",
                checkDevice
            );
        };
    }, [mouseX, mouseY]);

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                className="
                    fixed
                    top-0
                    left-0
                    w-2
                    h-2
                    bg-[#7FFFD4]
                    rounded-full
                    pointer-events-none
                    z-[9999]
                    -translate-x-1/2
                    -translate-y-1/2
                    shadow-[0_0_15px_#7FFFD4]
                "
            />

            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                className="
                    fixed
                    top-0
                    left-0
                    w-10
                    h-10
                    border
                    border-[#7FFFD4]
                    opacity-20
                    rounded-full
                    pointer-events-none
                    z-[9998]
                    -translate-x-1/2
                    -translate-y-1/2
                "
            />
        </>
    );
};


// ============================================================
// TYPEWRITER
// ============================================================

const TypewriterText = ({
    text,
    delay = 0,
    onComplete,
}) => {
    const [displayText, setDisplayText] =
        useState("");

    const [started, setStarted] =
        useState(false);

    useEffect(() => {
        const startTimeout =
            setTimeout(() => {
                setStarted(true);
            }, delay * 1000);

        return () =>
            clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;

        const timer = setInterval(() => {
            setDisplayText(
                text.substring(0, i)
            );

            i++;

            if (i > text.length) {
                clearInterval(timer);

                if (onComplete) {
                    onComplete();
                }
            }
        }, 100);

        return () =>
            clearInterval(timer);
    }, [started, text, onComplete]);

    return (
        <span>
            {displayText}

            {(!started ||
                displayText.length <
                    text.length) && (
                <motion.span
                    animate={{
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                    }}
                    className="text-[#7FFFD4] ml-1"
                >
                    _
                </motion.span>
            )}
        </span>
    );
};





