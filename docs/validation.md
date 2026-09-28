# 検証記録

2026-09-27、Playwright MCP（Chromium）で実施。PC 1440×900、モバイル390×844。画像はページ全体を保存しているため、画像の高さはviewportより長い。

## 修正前後

| ページ | PC 修正前 | PC 修正後 | モバイル 修正前 | モバイル 修正後 |
| --- | --- | --- | --- | --- |
| トップ | [画像](screenshots/before-home-desktop.png) | [画像](screenshots/after-home-desktop.png) | [画像](screenshots/before-home-mobile.png) | [画像](screenshots/after-home-mobile.png) |
| About | [画像](screenshots/before-about-desktop.png) | [画像](screenshots/after-about-desktop.png) | [画像](screenshots/before-about-mobile.png) | [画像](screenshots/after-about-mobile.png) |
| Works | [画像](screenshots/before-works-desktop.png) | [画像](screenshots/after-works-desktop.png) | [画像](screenshots/before-works-mobile.png) | [画像](screenshots/after-works-mobile.png) |
| Timeline | [画像](screenshots/before-timeline-desktop.png) | [画像](screenshots/after-timeline-desktop.png) | [画像](screenshots/before-timeline-mobile.png) | [画像](screenshots/after-timeline-mobile.png) |
| Contact | [画像](screenshots/before-contact-desktop.png) | [画像](screenshots/after-contact-desktop.png) | [画像](screenshots/before-contact-mobile.png) | [画像](screenshots/after-contact-mobile.png) |
| Hizk詳細 | [画像](screenshots/before-hizk-desktop.png) | [画像](screenshots/after-hizk-desktop.png) | [画像](screenshots/before-hizk-mobile.png) | [画像](screenshots/after-hizk-mobile.png) |

トップ以外は共通部品の回帰確認であり、ページ固有のデザイン・文章は未改修。

ダーク表示: [PC](screenshots/after-home-dark-desktop.png)、[モバイル](screenshots/after-home-dark-mobile.png)。画像デコード完了とテーマ適用後に撮影。修正後の画面を目視確認し、画像の切り抜き、文字の改行、余白、リンクの区別を確認した。修正前のTimeline画像には既存の登場アニメーション途中の箇所があり、修正後はreduced-motionで撮影している。

## 結果

- `npm run lint`: 成功。既存の`no-img-element`警告6件（SocialIcon 2件、carousel、skillCard、About、not-found各1件）。新しいトップはNext Imageを使用。
- `npm run build`: 成功。15ページ生成。テストスクリプトはpackage.jsonにない。
- `git diff --check`: 成功。
- 6ページ×2画面幅の本番表示: 全12ケースHTTP 200、横方向のはみ出しなし。
- トップ320px幅: 横方向のはみ出しなし。
- トップの画像3点: 読み込み成功。明暗両テーマで表示確認。
- 「制作物・実績を見る」: `/works`へ遷移。
- 「Hizkの制作内容を見る」: `/works/Hizk`へ遷移。
- 「ロボコンでの活動を見る」: `/works/KosenRobocon`へ遷移。
- モバイルメニュー: ボタンで開く、aria-expanded更新、Escapeで閉じる、開閉ボタンへフォーカス復帰。
- 閉じたメニューからTab: 隠れたリンクに入らず、トップ本文の制作物CTAへ移動。
- 最初のTab: 「本文へ移動」。Enterで`main-content`にフォーカス。
- テーマ切替と再読み込み: ダーク設定を保持。
- reduced-motion: トップの実行中アニメーション0件。
- Timelineの「学歴」絞り込み: 入学・研究室配属の2件を表示。
- 最終トップ表示時のブラウザコンソール: エラー0件。

## 検証時の注意と限界

開発サーバーを動かしたまま本番ビルドを実行した際、共用する`.next`でアセット404／モジュール不足が発生した。開発サーバーを停止して再ビルドし、新しい本番サーバー（localhost:3002）で上記チェックを再実施して成功した。コードの不具合としては扱っていない。

全ページのWCAG適合を認証したものではない。外部記事の内容・リンク先サービスの継続稼働、現在の所属・実績の外部照合、全詳細ページ、全ブラウザ、スクリーンリーダーの実機確認は対象外。残存する具体的なガイドライン指摘はdesign-brief.mdに記載した。API・認証・DB・依存パッケージは変更していない。
