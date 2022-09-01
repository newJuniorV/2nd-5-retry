# 2nd-5-retry

Created with CodeSandbox

1,react react-dom のバージョン変更
2,react-router-dom のインストール
3,Home.jsx Page1.jsx Page2.jsx の作成

4,App.js で BrowserRouter をインポート(このタグの配下でルーティングが有効)
5, Link をインポート（a タグと同じ）to でパスを指定
6, switch をインポート　 switch タグの中に、どのパスでどのコンポーネントを呼ぶのか指定
7,switch の中で route を用いる
8,route に書かれたパスが来た場合その中に書いたコンポーネントが呼ばれる

9,exact について　 true か false で表現される
url が完全一致しているか否か

ex)<Route exact path="/">
<Home />
</Route> →path="/Page1"であろうとも"/"が優先され Home コンポーネントに飛んでしまう

２２，ネストされたページ遷移
遷移先のページでさらに遷移すること
