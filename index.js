import React from 'react';
import { View } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

const defaultOptions = {
	messageStyle: 'none',
	extensions: ['tex2jax.js'],
	jax: ['input/TeX', 'output/HTML-CSS'],
	tex2jax: {
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		displayMath: [['$$', '$$'], ['\\[', '\\]']],
		processEscapes: true,
	},
	TeX: {
		extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
	}
};

class MathJax extends React.Component {
	constructor(props) {
		super(props);
	}

	wrapMathjax(content) {
		const options = JSON.stringify(
			Object.assign({}, defaultOptions, this.props.mathJaxOptions)
		);

		const fontSize = this.props.fontSize ? this.props.fontSize : '18px';

		return `
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
			<script type="text/x-mathjax-config">
				MathJax.Hub.Config(${options});

				MathJax.Hub.Queue(function() {
					var height = document.documentElement.scrollHeight;
					window.postMessage(String(height));
					document.getElementById("formula").style.visibility = '';
				});
			</script>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"></script>
			<div id="formula" style="visibility: hidden;font-size:${fontSize};">
				${content}
			</div>
		`;
	}
	render() {
		const html = this.wrapMathjax(this.props.html);

		// Create new props without `props.html` field. Since it's deprecated.
		const props = Object.assign({}, this.props, { html: undefined });

		return (
			<View style={{ ...props.style }}>
				<AutoHeightWebView
					scrollEnabled={false}
					source={{ html }}
					androidHardwareAccelerationDisabled
					{...props}
				/>
			</View>
		);
	}
}

export default MathJax;
