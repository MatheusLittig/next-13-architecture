import { variant_class } from "@/utils/variants"
import { ReactNode } from "react"

import "./styles.scss"

interface TextProps extends Pick<Variants, "size"> {
  children: ReactNode
}

function Text(props: TextProps) {

	return <p className={variant_class("text", props)}>{props.children}</p>
}

export default Text