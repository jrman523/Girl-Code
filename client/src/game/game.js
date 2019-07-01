import React from 'react';

const Game = () => {
    return (
        <div>
            <script src={"./GameMenu.js"}></script>

            <div id="modal" class="modal">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a id="resume" class="modal-close waves-effect waves-green btn-flat">close</a>
                </div>
            </div>

            <div id="gameOver" class="modal">
                <div class="modal-content">
                    <h4>Game Over</h4>
                    <p>Ohhh Nooo you lost</p>
                </div>
                <div class="modal-footer">
                    <a href="html" class="modal-close waves-effect waves-green btn-flat">close</a>
                </div>
            </div>
        </div>
    );
};
export default Game;