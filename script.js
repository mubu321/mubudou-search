// 画像URLをlocalStorageから読み込んで背景に設定
const storedBgImage = localStorage.getItem("bgImage");
if (storedBgImage) {
    document.body.style.backgroundImage = `url(${storedBgImage})`;
    document.body.style.backgroundSize = "cover";  // 画像を画面に合わせてサイズ変更
    document.body.style.backgroundPosition = "center center";  // 画像を中央に配置
    document.body.style.backgroundAttachment = "fixed";  // スクロールしても背景画像は固定
}


const bgImageSelector = document.getElementById("bgImageSelector");
const fileInput = document.getElementById("fileInput");

bgImageSelector.addEventListener("click", function() {
    fileInput.click();  // ファイル選択ダイアログを開く
});

fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // 選択した画像を背景として設定
            document.body.style.backgroundImage = `url(${e.target.result})`;
            document.body.style.backgroundSize = "cover";  // 画像を画面に合わせてサイズ変更
            document.body.style.backgroundPosition = "center center";  // 画像を中央に配置
            document.body.style.backgroundAttachment = "fixed";  // スクロールしても背景画像は固定

            // 画像をlocalStorageに保存
            localStorage.setItem("bgImage", e.target.result);
        };

        // ファイルをData URLとして読み込む
        reader.readAsDataURL(file);
    }
});

// フォームの送信時に検索欄が空かどうかを確認
document.getElementById("searchForm").addEventListener("submit", function(event) {
    const searchQuery = document.getElementById("searchQuery").value.trim();
    if (searchQuery === "") {
        event.preventDefault();  // 空の場合は送信をキャンセル
    }
});
