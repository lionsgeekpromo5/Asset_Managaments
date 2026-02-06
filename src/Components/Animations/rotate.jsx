export default function rotate (startDeg=0, endDeg=180, duration=1, delay=0, speedCurve='easeInOut') {
    return {
        hidden : {
            rotate: startDeg,
            opacity : 0
        }, show : {
            rotate: endDeg,
            opacity : 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: speedCurve
            }
        }
    }
}