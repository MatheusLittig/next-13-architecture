import { z } from "zod"

export const variant_class = (name: string, props: unknown) => {
	const className = z.object({
		size: z.string().optional(),
		type: z.string().optional(),
		shape: z.string().optional()
	}).transform(obj => [name, ...Object.values(obj).map(value => `${name}-${value}`)].join(" "))

	return className.parse(props)
}