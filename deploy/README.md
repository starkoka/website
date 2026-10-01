# 公開・運用手順

Apache と systemd を使い、Next.js の本番成果物を専用ユーザーで実行するための設定と手順です。

## 初回導入

作業場所: `/home/kokastar/website`。Node.js 22.23.3 の公式配布を SHA256 検証のうえ `/home/kokastar/.local/share/kokastar-runtime/node-v22.23.3-linux-x64` に展開し、一般ユーザーで `bash deploy/prepare.sh` を実行して本番成果物を準備します。

1. VPS 管理画面のファイアウォールで TCP 80/443 の着信を許可する。SSH・既存 MQTT の設定は変更しない。調査時 UFW は無効。3000 番は公開しない。
2. `sudo bash deploy/install.sh` を実行する。失敗時は先へ進まずエラーを確認する。
3. Cloudflare の kokastar.dev → SSL/TLS → Overview で **Full (strict)** にする。Flexible のままだと HTTPS リダイレクトがループする。Origin Rules などで HTTP/80 を強制している場合も HTTPS/443 に合わせる。
4. `bash deploy/verify.sh` を実行する。
5. `sudo systemctl --no-pager --full status kokastar apache2 certbot.timer` と `sudo ss -lntp` で稼働を確認する。アプリは `127.0.0.1:3000`、Apache は80/443。

インストーラーは設定・証明書を `/var/backups/kokastar/日時/` に保存し、APT リスト更新、Apache/OpenSSL 更新、専用ユーザー・systemd 登録、成果物配置、Apache 設定、証明書再発行と更新試験を行う。既存 ACME アカウントを利用する。Cloudflare Access/WAF/Redirect Rules が HTTP-01 検証を妨げる場合は `/.well-known/acme-challenge/` を通す必要がある。失敗時はメンテナンス状態で止まることがある。

証明書更新を Apache の80番と競合する standalone 方式から webroot へ移行。更新後は構文確認して Apache を reload する。

## 構成・検証

Certbot の競合で初回導入が止まった場合、`sudo bash deploy/finish-tls.sh` で証明書処理から再開する。自動更新タイマーとそのサービスを一時停止し、終了時にタイマーを復帰させる。ロックファイルは削除しない。APT 更新やアプリ配置のやり直しは不要。

- Apache: HTTPS 終端、HTTP→HTTPS、ドメイン限定転送、隠しファイル拒否、エラー署名・詳細バージョン非表示、セキュリティヘッダー。
- Next.js 16.3.6 / React 19.3.0 / Node.js 22.23.3。Node は公式配布の SHA256 を確認済み。配置先は `/opt/kokastar-node`。APT だけではこの Node は更新されない。
- 専用の `kokastar-web` ユーザーで実行。OS 起動時に自動起動、異常終了時に再起動。ホームへのアクセスを禁止し、書き込みを `.next/cache` とプライベート一時領域へ制限。
- 成果物: `/srv/kokastar/releases/日時`、稼働対象: `/srv/kokastar/current`。ソースや Git を公開しない。
- `public/kosenRBKN-HPDiff.html` は別アプリが自動生成する公開レポート。`sudo bash deploy/enable-generated-report.sh` で配信設定を反映する。生成元の `public` ディレクトリを `/var/www/kokastar_generated` に読み取り専用で bind mount し、Apache が `/kosenRBKN-HPDiff.html` のみ直接配信する。ホームのアクセス権変更は不要。生成元でのファイル置換も反映され、Next.js のビルド・再起動は不要。生成アプリはファイルを Apache の `www-data` が読める権限（通常0644）で作成する。可能なら一時ファイルから rename して書き込み途中の配信を避ける。Cloudflare の独自 Cache Rules でこのURLのキャッシュを強制している場合は対象外にする。

依存監査0件、コンテンツ検査・本番ビルド成功。lint はエラー0・既存 UI の警告7件（画像5、effect 内更新2）。Next 16 の非同期 params に対応。API のユーザー名検証、外部通信の時間・サイズ上限を追加。

導入時の検証では、一時 Apache と本番成果物で主要ページ200、未知の作品404、不正API入力400、HTTP転送301、隠しファイル・未知Hostの403を確認。アプリ停止時の503本文に Apache/OS/ポートが出ないことも確認しました。各環境での導入後は `bash deploy/verify.sh` で公開状態を確認してください。

## 継続運用

Apache の表示が `2.4.52` でも未修正とは限らない。調査時の Ubuntu パッケージ `2.4.52-1ubuntu4.23` は修正をバックポート済み。APT セキュリティ自動更新は有効。APT の適用状況、`npm audit`、Node の修正版、証明書更新ログを定期確認する。

アプリ更新: 差分保全 → pull → `bash deploy/prepare.sh` → 新しい release に配置 → current 切替 → `sudo systemctl restart kokastar` → 公開チェック。ビルドは一般ユーザーで行う。初回 install.sh は証明書再発行も行うため通常の更新には繰り返し使わない。

ログ: `sudo journalctl -u kokastar -n 100 --no-pager`、`sudo tail -n 100 /var/log/apache2/kokastar-error.log`、`sudo journalctl -u certbot --no-pager`。

アプリだけの停止では Apache の脆弱性対策にならない。Apache の緊急停止が必要なら `sudo systemctl stop apache2`、修正・検証後に起動する。

旧 release に戻すにはバックアップ内の `previous-release` を確認して current のリンクを戻し、アプリを restart。初回導入前へ戻すには保存した Apache ディレクトリを復元して構文確認・reload し、kokastar を disable/stop する。古い Apache 設定には情報表示の問題があるので常用しない。

参考: [Cloudflare Full (strict)](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/)、[Certbot webroot](https://eff-certbot.readthedocs.io/en/stable/using.html#webroot)、[Next.js self-hosting](https://nextjs.org/docs/app/guides/self-hosting)。
