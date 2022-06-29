import './style.css'

import * as IVSPlayer from 'amazon-ivs-player';
import wasmBinaryPath from 'amazon-ivs-player/dist/assets/amazon-ivs-wasmworker.min.wasm?url';
import wasmWorkerPath from 'amazon-ivs-player/dist/assets/amazon-ivs-wasmworker.min.js?url';

const videoElement = document.getElementById('video-player');
const stream = import.meta.env.VITE_STREAM_URL;

const createAbsolutePath = (assetPath) => new URL(assetPath, document.URL).toString();

const player = IVSPlayer.create({
  wasmWorker: createAbsolutePath(wasmWorkerPath),
  wasmBinary: createAbsolutePath(wasmBinaryPath),
});

player.attachHTMLVideoElement(videoElement);
for (let state of Object.values(IVSPlayer.PlayerState)) {
  player.addEventListener(state, () => {
    console.log(state);
  });
}

player.load(stream);
