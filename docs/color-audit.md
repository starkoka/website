# 配色設計・検証（2026-09-27）

## 色の役割

| 用途 | ライト | ダーク |
| --- | --- | --- |
| ブランドの基準色 | `#920809` | `#920809` |
| ページ背景 | `#F6F2F1` | `#140B0C` |
| カードなどの面 | `#FFFDFC` | `#1C1011` |
| 本文 | `#241716` | `#F5EEEC` |
| リンク・ロゴ | `#920809` | `#E89A9C` |
| 選択状態の面 | `#EED9D4` | `#3A1E20` |
| キーボードフォーカス | `#920809` | `#F0C8C1` |

赤はリンク、ロゴ、選択状態、小さな見出しの区切りに使う。見出し本文と広い面積は中立色にする。カテゴリ別の色は競技・学歴などの識別を保つため、ブランド色とは別の落ち着いた色を使う。共通トークンは `src/app/globals.css`、トップページもそのトークンを参照する。

## コントラストの確認

Playwright の計算済みスタイルから各ページの可視テキストと背景色を取得し、WCAG の計算式で評価した。トップ、About、Works、Hizk詳細、Timeline、Contact のライト・ダーク両テーマで、検査したテキストに 4.5:1 未満（大きな文字は3:1未満）はなかった。主要な組み合わせの比率は次のとおり。

| 組み合わせ | ライト | ダーク |
| --- | ---: | ---: |
| 本文／ページ背景 | 15.62:1 | 16.92:1 |
| リンク／ページ背景 | 8.35:1 | 8.80:1 |
| リンク／カード面 | 9.16:1 | 8.42:1 |
| 選択中の文字／選択面 | 6.86:1 | 6.88:1 |
| ボタン文字／ボタン面 | 9.16:1 | 7.44:1 |
| フォーカス輪郭／ページ背景 | 8.35:1 | 12.68:1 |
| 操作要素の強い境界／カード面 | 5.30:1 | 7.47:1 |

ライトの補助文字は指定の `#7A6662` だと薄い面 `#F1E8E6` 上で4.46:1だったため、使用色だけ `#78635F` に微調整した。Timeline の4種類のラベルも両テーマで文字比率4.5:1以上。薄い罫線は装飾として使い、操作要素には強い境界色を別途使う。

## 実画面

- 変更前: [トップ・ライト](screenshots/color-before-home-1440-light.png)、[トップ・ダーク](screenshots/color-before-home-1440-dark.png)
- 変更後: [トップ・ライト](screenshots/color-final-home-1440-light.png)、[トップ・ダーク](screenshots/color-final-home-1440-dark.png)、[モバイル](screenshots/color-final-home-390-light.png)、[モバイルメニュー](screenshots/color-final-mobile-menu-light.png)
- 他ページ: [About](screenshots/color-final-about-1440-light.png)、[Works](screenshots/color-final-works-1440-light.png)、[作品詳細](screenshots/color-final-works-Hizk-1440-dark.png)、[Timeline](screenshots/color-final-timeline-1440-dark.png)、[Contact](screenshots/color-final-contact-1440-dark.png)

6ページを320・390・768・1440pxのライト・ダークで確認し、横はみ出しなし。テーマ切替、再読み込み後の保持、モバイルメニュー、Escapeでの閉鎖、キーボードフォーカス、Timelineのカテゴリ選択、作品一覧への遷移を確認した。About の技術アイコン15点は外部の `skillicons.dev` から読み込む既存素材で、この検証環境では取得できなかった。今回画像や外部サービスの指定は変更していない。
