# <strong style="color:red"><u>このリポジトリは [`Takym/takym.github.io`](https://github.com/Takym/takym.github.io) に統合されました。</u></strong>
---

# シュタゲ関連の情報
Copyright (C) 2020-2023 Takym.

## 概要
* このリポジトリでは <https://takym.github.io/blog/shutage> 内の記事を管理しています。
* 問題やプルリクエストもこのリポジトリで受け付けています。
* <https://github.com/Takym/takym.github.io> からは、歴史的経緯から分割されています。
	* また、下記の三つの利点もあります。
		1. [規約](LICENSE.md)を異なるものに設定できる。
		2. 問題やプルリクエストを分けて管理できる。
		3. 編集履歴も分かれるので、コミット履歴が管理し易い。
	* 一方で、サブモジュールの更新作業が必要になるという欠点もあります。
		* しかし、簡単に操作できるのであまり重大ではありません。
* 記事の追加方法は下記のページを参考にしてください。
	* <https://takym.github.io/blog/general/2023/02/25/how-to-add-new-post.html>
	* <https://github.com/Takym/shutage/blob/master/posts/_template.md?plain=1>

## ブランチ一覧
|ブランチ名                                                  |説明                                                          |
|:-----------------------------------------------------------|:-------------------------------------------------------------|
|[`master`](https://github.com/Takym/shutage/tree/master)    |記事を格納している既定のブランチ。                            |
|[`main`](https://github.com/Takym/shutage/tree/main)        |カテゴリの案内書き。名称が紛らわしいが既定のブランチではない。|
|[`gh-pages`](https://github.com/Takym/shutage/tree/gh-pages)|互換性の為に残されたウェブサイト。                            |
|[`test`](https://github.com/Takym/shutage/tree/test)        |大昔にプルリクエストの実験の為に使用したブランチ。            |

### ブランチ名について補足
* `main` ブランチはメインページを格納している為、この名前にしました。その結果、`master` ブランチと並存しています。
* ところで、`master` ブランチはこのリポジトリの説明書きと本体である大量の記事を保持している為、既定のブランチとして設定しています。
* そのため、例えば `post` と改名したとしても、`main` は既定のブランチにはなりません。
	* この状況では `post` ブランチが既定のブランチであるにも関わらず、`main` が存在しているという状況になってしまい、紛らわしさの解決にはなりません。
* また、互換性を考慮して、`main` ブランチを改名する事もありません。
