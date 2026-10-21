# サイトの日本語レビュー（2026年10月21日）

## 対象と使用スキル

トップ、Works、Timeline、Contact、404、7件の作品詳細、共通ナビゲーション、リンク文言、画像の代替テキストを確認しました。25件の活動データ、31件の出来事、プロフィール、技術一覧、分類名を含みます。過去のデザイン比較用HTMLは本番ページではないため編集していません。別アプリが作るレポートは生成元の管理対象のため、生成ファイルの手動編集はしていません。

- [stop-describing-ui](https://github.com/artouc/stop-describing-ui)：見出し・リンク・画像と重複する案内を整理。
- [yomiyasu](https://github.com/nanaism/yomiyasu)：意味を保ちながら、主述・修飾・文末を点検。
- 既存の japanese-web-copy：本人の担当とチームの結果を区別し、固有の事実を維持。

2つの追加スキルは `~/.codex/skills/stop-describing-ui` と `~/.codex/skills/yomiyasu` に導入しました。

## 書き直した本文

本文は `src/data/activities.json`、`src/data/skills.json` と各ページ・共通ヘッダーに反映しています。

| 箇所 | 変更前 | 変更後 |
| --- | --- | --- |
| src/data/activities.json.activities[0].detail.body | Mozcをベースに、入力した説明文からGPT-4で変換候補を推測するIMEです。Visual C++を使って開発しています。発表スライドとソースコードを公開しています。 | Mozcをベースに、入力した説明文からGPT-4で変換候補を推測するIMEです。Visual C++を使って開発しています。 |
| src/data/activities.json.activities[4].detail.body | ロジックICで組んだ2bit加減算回路をRaspberry Piにつなぎ、計算結果を表示します。回路の写真とソースコードを公開しています。 | ロジックICで組んだ2bit加減算回路をRaspberry Piにつなぎ、計算結果を表示します。 |
| src/data/activities.json.activities[10].description | 2022年から木更津高専ロボット研究同好会所属として高専ロボコンに参加しています。リーダー、マネージャー、制御、操縦を担当してきました。 | 2022年から木更津高専ロボット研究同好会の一員として高専ロボコンに参加しています。リーダー、マネージャー、制御、操縦を担当してきました。 |
| src/data/activities.json.activities[10].events[2].description | Aチームのマネージャーと制御を担当。特別賞(マブチモーター)を受賞し、全国大会に進みました。 | Aチームのマネージャーと制御を担当しました。チームが特別賞(マブチモーター)を受賞し、全国大会に進みました。 |
| src/data/activities.json.activities[10].events[3].description | Aチームのマネージャー・制御・操縦を担当。チームがデザイン賞を受賞しました。 | Aチームのマネージャー・制御・操縦を担当しました。チームがデザイン賞を受賞しました。 |
| src/data/activities.json.activities[10].events[4].description | Aチームのマネージャーと制御を担当。チームは準決勝に進み、地区大会の最高得点を記録して全国大会に出場しました。 | Aチームのマネージャーと制御を担当しました。チームは準決勝に進み、地区大会の最高得点を記録して全国大会に出場しました。 |
| src/data/activities.json.activities[10].media[5].alt | イオンモール木更津におけるデモにおける，ロボットの展示 | イオンモール木更津でのロボットの展示・実演 |
| src/data/activities.json.activities[10].media[9].alt | 高専ロボコン2025の競技を行う様子(ゲートの上の天井を載せている) | 高専ロボコン2025の競技中、ゲートの上に天井を載せている様子 |
| src/data/activities.json.activities[10].media[12].alt | 高専ロボコン2026 関東甲信越地区大会にて ロボットとツーショット | 高専ロボコン2026 関東甲信越地区大会でロボットと撮影した写真 |
| src/data/activities.json.activities[11].linkText | チームのWriteUp | チームの解説記事を読む |
| src/data/activities.json.activities[11].links[0].label | チームのWriteUp | チームの解説記事を読む |
| src/data/activities.json.activities[14].description | 一次予選は全問正解。二次予選は174点（各問題100・47・23・4・0点）でした。 | 一次予選は全問正解でした。二次予選は174点（各問題100・47・23・4・0点）でした。 |
| src/data/activities.json.activities[15].linkText | チームのWrite Upを読む | チームの解説記事を読む |
| src/data/activities.json.activities[15].links[0].label | チームのWrite Upを読む（HackMD） | チームの解説記事を読む（HackMD） |
| src/data/activities.json.activities[17].description | 一次予選は全問正解。二次予選290点で本戦に進み、本戦では153点でした。 | 一次予選は全問正解でした。二次予選は290点で本戦に進み、本戦では153点でした。 |
| src/data/activities.json.activities[19].description | 高校部門A 43位・H 26位、高3個人部門A 33位・H 16位でした。 | 高校部門はアルゴリズム43位・ヒューリスティック26位、高3個人部門はアルゴリズム33位・ヒューリスティック16位でした。 |
| src/data/activities.json.activities[21].description | 統計検定2級に合格しました。 | 削除（見出し・周囲の表示と重複） |
| src/data/activities.json.activities[22].description | 基本情報技術者試験に合格しました。 | 削除（見出し・周囲の表示と重複） |
| src/data/activities.json.activities[23].description | G検定に合格しました。 | 削除（見出し・周囲の表示と重複） |
| src/data/skills.json.items[5].description | 開発で使用 | 削除（見出し・周囲の表示と重複） |
| トップへのページ内案内 | ページ内とプロフィール | ページ内ナビゲーション |
| Worksへのリンク | すべての制作物を見る | すべての活動を見る |
| テーマ切り替え（aria-label・title） | ダークモードに切替／ライトモードに切替 | ダークモードに切り替える／ライトモードに切り替える |
| 連絡先リンク | @kokastar_dev | Xのプロフィールを開く @kokastar_dev |
| 404の写真説明 | これは見つからずにふて寝してるきなこ | ページが見つからず、ふて寝しているきなこ |
| 404の画像代替テキスト | ふて寝してるハムスター | ふて寝しているハムスター |

## 変えたところ

- リンクや画像が既に示している公開案内と、資格名を言い直しただけの説明を削除しました。
- ロボコンの本人の担当とチームの受賞を分け、体言止めになっていた経歴の説明を文章にしました。
- 「における」が重なる画像説明と、修飾先が追いにくい写真説明を直しました。
- WriteUpを「解説記事」、AJLのA/Hを「アルゴリズム／ヒューリスティック」にしました。
- 研究・競技も載るリンク先に合わせて案内を「すべての活動を見る」にし、連絡先リンクには実際に開く先を表示しました。

## 残したAIっぽいところ

- 検査が拾った「ゲート」2件はロボコンの競技用具を指すため残しました。比喩ではありません。
- 「展示・実演」は検査で漢字の割合が増えた候補になりましたが、「における」の重複をなくした、実際の展示・デモを表す語として残しました。

## 事実の確かめ

数値・年次・順位・担当・受賞・予定を新たに作っていません。活動ID、日付、タイトル、論文題目、URL、分類、配列構造が編集前と同じであることを照合しました。
A/Hの部門名は[AJL2024 Summer公式ページ](https://atcoder.jp/contests/ajl2024summer)の「個人ランキング(A)/(H)」と対応するAlgorithm/Heuristicの表記を参照しました。順位自体は既存データを保っています。
資格説明の削除後も、資格名・合格と年月はタイトル・日付として残っています。資料・GitHubリンク・画像も維持しています。

## 確認の記録

- 書き手・読み手・場面: 書き手: 決めていない／読み手: 決めていない／場面: 個人サイトの紹介・活動記録（指定）
- 実行した検査: lint、diff、最終稿の照合。コンテンツの参照整合性と非文章データの一致も検査。
- 実行しなかった検査: なし（資料を使った新規作文ではなく、既存表示文の推敲）。
- 硬化の検査: 候補1件
- 勢いの検査: 候補なし
- 見直し候補: 原文 2件 → 最終稿 2件（件数は点数ではなく、増減は読みやすさの良し悪しを示さない）
- HTMLの変更3件は意図したリンク表示・aria-labelの変更。引用符号の変更4件は抽出用JSONパスの見出しが空説明とともに消えたことによるもので、実際の引用やリンクの削除ではありません。
- yomiyasuの実行記録は `.yomiyasu/runs/20261021T011644Z-380ea111/` に保存（ツールの設定によりGit追跡対象外）。
- yomiyasu-check: executed via=verify run=20261021T011644Z-380ea111 attempt=2 final=sha256:c8ad5f6957b5 mode=rewrite checks=lint,diff meaning_risk=7 replay=skipped

## 実装の検証

- `npm run check:content`: 成功。25件の活動・31件の出来事・20件のWorksを確認。
- `npm run lint`: エラー0件。既存の画像・effect更新に関する警告7件。
- `npm run build`: 最終版で成功。
- 生成された13件のHTMLを確認。連絡先のDM案内、資格名・合格の見出しを維持し、重複説明の削除と変更したリンク文言が出力されていることを検査。実ブラウザーの画面確認は未実施。
- 本番サービスの再起動・公開反映は未実施。
