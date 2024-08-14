


export { default as Annotate } from "./Annotate";
export { default as LabelAnnotation } from "./LabelAnnotation";
export { default as SvgPathAnnotation } from "./SvgPathAnnotation";
export { default as Label } from "./Label";

import { default as Annotate } from "./Annotate";
import { default as LabelAnnotation } from "./LabelAnnotation";
import { default as SvgPathAnnotation } from "./SvgPathAnnotation";
import { default as Label } from "./Label";

const halfWidth = 10;
const bottomWidth = 3;
const height = 20;

export const buyPath = function({ x, y }) {
	return `M${x} ${y} `
		+ `L${x + halfWidth} ${y + halfWidth} `
		+ `L${x + bottomWidth} ${y + halfWidth} `
		+ `L${x + bottomWidth} ${y + height} `
		+ `L${x - bottomWidth} ${y + height} `
		+ `L${x - bottomWidth} ${y + halfWidth} `
		+ `L${x - halfWidth} ${y + halfWidth} `
		+ "Z";
}

export const sellPath = function({ x, y }) {
	return `M${x} ${y} `
		+ `L${x + halfWidth} ${y - halfWidth} `
		+ `L${x + bottomWidth} ${y - halfWidth} `
		+ `L${x + bottomWidth} ${y - height} `
		+ `L${x - bottomWidth} ${y - height} `
		+ `L${x - bottomWidth} ${y - halfWidth} `
		+ `L${x - halfWidth} ${y - halfWidth} `
		+ "Z";
}

export default {
	Annotate,
	LabelAnnotation,
	SvgPathAnnotation,
	Label,
	buyPath,
	sellPath
}
