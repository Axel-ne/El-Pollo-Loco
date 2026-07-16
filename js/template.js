// import { getControlsDialog } from "../templates/controls-dialog.js";
export function controlsDialogTemplate() {
    return /*html*/ `
        <dialog id="controlsDialog">
            <button id="closeControls">X</button>
            <h2>Steuerung</h2>

            <div class="controls-content">
                <p>⬅️ / ➡️ - Laufen</p>
                <p>SPACE - Springen</p>
                <p>D - Flasche werfen</p>
            </div>
        </dialog>
    `;
}
