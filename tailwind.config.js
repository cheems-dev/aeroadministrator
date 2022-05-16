module.exports = {
    darkMode: false,
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                'Nova-Eb': ['Proxima Nova Eb'],
                'Nova-Rg': ['Proxima Nova Rg'],
                'Nova-Lt': ['Proxima Nova Lt'],
                'Nova-Sb': ['Proxima Nova Sb'],
            },
            colors: {
                neutro: {
                    custom: '#E1EAF3',
                    custom2: '#F8FAFF',
                    second1: '#CAE3FD',
                    second2: '#F0F5FA',
                    second3: '#B0C4D8',
                    second4: '#BFD0E1',
                    second5: '#CCDCEC',
                    second6:'#B1B1CF'
                },
                gray: {
                    primary: '#0A427973',
                    second1: '#3B546C',
                    second2: '#6D87A0',
                },
                neon: '#00003C',
                neon2:'#1E00E6',
                grPrimary: {
                    c1: '#01105B',
                    c2: '#010028'
                },
                grSecond1: {
                    c1: '#0857FC',
                    c2: '#8E25FC',
                    c3: '#D90AFC'
                },
                grSecond2: {
                    c1: '#005AFF',
                    c2: '#F000FF'
                },
                grSecond3: {
                    c1: '#6F1AE3',
                    c2: '#1D1BE8'
                },
                grCustom1: {
                    c1: '#C1D8F9',
                    c2: '#FBFCFE'
                },
                grCustom2: {
                    c1: '#1B39A2',
                    c2: '#020238',
                    c3: '#367AA7'
                },
                red: '#FF003D',
                custom: '#559BFF',
                custom2:'#9BCDFF'
            }
        },
    },
    plugins: [],
}
