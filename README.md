# README

ポイント文字をパス上文字に変換するIllustrator用スクリプトです

<div class="fig center" style="margin-bottom: 20px;"><img src="https://www.graphicartsunit.com/saucer/images/convert_to_type_on_a_path/cover.png" alt="イメージ" class="noshadow"></div>

### 更新履歴

* 0.5.0：新規作成

----

### 検証バージョン

* Illustrator CS6、2017〜2021

----

### ダウンロード

* [スクリプトをダウンロードする](https://github.com/gau/convert_to_type_on_a_path/archive/master.zip)

----

### インストール方法

1. ダウンロードしたファイルを解凍します。
2. 所定の場所に「ポイント文字をパス上文字に変換.jsx」をコピーします。
3. Illustratorを再起動します。
4. `ファイル > スクリプト > ポイント文字をパス上文字に変換`と表示されていればインストール成功です。

#### ファイルをコピーする場所

| OS | バージョン | フォルダの場所 |
|:-----|:-----|:-----|
| Mac | 全 | /Applications/Adobe Illustrator *(ver)*/Presets/ja_JP/スクリプト/ |
| 32bit Win | CS5まで | C:\Program Files\Adobe\Adobe Illustrator *(ver)*\Presets\ja_JP\スクリプト\ |
| 64bit Win | CS5, CS6（32bit版） | C:\Program Files (x86)\Adobe\Adobe Illustrator *(ver)*\Presets\ja_JP\スクリプト\ |
| 64bit Win | CS6（64bit版）以降 | C:\Program Files\Adobe\Adobe Illustrator *(ver)* (64 Bit)\Presets\ja_JP\スクリプト\ |

* *(ver)*にはお使いのIllustratorのバージョンが入ります

----

### スクリプトの概要

<div class="fig center"><img src="https://www.graphicartsunit.com/saucer/images/convert_to_type_on_a_path/step1.png" alt="スクリプトの概要" class="noshadow"></div>

通常の手順でパス上文字を作成するのは少し手間がかかりますが、このスクリプトを使うと選択したポイント文字をパス上文字に一発で変換できます。パス上文字を選択してスクリプトを実行してください。複数の同時処理にも対応しています。

----

### パスを綺麗な円弧にするスクリプトの紹介

<div class="fig center"><img src="https://www.graphicartsunit.com/saucer/images/convert_to_type_on_a_path/step2.png" alt="テキストパスの円弧を綺麗にするスクリプト" class="noshadow"></div>

テキストパスの円弧を綺麗な左右対称に調整するのは面倒ですが、「[s.h's page](http://shspage.com/)」さんの「[円弧にする](http://shspage.com/aijs/#convert_to_arc)」のスクリプトを使えば、ゆがんだ形のパスを綺麗な円弧にしてくれます。使い方は、パス上文字を選択した状態でスクリプトを実行するだけです。アーチの角度を調整するときに使うととても便利です。s.h's pageさんのスクリプトは、他にも便利なものが多いのでおすすめです。

----

### 注意

* スクリプトの実行前にドキュメントを保存しておくことをお勧めします。
* ポイント文字が選択されていないときは、警告を表示して処理を中断します。
* 複合シェイプにしたポイント文字は対象になりません。
* オブジェクトの種類や構造によって意図しない結果になる可能性もゼロではありません。

----

### 免責事項

* このスクリプトを使って起こったいかなる現象についても制作者は責任を負えません。すべて自己責任にてお使いください。
* OSのバージョンやその他の状況によって実行できないことがあるかもしれません。もし動かなかったらごめんなさい。

----

### ライセンス

* ポイント文字をパス上文字に変換.jsx
* Copyright (c) 2020 Toshiyuki Takahashi
* Released under the MIT license
* [http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php)
* Created by Toshiyuki Takahashi ([Graphic Arts Unit](http://www.graphicartsunit.com/))
* [Twitter](https://twitter.com/gautt)