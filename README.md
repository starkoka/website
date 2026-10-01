# kokastar.dev

Next.js 16で作成した個人サイトです。トップ、Works、Timelineは共通の活動データから表示します。旧Aboutページへのアクセスはトップのプロフィール欄へ転送します。

公開とサーバー運用は [deploy/README.md](deploy/README.md) を参照してください。

## 開発

```bash
npm install
npm run dev
```

変更後は次を確認します。

```bash
npm run check:content
npm run lint
npm run build
```

## データの編集

実績・作品・大会・研究・講座は[`src/data/activities.json`](src/data/activities.json)の`activities`に登録します。`id`は一度決めたら変えない識別子です。`title`と`description`はWorksとTimelineで共有されます。日付のある出来事は、その活動の`events`に追加します。`date`は確認できた精度で`YYYY-MM`または`YYYY-MM-DD`とし、予定は`planned: true`を付けます。

```json
{
  "id": "sample-contest-2027",
  "category": "competition",
  "title": "大会名",
  "description": "本人の参加内容とチームの結果。",
  "internal": false,
  "links": [{ "id": "results", "label": "大会結果を見る", "url": "https://example.com/results" }],
  "events": [{ "id": "202707", "date": "2027-07", "type": "contest", "linkId": "results" }]
}
```

`category`を付けた活動はWorksに、`events`はTimelineに表示されます。Timelineの日付表示は全件「年月」までに統一し、日まで分かる記録は並び順に使用します。トップの「最近の活動」は完了済みの出来事から自動で選びます。ひとつの活動に複数の出来事がある場合、トップには最新の1件だけを表示します。Worksには載せない資格・スコアなどは`works: false`として登録します。研究発表の出来事には`paperTitle`が必要です。

同じ活動に翌年の結果を追加するときは新しい活動を作らず、既存活動の`events`に記録を追加します。出来事ごとに異なる説明は`event.description`を使います。トップの「制作物と担当内容」とWorksに表示する活動全体の説明は`description`で変更します。作品詳細の追加説明は`detail.body`に置きます。作品詳細で年ごとの記録を見せたい活動には`detail.eventHistory: true`を指定すると、`events`から日付・見出し・説明の一覧を作ります。トップの「最近の活動」とTimelineにも各出来事の説明が表示されます。

内部の作品詳細は`internal: true`、`slug`、`detail`を指定します。画像は`media`に固定ID付きで登録し、トップやWorksでは`homepage.imageId`・`previewImageId`で選びます。画像の順序を変えても表示対象が変わりません。GitHubリポジトリを含む外部資料は活動直下の`links`に登録すると作品詳細に表示されます。出来事から使う場合は`linkId`で参照します。`detail.links`は使用しません。

本人の名前、自己紹介、現在の所属、所属団体、SNS、学歴などの出来事は[`src/data/profile.json`](src/data/profile.json)で管理します。トップの所属表示には`affiliations.current.short`を使い、所属団体・役職と使用技術はトップ下部のプロフィール欄に表示します。使用技術は[`src/data/skills.json`](src/data/skills.json)で管理します。卒業・編入予定は`events`の`planned`を明示的に更新してください。日付が過ぎても自動的に「完了」にはなりません。AtCoderのURLとAPIの既定ユーザー名もSNSの登録から取得します。

Worksの分類、Timelineのフィルター、トップの代表作は[`src/data/presentation.json`](src/data/presentation.json)で選びます。代表作は最新順ではなく、ここに並べた活動IDの順で表示します。通常の新しい実績を掲載するだけなら、このファイルの変更は必要ありません。

`npm run check:content`はIDの重複、参照先、日付、分類、画像などを検査します。
