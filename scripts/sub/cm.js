var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

ScrollReveal().reveal('.top')

function resize() {
    elt.style.position = 'absolute';
    elt.style.top = '0';
    elt.style.left = '0';
    elt.style.width = '100%';
    elt.style.height = '100%';
    elt.style.marginTop = '45.2px'
}

window.onresize = () => {
    resize()
}
resize();

calculator.setMathBounds({
    left: -0.003,
    right: 19.997,
    bottom: -0.027,
    top: 9.187,
});

calculator.updateSettings({
    expressions: false,
    zoomButtons: false,
    lockViewport: true,
    keypad: false,
})

const timeout = setTimeout(() => {
    calculator.updateSettings({
        settingsMenu: false,
        expressionsTopbar: false,
        pointsOfInterest: false,
        trace: false,
        authorFeatures: true,
        qwertyKeyboard: false,
        showGrid: false,
        showXAxis: false,
        showYAxis: false,
    })
}, 1000);

calculator.setState(
    { "version": 10, "randomSeed": "83246d29770bfd9b3f44cdae0ba38c3e", "graph": { "viewport": { "xmin": -2.0352519879532904, "ymin": -6.1995098116354965, "xmax": 11.866078340714107, "ymax": 10.081908505778344 }, "userLockedViewport": true }, "expressions": { "list": [{ "type": "expression", "id": "162", "color": "#6042a6", "latex": "\\operatorname{polygon}\\left(\\left(-10,-10\\right),\\left(20,-10\\right),\\left(20,10\\right),\\left(-10,10\\right)\\right)", "fill": true, "colorLatex": "c_{combined}", "fillOpacity": "1" }, { "type": "expression", "id": "1", "color": "#fa7e19", "latex": "\\operatorname{polygon}\\left(\\left(0,-1\\right),\\left(10,-1\\right),\\left(10,5\\right),\\left(0,5\\right)\\right)", "fillOpacity": "1" }, { "type": "expression", "id": "146", "color": "#000000", "latex": "\\operatorname{polygon}\\left(\\left(0,-1\\right),\\left(10,-1\\right),\\left(10,5\\right),\\left(0,5\\right)\\right)", "fill": false }, { "type": "expression", "id": "137", "color": "#388c46", "latex": "P=\\left[1.02,1.04...8\\right]" }, { "type": "expression", "id": "142", "color": "#388c46", "latex": "\\left(P,4\\right)+t\\left(\\left(P,3.5\\right)-\\left(P,4\\right)\\right)", "colorLatex": "c_{red}" }, { "type": "expression", "id": "136", "color": "#000000", "latex": "\\operatorname{polygon}\\left(\\left(1,3.5\\right),\\left(8,3.5\\right),\\left(8,4\\right),\\left(1,4\\right)\\right)", "fill": false, "fillOpacity": "1", "lineWidth": "2" }, { "type": "expression", "id": "139", "color": "#000000", "latex": "c_{red}=\\operatorname{hsv}\\left(1,\\left[1,1-\\frac{1}{349}...0\\right],1\\right)" }, { "type": "expression", "id": "141", "color": "#2d70b3", "latex": "\\left(P,2.5\\right)+t\\left(\\left(P,2\\right)-\\left(P,2.5\\right)\\right)", "colorLatex": "c_{green}" }, { "type": "expression", "id": "145", "color": "#000000", "latex": "\\operatorname{polygon}\\left(\\left(1,2.5\\right),\\left(8,2.5\\right),\\left(8,2\\right),\\left(1,2\\right)\\right)", "fill": false, "lineWidth": "2" }, { "type": "expression", "id": "143", "color": "#6042a6", "latex": "c_{green}=\\operatorname{hsv}\\left(120,\\left[1,1-\\frac{1}{349}...0\\right],1\\right)" }, { "type": "expression", "id": "147", "color": "#c74440", "latex": "\\left(P,1\\right)+t\\left(\\left(P,.5\\right)-\\left(P,1\\right)\\right)", "colorLatex": "c_{blue}" }, { "type": "expression", "id": "148", "color": "#000000", "latex": "\\operatorname{polygon}\\left(\\left(1,1\\right),\\left(8,1\\right),\\left(8,.5\\right),\\left(1,.5\\right)\\right)", "fill": false, "lineWidth": "2" }, { "type": "expression", "id": "149", "color": "#000000", "latex": "c_{blue}=\\operatorname{hsv}\\left(220,\\left[1,1-\\frac{1}{349}...0\\right],1\\right)" }, { "type": "expression", "id": "150", "color": "#c74440", "latex": "\\left(x_{r},3.75\\right)" }, { "type": "expression", "id": "154", "color": "#000000", "latex": "\\left(x_{r},3.75\\right)", "dragMode": "NONE", "pointOpacity": "1", "pointSize": "30" }, { "type": "expression", "id": "152", "color": "#2d70b3", "latex": "x_{r}=1", "hidden": true, "slider": { "hardMin": true, "hardMax": true, "min": "1", "max": "8" } }, { "type": "expression", "id": "153", "color": "#388c46", "latex": "\\left(x_{g},2.25\\right)" }, { "type": "expression", "id": "155", "color": "#000000", "latex": "\\left(x_{g},2.25\\right)", "dragMode": "NONE", "pointSize": "30" }, { "type": "expression", "id": "157", "color": "#2d70b3", "latex": "x_{g}=8", "hidden": true, "slider": { "hardMin": true, "hardMax": true, "min": "1", "max": "8" } }, { "type": "expression", "id": "159", "color": "#388c46", "latex": "\\left(x_{b},.75\\right)" }, { "type": "expression", "id": "160", "color": "#000000", "latex": "\\left(x_{b},.75\\right)", "dragMode": "NONE", "pointSize": "30" }, { "type": "expression", "id": "161", "color": "#2d70b3", "latex": "x_{b}=8", "hidden": true, "slider": { "hardMin": true, "hardMax": true, "min": "1", "max": "8" } }, { "type": "expression", "id": "158", "color": "#388c46", "latex": "c_{combined}=\\operatorname{rgb}\\left(225-225\\frac{x_{r}}{7},225-225\\frac{x_{g}}{7},225-225\\frac{x_{b}}{7}\\right)" }, { "type": "expression", "id": "156", "color": "#c74440" }, { "type": "expression", "id": "151", "color": "#c74440" }] } }
)