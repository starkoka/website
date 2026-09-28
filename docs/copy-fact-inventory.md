# 日本語編集のための事実台帳

この台帳は文章を書き換える前に、表示中の事実と判断・推測を分けて記録したもの。出典は特記しない限り、このリポジトリに以前から保存されていたデータであり、本人による再確認や第三者資料による裏付けを意味しない。

以下の「リポジトリ内の出典」は作成当時のファイル名です。現在の表示データは `src/data/activities.json` と `src/data/profile.json` に統合されています。新しい実績の登録手順は `README.md` を参照してください。

| 表示箇所 | 記載されていた事実 | リポジトリ内の出典 | 編集時の扱い |
| --- | --- | --- | --- |
| トップ・About | 名前、木更津高専情報工学科、ロボット研究同好会、プログラミング研究会、Japanese Scratch Wiki管理者 | `src/data/profile.json` | 所属・肩書きは維持。現時点でも有効かは未確認 |
| トップ・About・Works | HizkはMozcをベースにGPT-4を使うIME。Kloudハッカソン#4でチームが優秀賞。GitHubと発表スライドあり | `src/data/projects.json`、`src/data/profile.json` | 本人の担当箇所は未記載。「開発に参加」以上は断定しない |
| トップ・Works・Timeline | 高専ロボコン2022・2023はBチームのリーダー、2023は制御も担当。2024・2025はAチームのマネージャーと制御を担当し、全国大会で操縦。2024はチームが全国大会デザイン賞、2025も全国大会出場 | `src/data/projects.json`、`src/data/timeline.json` | 個人の担当とチームの受賞を分ける |
| トップ・About・Works・Timeline | DIVER OSINT CTF 2024は木更津高専チームで484チーム中10位。2025はm01nm01nとして5位。チームの解説記事あり | `src/data/profile.json`、`src/data/timeline.json`、`src/data/projects.json` | 個人順位として書かない。個別の担当問題は未確認 |
| About・Timeline | 木更津高専Advent Calendar 2023・2024を主催。2024年のQiitaリンクあり | `src/data/profile.json` | 参加人数「両年11名」はデータ上の記載のみで、参照先との照合が必要 |
| Works・詳細 | 祗園祭2023年版サイトをプログラミング研究同好会のメンバーとして共同開発 | `src/data/projects.json` | 個人の担当ページ・機能は未確認 |
| Works・詳細・Timeline | たすくりあはタスク管理と進捗表示を行うDiscord Bot。Kloudハッカソン#3で発表 | `src/data/projects.json`、`src/data/timeline.json` | 個人の実装担当は未確認 |
| Works・詳細 | 木更津高専生向けの管理Botを友人と共同開発し、非公式学年サーバーで使用 | `src/data/projects.json` | 「運営を効率化」は目的・評価なので機能として断定しない |
| Works・詳細 | StellarculatorはロジックICで組んだ2bit加減算回路をRaspberry Piにつなぎ、結果を表示する電卓。GitHubあり | `src/data/projects.json` | 具体的な配線・プログラムの担当区分は未確認 |
| Works | 高専ロボコン公式サイトの更新を検知し、Discord Webhookで通知するBot。GitHubあり | `src/data/projects.json` | 「複数の部で導入」は裏付けを確認できないため断定を避ける |
| Works・Timeline | AtCoderへの出場、GCI 2023 Winter修了、AJL 2023高校部門14位・高2個人43位、JOI 2023/2024二次予選174点 | `src/data/projects.json`、`src/data/timeline.json` | リンクと数値を維持。開催団体・ボーダーなどの説明は必要性を判定 |
| Timeline | 入学、成人、研究室配属 | `src/data/timeline.json` | 作品・競技の一覧には混ぜない |
| Works・Timeline | 高専プロコン2024競技部門、AJL 2024 Summer順位、JOI 2024/2025本戦153点、2024・2025ロボコン地区・全国大会 | `src/data/timeline.json`。Worksの新規4件は`timelineEvent`で同じ記録を参照 | 年月・順位・大会名を維持し、個人の担当とチームの結果を分ける |
| About | 技術の自己評価、技術名と使用場面 | `src/data/skills.json` | 使用場面の根拠が見えないものは説明を削るか確認事項にする |
| Contact・共通 | TwitterのDMを連絡先として指定。GitHub・AtCoder・note・Zenn・Qiitaへのリンク | `src/data/profile.json` | リンク先を維持 |

## 事実ではない／削除・保留する表現

- 「次世代」「横断して活動」「上位入賞」「ソフトとハードの統合」などの評価・抽象化は、具体的な機能・担当・数値を増やさない。
- 「公開プロフィール・成果物・活動履歴から拾える」は調査者の視点で、本人の紹介文には不要。
- 「どの領域で何を作ってきたかを短くまとめています」など見出しの説明は不要。
- 「知見を文書として残すことを重視」など本人の意図は、本人の発言を確認できないため採用しない。
- 「継続参加」は最終の記録年を超える現在の活動まで含意し得るため、確認できる各年を記す。

## 本人の文体について

リポジトリに本人が書いたと識別できる記事本文・自己紹介文は見つからなかった。`docs/`内の過去の編集メモや既存JSONの文章を本人固有の文体の証拠とみなさない。公開済み記事へのリンクはあるが、文体の模倣には使わない。
