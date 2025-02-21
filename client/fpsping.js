$(document).ready(function () {
    let fpsPingText = $('<div id="fps-ping-info">FPS: 0 | Ping: 0ms</div>').css({
        position: 'fixed',
        bottom: '110px',
        right: '10px',
        background: '#00000050',
        color: 'white',
        padding: '5px 10px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        borderRadius: '5px',
        zIndex: '-1000'
    });

    $("body").append(fpsPingText);

    let lastFrameTime = performance.now();
    let frameCount = 0;
    let fps = 0;

    function updateFPS() {
        frameCount++;
        let now = performance.now();
        if (now - lastFrameTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastFrameTime = now;
        }
        requestAnimationFrame(updateFPS);
    }
    updateFPS();

    function getPing() {
        let start = performance.now();
        new Promise(resolve => setTimeout(resolve, Math.random() * 100))
            .then(() => {
                let ping = Math.round(performance.now() - start);
                $('#fps-ping-info').text(`FPS: ${fps} | Ping: ${ping}ms`);
            });
    }
    
    

    setInterval(getPing, 1000);
});
