"use client";
import { motion } from "framer-motion";
import { opacity, slideUp } from "@/motion";
import { useEffect, useState } from "react";

export default function PreLoad() {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setDimension({ width: window.innerWidth, height: window.innerHeight });
	}, []);

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
		dimension.height
	}  L0 0`;
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="h-screen w-screen flex items-center justify-center fixed z-20 bg-[#202020] ">
			{dimension.width > 0 && (
				<>
					<motion.p
						className="flex text-white text-[42px] items-center absolute z-10"
						variants={opacity}
						initial="initial"
						animate="enter">
						<span className="block w-[10px] h-[10px] bg-white rounded-full mr-[10px]" />
						Bella Han
					</motion.p>
					<svg className="absolute top-0 w-full h-calc-100">
						<motion.path
							className="fill-[#202020]"
							variants={curve}
							initial="initial"
							exit="exit"
						/>
					</svg>
				</>
			)}
		</motion.div>
	);
}
