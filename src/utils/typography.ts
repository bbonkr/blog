import Typography from 'typography';

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Nanum Gothic'],
    bodyFontFamily: ['Nanum Gothic', 'Noto Serif KR'],
    googleFonts: [
        { name: 'Nanum Gothic', styles: ['Regular', 'bold', 'extra-bold'] },
        { name: 'Nanum Gothic Coding', styles: ['Regular', 'Bold'] },
        { name: 'Noto Serif KR', styles: ['Extra-light', 'Light', 'Regualr', 'Medium', 'Semi-bold', 'Bold', 'Black'] },
        {
            name: 'Raleway',
            styles: ['Thin', 'Extra-light', 'Light', 'Regular', 'Medium', 'Semi-bold', 'Bold', 'Extra-bold', 'Black'],
        },
    ],
});

const googleFont = [
    {
        name: 'Nanum Gothic',
        bold: [400, 700],
    },
    {
        name: 'Nanum Gothic Coding',
        bold: [400, 700],
    },
    {
        name: 'Noto Serif KR',
        bold: [300, 400, 700],
    },
    { name: 'Raleway', bold: [300, 400, 700] },
]
    .map(v => {
        if (v.bold) {
            return `${v.name.replace(/ /gi, '+')}:${v.bold.toString()}`;
        } else {
            return `${v.name.replace(/ /gi, '+')}`;
        }
    })
    .join('%7C')
    .toString();

export { googleFont, typography as default };
