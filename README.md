# TodoRails

単純なTodoアプリをRuby on RailsとReactで作ることを目標に開発したものです。
railsとreactで作る方法はいろいろありますが、今回はwebpackerを使って作りました。
初体験の技術（特にフロントサイドは何も知らなかった）ばかりで構成したので、実用性
はありませんが、いい勉強になりました。
herokuにてデプロイして公開しています。
https://nakamorikeito-rails-todo.herokuapp.com/todos

# DEMO

* トップ画面
![bandicam 2021-07-10 03-31-53-347](https://user-images.githubusercontent.com/80662039/125121970-b3221580-e12f-11eb-9dfe-9c172303f798.jpg)
この画面にてタスクの確認や達成のチェックなどをつけられる。
タスクの検索やタスクの全消去も可能。
![bandicam 2021-07-10 03-32-00-834](https://user-images.githubusercontent.com/80662039/125122016-c7661280-e12f-11eb-8adc-2382ff81e9f7.jpg)


* タスクの作成画面
![bandicam 2021-07-10 03-32-09-052](https://user-images.githubusercontent.com/80662039/125122070-d51b9800-e12f-11eb-8d93-dcf51aee2b4e.jpg)
タスクの作成完了ボタンは文字を打たないと押せないようにしている。
![bandicam 2021-07-10 03-32-29-607](https://user-images.githubusercontent.com/80662039/125122114-e4024a80-e12f-11eb-91e9-9e7b8eed76d1.jpg)
作成後はトップ画面に戻り、下部に通知が出るようにした。
![bandicam 2021-07-10 03-32-37-388](https://user-images.githubusercontent.com/80662039/125122136-ed8bb280-e12f-11eb-9079-366cb39a7ec0.jpg)

* タスク編集画面
![bandicam 2021-07-10 03-32-52-811](https://user-images.githubusercontent.com/80662039/125122176-fbd9ce80-e12f-11eb-8de4-347f885311b6.jpg)
各タスクに対してさまざまな処理ができる。
編集後はダイアログがでるようにした。
![bandicam 2021-07-10 03-33-07-949](https://user-images.githubusercontent.com/80662039/125122222-0c8a4480-e130-11eb-9e8b-e837a774ca07.jpg)


# Features

機能はシンプルで、ログイン機能すらありません。
タスクの追加・更新・削除や完了したかのチェック付けなどができます。


# Requirement

* Ruby 2.7.3
* Rails 6.1.4
* yarn 1.22.10
* React 17.0.1
---------------------------------------------------------------------------------------------
* react-router-dom
* axios
* styled-components
* react-icons
* react-toastify

# Installation

$ yarn add react-router-dom axios styled-components react-icons react-toastify

# Usage

普通にrails sしていただけば、ローカル環境で動きます。


# Author

* 作成者：Keito Nakamori

# License

"TodoRails" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

