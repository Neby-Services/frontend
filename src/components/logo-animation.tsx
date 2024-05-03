"use client";

import {cn} from "@/lib/utils";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

gsap.registerPlugin(useGSAP);

interface LogoAnimationProps {
	className?: string;
	variant?: "elastic" | "displacement";
}

export default function LogoAnimation({className, variant = "elastic"}: LogoAnimationProps) {
	const container = useRef(null);

	const elasticAnimation = () => {
		gsap.to("svg", {
			duration: 2,
			y: gsap.utils.wrap(["-70%", "-58%", "-46%", "-34%", "-22%"]),
			opacity: gsap.utils.wrap([1, 0.5, 0.3, 0.2, 0.1]),
			repeat: -1,
			repeatDelay: 3,
			yoyo: true,
			yoyoEase: "elastic.out",
			ease: "elastic.out"
		});
	};

	const displacementAnimation = () => {
		gsap.fromTo(
			"svg",
			{
				y: gsap.utils.wrap(["-70%", "-70%", "-58%", "-46%", "-34%"]),
				opacity: gsap.utils.wrap([1, 0.8, 0.6, 0.4, 0.2])
			},
			{
				duration: 1,
				y: gsap.utils.wrap(["-70%", "-58%", "-46%", "-34%", "-22%"]),
				opacity: gsap.utils.wrap([1, 0.6, 0.4, 0.2, 0]),
				repeat: -1,
				ease: "none"
			}
		);
	};

	useGSAP(
		() => {
			if (variant == "elastic") elasticAnimation();
			else if (variant == "displacement") displacementAnimation();
		},
		{scope: container}
	);

	let logos: JSX.Element[] = [];
	for (let i = 0; i < 5; ++i) {
		logos.push(
			<svg key={i} className={`z-${5 - i}0 ${i == 0 ? "text-foreground" : "text-secondary"} ${i == 0 ? "opacity-100" : "opacity-0"} w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`} viewBox="0 0 1000 1000">
				<path d="M431.80459 211.50004a67.730267 67.730267 0 0 0-30.36274 17.52491L75.000001 555.46693l95.775349 95.77536 278.55418-278.55432 101.33464 101.33465 95.77536-95.77536-149.22232-149.22231a67.730267 67.730267 0 0 0-65.41262-17.52491Zm397.42006 137.25668L550.67044 627.31073 449.33583 525.96988l-95.77535 95.77536 149.22229 149.22868a67.730267 67.730267 0 0 0 95.77535 0L925 444.53207Z" fill={i == 0 ? "currentColor" : "none"} stroke={i == 0 ? "none" : "currentColor"} strokeWidth="10" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5" strokeDasharray="none" strokeOpacity="1" />
			</svg>
		);
	}

	return (
		<div ref={container} className={cn("relative w-full h-full", className)}>
			{logos}
		</div>
	);
}
