import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	:root{
		--font-Poppins: 'Poppins', sans-serif;
	}

	body,a,input,button{
		font-family: var(--font-Poppins)
	}

	button{
		cursor: pointer;
	}

`;
