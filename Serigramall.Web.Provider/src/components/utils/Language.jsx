import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'


// Contains the value and text for the options
const languages = [
	{ value: '', text: "Options" },
	{ value: 'en', text: "English" },
	{ value: 'es-MX', text: "Español" }
]

function Language() {

	// It is a hook imported from 'react-i18next'
	const { t } = useTranslation();

	const [lang, setLang] = useState('es-MX');

	// This function put query that helps to
	// change the language
	const handleChange = e => {
		setLang(e.target.value);
		let loc = "http://localhost:5001/";
		window.location.replace(loc + "?lng=" + e.target.value);
	}

	return (
		<>
			<select value={lang} onChange={handleChange}>
				{languages.map(item => {
					return (<option key={item.value}
					value={item.value}>{item.text}</option>);
				})}
			</select>
		</>
	);
}

export default Language;
