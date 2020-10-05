# アプリ名
  
 ![アプリ名](https://github.com/firefly492/orijinal/blob/master/app/assets/images/dialy-image.png)
  
# 概要

 自分だけの日記を書けるサイトです。その日に撮った画像も複数載せることができます。
 
# 使用した技術

 ・HTML  
 ・CSS  
 ・Ruby 2.6.5  
 ・Ruby on Rails 6.0.3.2  
 ・JavaScript  
 ・MySQL  
 ・VSCode (Visual Studio Code)  
 ・GitHub  

# 本番環境

 Githubでデプロイしています。下記URLよりアクセスできます。  
 
 https://orijinal-28253.herokuapp.com/
 
 <テスト用ユーザーアカウント>  
 メールアドレス：test@test.com  
 パスワード：mydialy1  
 
 新規登録より新しくアカウントを作成し、ログインしていただいても構いません。
 
# 制作背景

 このサイトを制作した背景をご紹介します。
 
### パソコンで日記を書ければ続くと思った
 
 ⇨日記を書いたことはあったが、ノートに書くだけでは続かなかった。しかし、パソコンを触る機会が増えたので、パソコンで書けば続くと思った。
 
### ブログと同じような機能をつけたい

 ⇨ただ書くだけならメモ帳でも可能だが、ブログのように写真や投稿一覧を見れればモチベーション維持にもつながると考えた。
 
### 誰にも見られたくない

 ⇨ブログなどで書いたらいいと思うが、見られたくないと思った。また、ブログを書きたいが不安がある人もいると思ったので、練習用に使ってもらいたい。
  
# 機能の紹介

 このサイトの主な機能をご説明します。
 
### トップページ
 
 本サイトのトップページになります。新規登録・ログインをすると「日記帳」「ログアウト」ボタンが表示されます。「日記帳」ボタンを押すと投稿一覧ページへとびます。
 
  ![新規登録](https://github.com/firefly492/orijinal/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-10-05%2012.46.22.png)
 
### 新規登録・ログイン画面

 ![新規登録](https://github.com/firefly492/orijinal/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-10-05%2011.25.54.png)

 ![ログイン](https://github.com/firefly492/orijinal/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-10-05%2011.27.04.png)
 
### 投稿一覧ページ

 日記帳のようなイメージで、ここで投稿した日記を全て見ることができます。日記の詳細・編集・削除を行うことができます。

![投稿一覧](https://github.com/firefly492/orijinal/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-10-05%2012.05.57.png)

![投稿一覧](https://github.com/firefly492/orijinal/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-10-05%2012.06.10.png)
 
### 新規投稿ページ

 ここから日記を書くことができます。写真だけ・テキストだけでも投稿できます。

![ログイン](https://github.com/firefly492/orijinal/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-10-05%2012.09.46.png)
 
### 画像複数投稿

 新規投稿・編集ページで画像を複数枚投稿することができます。

![画像複数投稿](https://github.com/firefly492/orijinal/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-10-05%2012.11.05.png)

![投稿後のトップページ](https://github.com/firefly492/orijinal/blob/master/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-10-05%2012.11.42.png)

# 課題や今後追加したい機能

 今回は”ブサイクでもアプリを作る”という目的で作成しました。
 課題はコードの可読性。Rubocopを使っている為、段落などは問題ないと思うがnameのつけ方がまだ定まっておらず、他のエンジニアが見ても分からないと思うところが多いと感じる。ここは繰り返しコードを書いたり、他のエンジニアのコードを見たりして改善していく。
 今後は、カレンダー・タグ機能を追加していきたいと思います。

# README

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :posts

## posts テーブル

| Column   | Type      | Options                        |
| -------- | ----------| -------------------------------|
| title    | string    | null: false                    |
| content  | text      | null: false                    |
| image    | img       | null: false                    |
| user_id  | reference | null: false, foreign_key: true |

### Association

- has_many :users
