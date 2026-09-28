# トップページの更新方法

「制作物と担当内容」は `src/data/presentation.json` の `featuredActivityIds` に指定した活動を、記載順に表示します。活動の本文と作品詳細は `src/data/activities.json` に置きます。写真は活動の `media` に登録し、`homepage.imageId` で選びます。`homepage.role` と `homepage.linkText` は必要な場合だけ記入します。

「最近の活動」は各活動の `events` から完了済みの記録を新しい順に最大3件表示します。同じ活動に複数の記録がある場合は最新の1件を表示します。新しい大会や発表を追加すると、トップとTimelineが次のビルドで更新されます。リンク文言は活動の `links` で管理し、出来事ごとに変える必要がある場合だけ `event.linkText` を付けます。

左側の自己紹介と現在の所属は `src/data/profile.json` の `bio` と `affiliations.current.short` で管理します。詳しい登録方法とチェックはリポジトリの `README.md` を参照してください。

トップ下部の「プロフィール」には、同じ `profile.json` の所属団体・役職と `src/data/skills.json` の使用技術を表示します。旧 `/about` はこの欄へ転送します。
