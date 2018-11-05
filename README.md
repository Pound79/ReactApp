# ReactApp
環境構築やモジュールのインストールは以下の資料を参考にしています。

リリースビルドまでは完了。

遅延レンダリング以降はまたあとで考える。

https://github.com/teradonburi/learnReactJS

とりあえずReactの開発が始められる状態のリポジトリ。

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

## Release Build
```
$ yarn run build
```

## lintして修正
```
$ yarn lint --fix
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
