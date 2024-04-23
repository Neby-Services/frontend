export default function LogoAnimation() {
	let logos: JSX.Element[] = [];
	for (let i = 0; i < 5; ++i) {
		logos.push(
			// <svg className="z-50 w-full text-foreground absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1000 1000">
			// 	<path d="M431.80459 211.50004a67.730267 67.730267 0 0 0-30.36274 17.52491L75.000001 555.46693l95.775349 95.77536 278.55418-278.55432 101.33464 101.33465 95.77536-95.77536-149.22232-149.22231a67.730267 67.730267 0 0 0-65.41262-17.52491Zm397.42006 137.25668L550.67044 627.31073 449.33583 525.96988l-95.77535 95.77536 149.22229 149.22868a67.730267 67.730267 0 0 0 95.77535 0L925 444.53207Z" fill="currentColor" stroke="none" strokeWidth="10" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5" strokeDasharray="none" strokeOpacity="1" />
			// </svg>
			<svg key={i} className={`z-${5 - i}0 ${i == 0 ? "text-foreground" : "text-secondary"} ${i == 0 ? "opacity-100" : "opacity-0"} w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`} viewBox="0 0 1000 1000">
				<path d="M431.80459 211.50004a67.730267 67.730267 0 0 0-30.36274 17.52491L75.000001 555.46693l95.775349 95.77536 278.55418-278.55432 101.33464 101.33465 95.77536-95.77536-149.22232-149.22231a67.730267 67.730267 0 0 0-65.41262-17.52491Zm397.42006 137.25668L550.67044 627.31073 449.33583 525.96988l-95.77535 95.77536 149.22229 149.22868a67.730267 67.730267 0 0 0 95.77535 0L925 444.53207Z" fill={i == 0 ? "currentColor" : "none"} stroke={i == 0 ? "none" : "currentColor"} strokeWidth="10" strokeLinecap="square" strokeLinejoin="round" strokeMiterlimit="1.5" strokeDasharray="none" strokeOpacity="1" />
			</svg>
		);
	}

	return <>{logos}</>;
}
