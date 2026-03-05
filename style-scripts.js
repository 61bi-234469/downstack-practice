function toggleBurger() {
    const dropdown = document.querySelector('.nav .dropdown');
    dropdown.classList.toggle('open');
}

function toggleSettings() {
    const dropdown = document.querySelector('.nav .dropdown');
    const setting = document.getElementById('setting');
    dropdown.classList.remove('open');
    setting.classList.toggle('open');

}

function closeSettings() {
    const setting = document.getElementById('setting');
    setting.classList.remove('open');
}

// Pinch zoom prevention
var _pinchZoomHandler = function(e) {
    if (e.touches.length >= 2) {
        e.preventDefault();
    }
};
var _pinchZoomEnabled = false;

function applyPinchZoomSetting(disable) {
    if (disable && !_pinchZoomEnabled) {
        document.addEventListener('touchmove', _pinchZoomHandler, { passive: false });
        document.documentElement.style.touchAction = 'pan-x pan-y';
        _pinchZoomEnabled = true;
    } else if (!disable && _pinchZoomEnabled) {
        document.removeEventListener('touchmove', _pinchZoomHandler);
        document.documentElement.style.touchAction = '';
        _pinchZoomEnabled = false;
    }
}

function toggleOptions() {
    const gamemode = document.getElementById('gamemode');
    const game_button = document.getElementById('game_button');
    if (gamemode.classList.contains('open')) {
        game_button.innerHTML = 'Show Options';
    } else {
        game_button.innerHTML = 'Hide Options';
    }
    gamemode.classList.toggle('open');
}