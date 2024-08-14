
export {
	default as discontinuousTimeScaleProvider,
	discontinuousTimeScaleProviderBuilder
} from "./discontinuousTimeScaleProvider";
export { default as financeDiscontinuousScale } from "./financeDiscontinuousScale";

import {
	default as discontinuousTimeScaleProvider,
	discontinuousTimeScaleProviderBuilder
} from "./discontinuousTimeScaleProvider";
import { default as financeDiscontinuousScale } from "./financeDiscontinuousScale";

export const defaultScaleProvider = function(xScale) {
	return (data, xAccessor) => ({ data, xScale, xAccessor, displayXAccessor: xAccessor });
}

export default {
	discontinuousTimeScaleProvider,
	discontinuousTimeScaleProviderBuilder,
	financeDiscontinuousScale,
	defaultScaleProvider
}