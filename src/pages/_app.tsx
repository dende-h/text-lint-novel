import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "../theme/theme";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS={true} theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
