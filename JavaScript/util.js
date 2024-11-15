/**
 * ページ読み込み時のロード演出を行うクラス\
 * 全てのメソッドがメソッドチェーン可能\
 * `@example`の要素を対象にする
 * @example 
 * <div class="loader">
 *   <p>innerText</p>
 * </div>
 */
export class Loader {
    /**
     * @param {HTMLElement} target ロード画面を構成する要素
     */
    constructor(target) {
        /** ロード画面を構成する要素 */
        this.target = target;
        /** `target`の子に相当する要素 (`<p>`) */
        this.textField = target.querySelector("p");
        /** `<p>`の中の文章 */
        this.defaultText = this.textField.innerText;
    }

    /**
     * ロード画面を表示する
     * @param {boolean} isShowing 表示するか
     * @returns インスタンス
     */
    display(isShowing = true) {
        this.target.style = isShowing ? "display: block;" : "display: none;"
        return this;
    }

    /**
     * ロード画面に表示するテキストを表示する
     * @param {string} innerHTML 設定するテキスト。バッククォートを使えばHTMLタグ無しで改行できる
     * @returns インスタンス
     */
    setText(innerHTML) {
        if (innerHTML) {
            this.textField.innerHTML = innerHTML;
            this.defaultText = innerHTML;
        }
        return this;
    }

    /**
     * ロード画面のテキストを1文字ずつ表示する
     * @param {number} duration 文字を表示させる時間間隔 (デフォルト: 20)
     * @returns インスタンス
     */
    animate(duration = 20) {
        this.textField.innerText = "";
        
        // textの一文字ずつをspanタグで囲う
        this.defaultText.split("").map((char) => {
            let span = document.createElement("span");
            span.innerText = char;
            this.textField.appendChild(span);
        });
        
        // spanで囲った文字をspansに代入
        this.textField.querySelectorAll("span").forEach((span, i) => {
            setTimeout(() => {
                span.style.opacity = 1;
                // 遅延時間を調整
            }, i * duration);
            
        });

        return this;
    }

    /**
     * ロード画面をフェードアウトする
     * @param {number} time フェードアウトにかける時間 [ms]
     * @returns インスタンス
     */
    fadeOut(time) {
        setTimeout(() => {
            this.target.classList.add("fade-out");
        }, time)
        
        return this;
    }
}