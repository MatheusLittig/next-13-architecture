import { ReactNode } from "react"

import "@/styles/main.scss"

function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}

export default Layout