async function convert ( e ) {
    e.preventDefault()
    try {
        const amountFrom = document.getElementById( 'amountFrom' ).value;
        const selectedFrom = document.getElementById( 'currencyFrom' );
        const currencyFrom = selectedFrom.options[ selectedFrom.selectedIndex ].text;
        const selectedTo = document.getElementById( 'currencyTo' );
        const currencyTo = selectedTo.options[ selectedTo.selectedIndex ].text;

        const res = await axios.get( `https://open.er-api.com/v6/latest/${ currencyFrom }` );
        const convertedAmount = Number( res.data.rates[ `${ currencyTo }` ] ) * Number( amountFrom );

        document.getElementById( 'rate' ).value = res.data.rates[ `${ currencyTo }` ];
        document.getElementById( 'amountTo' ).value = convertedAmount;
    } catch (error) {
        console.log( error );
    }
}

document.getElementById( 'convert' ).addEventListener( 'click', convert );
document.getElementById( 'currencyFrom' ).addEventListener( 'change', convert );
document.getElementById( 'currencyTo' ).addEventListener( 'change', convert );
document.getElementById( 'amountFrom' ).addEventListener( 'change', convert );