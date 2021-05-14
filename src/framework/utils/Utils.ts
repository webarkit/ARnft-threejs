export function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}

export function isMobile(): boolean {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        return true;
    }
    return false;
}