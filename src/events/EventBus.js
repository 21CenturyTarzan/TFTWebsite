/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by Telecrypto@OKI
 * 
 **************************************************************
 */

const eventBus = {
	on(event, callback) {
		document.addEventListener(event, (e) => callback(e.detail));
	},

	dispatch(event, data) {
		document.dispatchEvent(new CustomEvent(event, { detail: data }));		
	},

	remove(event, callback) {
		document.removeEventListener(event, callback);
	},
};

export default eventBus;
