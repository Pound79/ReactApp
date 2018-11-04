# webrtc_project
環境構築やモジュールのインストールは以下の資料を参考にしています。

https://github.com/teradonburi/learnReactJS

# コマンド
## setup
```
$ yarn install
```

## build
```
$ yarn webpack
```

## ソースファイル変更を検知して再ビルド
```
$ yarn webpack --watch
```

# デバッグ
## ブレークポイント
```
debugger;
```

## デバッグツール
[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja)

# 注意点
```
"connected-react-router": "^4.5.0"
```
でないとエラーになる

以降のバージョンで変更点に追従すれば動くだろうけどとりあえず保留
